// global.d.ts - add to project root
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  const content: any;
  export default content;
}

// Optional: exported empty object to keep it a module in some setups
export {};