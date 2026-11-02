<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep offers in the typed `src/lib/offers.ts` catalog and render them via the shared Offers section; this keeps demo safeguards testable independently of presentation.
- Reuse the official uploaded RuralClap logo via its CDN asset pointer and the shared `Brand` component for navigation and footer; derive `public/favicon.png` from the same artwork to keep branding consistent. Never redraw or recolor the logo artwork.
- Use lightweight CSS, IntersectionObserver and requestAnimationFrame for motion with reduced-motion and visible-content fallbacks; no heavyweight animation dependency is needed.
