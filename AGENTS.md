<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# English Daily Lab project rules

- This is a public static single-user application deployed on GitHub Pages.
- Never add authentication or registration unless explicitly requested.
- Do not add a server, cloud database, or paid service without explicit permission.
- Daily lesson selection is deterministic from the current date in Asia/Bangkok so every device sees the same lesson.
- Browser `localStorage` is the primary progress store. Export/import must merge history and never replace it destructively.
- Never delete learning history.
- Keep any legacy files in `data/` ignored and untouched unless the user explicitly requests a migration or archival operation.
- Store Thai text as UTF-8 and verify that Thai explanations render correctly.
- Learning attempts and mistakes must eventually remain historically traceable.
- Avoid unnecessary dependencies and avoid over-engineering.
- Do not introduce paid services.
- Run lint and tests after important changes. Run a production build for release-level changes.
