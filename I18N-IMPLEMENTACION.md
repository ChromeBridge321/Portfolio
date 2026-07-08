# Implementación de Internacionalización (i18n)

## Arquitectura general

Se implementó internacionalización **sin dependencias externas**, usando únicamente las APIs nativas de React. La arquitectura tiene 3 capas:

```
┌─────────────────────────────────────────┐
│  lib/i18n/es.json / en.json             │  ← Capa de datos (traducciones)
├─────────────────────────────────────────┤
│  lib/i18n/context.tsx                   │  ← Capa de lógica (provider + hook)
├─────────────────────────────────────────┤
│  Componentes (pages, navbar, footer)    │  ← Capa de presentación (usan t())
└─────────────────────────────────────────┘
```

---

## Archivo: `lib/i18n/context.tsx`

Este es el corazón del sistema. Desglose línea por línea:

### Imports

```tsx
"use client";
```
- **Directiva de Next.js**: Indica que este archivo es un **Client Component**. Es obligatorio porque usamos `useState`, `useEffect` y `useContext` — hooks que solo funcionan en el navegador (no en el servidor).

```tsx
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
```
- **`createContext`**: Crea un objeto de contexto React. Permite pasar datos a través del árbol de componentes sin props intermedias (prop drilling). Es como un "túnel" de datos global.
- **`useContext`**: Hook que consume un contexto. Devuelve el valor que el Provider más cercano está exponiendo.
- **`useState`**: Hook de estado. Guarda el idioma actual (`"es"` o `"en"`). Cuando cambia, re-renderiza todos los componentes que consumen el contexto.
- **`useEffect`**: Hook de efecto secundario. Se ejecuta una vez al montar el componente (array de dependencias vacío `[]`) para leer `localStorage` y restaurar el idioma guardado.
- **`ReactNode`**: Tipo TypeScript para cualquier cosa que React pueda renderizar (JSX, strings, números, null, etc.).

```tsx
import es from "./es.json";
import en from "./en.json";
```
- Importa los archivos JSON de traducciones. Next.js permite importar JSON directamente como módulos.

### Types

```tsx
type Locale = "es" | "en";
```
- **Type literal**: Define que solo hay 2 valores válidos para el idioma. TypeScript impedirá usar cualquier otro string.

```tsx
interface I18nContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}
```
- **Interface**: Define la forma del objeto que el contexto expone en toda la app. Tiene 3 propiedades:
  - `locale`: el idioma actual
  - `setLocale`: función para cambiar el idioma
  - `t`: función de traducción (abreviatura de "translate")

### Función auxiliar

```tsx
const translations: Record<Locale, Record<string, unknown>> = { es, en };
```
- **`Record<Locale, Record<string, unknown>>`**: Tipo TypeScript que dice: un objeto donde las claves son `"es"` o `"en"`, y los valores son objetos con strings como claves y cualquier tipo como valor.

```tsx
function getNestedValue(obj: Record<string, unknown>, path: string): string {
    const keys = path.split(".");
    let current: unknown = obj;
    for (const key of keys) {
        if (typeof current !== "object" || current === null) return path;
        current = (current as Record<string, unknown>)[key];
    }
    return typeof current === "string" ? current : path;
}
```
- **¿Para qué?** Para acceder a traducciones anidadas. Si la clave es `"nav.sobreMi"`, esta función:
  1. Divide el string por `.` → `["nav", "sobreMi"]`
  2. Navega el objeto: `obj["nav"]["sobreMi"]`
  3. Devuelve `"Sobre Mi"` (español) o `"About Me"` (inglés)
  4. Si no encuentra la clave, devuelve el path original (fallback seguro)

### Provider

```tsx
const I18nContext = createContext<I18nContextValue | null>(null);
```
- Crea el contexto con valor inicial `null`. El tipo `| null` indica que puede no estar inicializado.

```tsx
export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("es");
```
- **Componente provider**: Recibe `children` (los componentes hijos que lo envuelven).
- **`useState<Locale>("es")`**: Estado inicial en español. El tipo `<Locale>` asegura que solo sea `"es"` o `"en"`.

```tsx
    useEffect(() => {
        const saved = localStorage.getItem("locale") as Locale | null;
        if (saved && (saved === "es" || saved === "en")) {
            setLocaleState(saved);
            document.documentElement.lang = saved;
        }
    }, []);
```
- **`useEffect` con `[]`**: Se ejecuta solo una vez, al montar el componente en el navegador.
- **`localStorage`**: API del navegador para guardar datos persistentes (no se borra al cerrar la pestaña). Guarda la clave `"locale"` con valor `"es"` o `"en"`.
- **`as Locale | null`**: Type assertion — TypeScript no sabe qué devuelve `localStorage`, así que le decimos que puede ser `Locale` o `null`.
- **`document.documentElement.lang`**: Actualiza el atributo `<html lang="...">` del DOM. Esto es importante para:
  - **SEO**: Google sabe en qué idioma está el contenido
  - **Accesibilidad**: Los lectores de pantalla saben qué idioma pronunciar

```tsx
    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("locale", newLocale);
        document.documentElement.lang = newLocale;
    };
```
- **¿Por qué no usar `setLocaleState` directamente?** Porque necesitamos efectos secundarios: guardar en `localStorage` y actualizar el DOM. Esta función envuelve todo en una sola acción atómica.

```tsx
    const t = (key: string): string => {
        return getNestedValue(translations[locale] as Record<string, unknown>, key);
    };
```
- **La función `t`**: Es la que todos los componentes usan. Recibe una clave como `"nav.sobreMi"` y devuelve la traducción según el `locale` actual.
- **`as Record<string, unknown>`**: Type assertion necesario porque `translations[locale]` es de tipo `Record<string, unknown>`.

