# Modular CMS Scaffold

This repository contains a minimal scaffolding for a modular CMS built with React, Express and Firebase.

## Structure

- **frontend/** – Vite + React application with Tailwind CSS
- **functions/** – Firebase Cloud Functions running an Express app
- **plugins/** – Directory for plugins. Each plugin can have `frontend/`, `backend/` and `shared/` folders

A sample plugin is provided under `plugins/sample-plugin`.

## Development

Install dependencies for all workspaces:

```bash
npm install
```

Run the frontend for local development:

```bash
cd frontend
npm run dev
```

Deploy functions and hosting with Firebase CLI:

```bash
firebase deploy
```
