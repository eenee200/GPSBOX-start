// (built into vite/client — you don't write this)
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}