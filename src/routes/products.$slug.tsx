import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/product-detail";
import { getProduct } from "@/muftlo/Products/products-data";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const product = getProduct(params.slug);
    const title = product ? `${product.name} | R&D Software Solutions` : "Product | R&D Software Solutions";
    const description = product ? `${product.tagline} ${product.summary}` : "Software products by R&D Software Solutions.";
    return {
      meta: [
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(product ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: Page,
});
