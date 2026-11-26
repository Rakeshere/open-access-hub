<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

- Keep imported R&D site pages and shared UI under `src/muftlo`, with URL pages in `src/routes`, so source presentation remains intact while TanStack owns routing.
- Services page = `ServicesShowcase` (opening slider) + `ServiceCategories` (topic sections), both in `src/muftlo/Services`; service topics and subtopics live as data in `ServiceCategories` so one card design renders every category.
- Site images and videos are stored as Lovable project assets (.asset.json pointers), not hotlinked from third-party hosts, because outside links broke after import.
- Products live as data in `src/muftlo/Products/products-data.js` (one object per product); the `/products` listing and `/products/$slug` detail pages render every entry with the shared `ProductCard`, so adding a product means adding one data object.
- Home reference animations stay within the services and projects sections: data-driven expanding service panels and native sticky project cards preserve content and avoid scroll hijacking.