```tsx
    return (
        <I18nContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </I18nContext.Provider>
    );
```
- **`I18nContext.Provider`**: Componente que "provee" el contexto a todos sus hijos. El prop `value` es lo que `useContext` devolverá.

```tsx
export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
}
```
- **Hook personalizado**: Encapsula `useContext` + validación. Si alguien usa `useI18n()` fuera del Provider, lanza un error claro en vez de fallar silenciosamente.

---

## Archivos: `es.json` y `en.json`

Archivos JSON con estructura anidada que espeja la estructura de la app:

```json
{
    "nav": { "sobreMi": "Sobre Mi", ... },
    "home": { "rol": "DESARROLLADOR FULL-STACK", ... },
    "proyectos": { "titulo": "Proyectos", "data": { "poelmc": "...", ... } },
    ...
}
```

- **¿Por qué JSON y no TypeScript objects?** JSON es más ligero, no necesita compilación, y es el estándar para archivos de traducción (compatible con herramientas de traducción como Crowdin, Lokalise, etc.)
- **¿Por qué anidado?** Para organizar las claves por sección de la app. `"nav.sobreMi"` es más legible que `"NAV_SOBRE_MI"`.

---

## Modificación: `app/layout.tsx`

```tsx
import { I18nProvider } from "@/lib/i18n/context";
```
- **`@/`**: Alias de path configurado en `tsconfig.json` que apunta a la raíz del proyecto.

```tsx
<body className="min-h-full flex flex-col">
    <I18nProvider>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
    </I18nProvider>
</body>
```
- **¿Por qué envolver todo aquí?** Porque el layout es el punto más alto del árbol de componentes. Al envolver `Navbar`, `main` y `Footer` con el Provider, todos pueden usar `useI18n()`.
- **`layout.tsx` es Server Component** pero `I18nProvider` es Client Component. Next.js permite esto: un Server Component puede renderizar Client Components como hijos.

---

## Modificación: `components/navBar/navBar.tsx`

```tsx
import { useI18n } from "@/lib/i18n/context";
```
- Importa el hook personalizado para acceder al contexto.

```tsx
const { locale, setLocale, t } = useI18n();
```
- **Destructuring**: Extrae las 3 propiedades del contexto. `locale` para saber qué botón mostrar, `setLocale` para cambiar idioma, `t` para traducir los items del menú.

```tsx
const items = [
    { name: t("nav.sobreMi"), href: "/" },
    ...
];
```
- **¿Por qué `t()` aquí y no hardcoded?** Porque los items del menú deben cambiar cuando el usuario cambia de idioma. `t("nav.sobreMi")` devuelve `"Sobre Mi"` en español o `"About Me"` en inglés.

```tsx
const toggleLocale = () => {
    setLocale(locale === "es" ? "en" : "es");
};
```
- **Toggle simple**: Si es español, cambia a inglés y viceversa.

```tsx
<button onClick={toggleLocale} className="...">
    {locale === "es" ? "EN" : "ES"}
</button>
```
- **¿Por qué muestra "EN" cuando está en español?** Porque el botón indica **a qué idioma va a cambiar**, no cuál está activo. Es convención UX estándar (como los botones de idioma en Netflix, YouTube, etc.)

---

## Modificación de páginas (ejemplo: `app/page.tsx`)

```tsx
import { useI18n } from "@/lib/i18n/context";
```

```tsx
const { t } = useI18n();
```

```tsx
<h3>{t("home.rol")}</h3>
<p>{t("home.introMobile")}</p>
<Link>{t("home.verProyectos")}</Link>
```
- Cada texto hardcodeado se reemplaza con `t("clave")`. El componente no sabe en qué idioma está — solo pide la traducción y el contexto se encarga de devolver el valor correcto.

---

## Modificación: `DB/proyectos.ts`

```tsx
{
    id: 1,
    nombre: "POELMC",
    translationKey: "proyectos.data.poelmc",  // ← NUEVO
    tecnologias: ["Angular", "Tailwind"],
    ...
}
```
- **¿Por qué un campo `translationKey` en vez de `descripcion`?** Porque los datos estáticos no pueden usar hooks. Al guardar la clave de traducción, el componente puede hacer `t(proyecto.translationKey)` para obtener la descripción en el idioma correcto.

---

## Resumen de dependencias

| Dependencia | Tipo | ¿Qué hace? |
|---|---|---|
| `createContext` | React (nativa) | Crea el contexto global |
| `useContext` | React (nativa) | Consume el contexto |
| `useState` | React (nativa) | Guarda el idioma actual |
| `useEffect` | React (nativa) | Lee `localStorage` al montar |
| `localStorage` | Web API (navegador) | Persiste la preferencia de idioma |
| `document.documentElement.lang` | DOM API | Actualiza el atributo `lang` del HTML |

**Cero dependencias externas**. Todo se resuelve con React core + Web APIs del navegador.

---

## Cómo usar

1. En cualquier componente client, importar el hook:
   ```tsx
   import { useI18n } from "@/lib/i18n/context";
   ```

2. Dentro del componente, llamar al hook:
   ```tsx
   const { t } = useI18n();
   ```

3. Reemplazar textos hardcodeados:
   ```tsx
   // Antes
   <h1>Proyectos</h1>
   
   // Después
   <h1>{t("proyectos.titulo")}</h1>
   ```

4. Para agregar un nuevo texto, agregar la clave en ambos archivos JSON:
   ```json
   // es.json
   { "nuevaSeccion": { "nuevoTexto": "Hola" } }
   
   // en.json
   { "nuevaSeccion": { "nuevoTexto": "Hello" } }
   ```

5. Usar en el componente:
   ```tsx
   <p>{t("nuevaSeccion.nuevoTexto")}</p>
   ```
