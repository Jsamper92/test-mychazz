## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

## Project Overview

### npm scripts

| Script(s)             | Description                                       |
| --------------------- | ------------------------------------------------- |
| `dev`                 | Run server next.js mode development               |
| `build`               | Build project next.js                             |
| `lint`                | lint project next.js                              |
| `start:sanity`        | Launch build sanity studio.                       |
| `build:sanity`        | Build sanity studio on folder `.sanity/`          |
| `deploy:graphql`      | Deploy graphql BBDD                               |
| `deploy:sanity`       | Deploy sanity studio                              |
| `design-tokens-utils` | Build architecture tokens by `tokens/tokens.json` |

### Important files and folders

| File(s)                          | Description                                                                                                                                                                                                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/pages`                         | This folder is essential in Next.js and contains the routes and pages of your application. Each JavaScript (or TypeScript) file within this folder becomes an accessible route in your application. For example, `/pages/index.tsx` corresponds to the main page of your site. |
| `/components`                    | Reusable components of your application, such as navigation bars, footers, custom buttons, etc.                                                                                                                                                                                |
| `/styles`                        | If you are using CSS to style your application, you can place style files (CSS, SCSS, etc.) in this folder. These styles can be imported into your components.                                                                                                                 |
| `/public`                        | The `/public` folder is used for static files like images, fonts, and other resources. Files here can be accessed directly from the browser.                                                                                                                                   |
| `/lib`                           | In this folder, you can place shared JavaScript code that isn't a page or component, such as utilities or helper functions.                                                                                                                                                    |
| `/docs`                          | Optionally, you can create a documentation folder to store Markdown (MD) files that explain how your application works, how to set it up, and other important details.                                                                                                         |
| `docs/sanity`                    | docs sanity cms                                                                                                                                                                                                                                                                |
| `sanity.config.ts`               | Config file for Sanity Studio                                                                                                                                                                                                                                                  |
| `sanity.cli.ts`                  | Config file for Sanity CLI                                                                                                                                                                                                                                                     |
| `/pages/index.tsx`               | Landing page for `/`.                                                                                                                                                                                                                                                          |
| `/pages/studio/[[...index]].tsx` | Where Sanity Studio is mounted                                                                                                                                                                                                                                                 |
| `/sanity/schemas.ts`             | Where Sanity Studio gets its content types from                                                                                                                                                                                                                                |
| `/sanity/env.ts`                 | Configuration for the Sanity project and dataset                                                                                                                                                                                                                               |
| `/sanity/schemas.ts`             | Where Sanity Studio gets its content types from                                                                                                                                                                                                                                |
| `/sanity/lib/client.ts`          | Sanity client configured based on `env.ts`                                                                                                                                                                                                                                     |
| `/sanity/lib/apollo.ts`          | Apollo graphql client configured based on `env.ts`                                                                                                                                                                                                                             |
| `/sanity/lib/image.ts`           | Sanity image builder - unused in this template, but is needed to render Sanity images                                                                                                                                                                                          |

All pages are wrapped in `pages/_document.tsx` and `pages/_app.tsx`.

## Commit Message Convention

This website follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
 
Commit messages will be checked using [husky and commit lint](https://theodorusclarence.com/library/husky-commitlint-prettier).
 
### Format
 
`<type>(optional scope): <description>`
Example: `feat(pre-event): add speakers section`
 
### 1. Type
 
The types that can be used are:
 
- feat → If there are additions/removals of coding features. Example: `feat: add table on landing page`, `feat: remove table from landing page`
- fix → If there is a bug fixing, followed by the bug. Example: `fix: illustration overflows in mobile view`
- docs → Update documentation (README.md)
- style → Update style, does not change logic at all (reorder import, fix whitespace, remove comment)
- chore → If installing, update dependencies
- refactor → If there are code changes, with the same end result, but a different, better approach.
- ci → Update github workflows, husky
- test → Update testing suite
- revert → When performing a revert commit
- perf → Fix something that improves performance (derived state, memo)
- vercel → If there is an empty commit to trigger vercel deployment. Example: `vercel:trigger deployment`
 
### 2. Optional Scope
 
Example of labeling per page `feat(pre-event): add date label`
 
\*If there is no scope, then there is no need to write it.
 
### 3. Description
 
The description must be able to describe what is being done.
 
Add BREAKING CHANGE in the description if there are significant changes.
 
**If there are several things being done, then commit them in stages.**
 
- After the colon, there is a space. Example: `feat: add something`
- If the type is `fix` immediately mention the issue. Example: `fix: file size limiter not working`
- Use imperative words, and present tense: "change" not "changed" or "changes"
- Don't use capital letters at the beginning of the description sentence
- Don't add a period at the end of the description