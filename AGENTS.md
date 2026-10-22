# slicc-webcomponents

Empty `@ai-ecoverse/slicc-webcomponents` package. Node ≥ 24, ESM. Lint with `slicc-lint`. No comments in any file. Agent guidance lives only in this AGENTS.md (≤1000 characters). Do not add CLAUDE.md. Unit tests stay in gitignored `test/unit/`; integration tests are committed in `test/integration/`. CI and releases run from `.github/workflows/ci.yml`, which calls slicc-shared-web's `pipeline.yml`: semantic-release publishes from `main` with npm trusted publishing (fledgling).
