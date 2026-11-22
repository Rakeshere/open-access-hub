declare module "@/muftlo/*" {
  const component: () => import("react").ReactNode;
  export default component;
}
declare module "@/muftlo/Products/products-data" {
  export interface Product {
    slug: string;
    name: string;
    badge: string;
    tagline: string;
    summary: string;
    tags: string[];
  }
  export const products: Product[];
  export function getProduct(slug: string): Product | undefined;
}
