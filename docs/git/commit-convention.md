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
