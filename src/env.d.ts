/// <reference types="astro/client" />

// Declare image imports to avoid TypeScript errors
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

// Declare CSS/SCSS module imports
declare module '*.css' {
  const styles: Record<string, string>;
  export default styles;
}

declare module '*.scss' {
  const styles: Record<string, string>;
  export default styles;
}
