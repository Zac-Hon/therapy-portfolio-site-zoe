# Zoe Lister Therapy Website

React and Vite one-page therapist portfolio site with a Netlify CMS admin area.

## Editing in Netlify

1. Deploy the repository to Netlify using the build command `npm run build` and publish directory `dist`.
2. In the Netlify site dashboard, enable **Identity**.
3. Under Identity settings, enable **Git Gateway**.
4. Invite editors under Identity > Users.
5. Open `https://your-site.netlify.app/admin/` and sign in.

The CMS writes changes back to the `main` branch. Netlify rebuilds the site after each published CMS change.

## What Can Be Edited

- **Home Page**: hero title, headline, subheadline, and introduction
- **About Page**: About heading and biography content
- **Services**: add, remove, reorder, or edit services, including duration and price
- **Professional Profile**: therapeutic approach, principles, who Zoe works with, and qualifications
- **Site Copy**: section labels, introductions, CTA text, and footer copy
- **Site Settings**: therapist name, location, email, phone, and profile image

### Uploading a profile image

Open **Site Settings** in the CMS and use **Profile Image**. Uploaded images are stored in `public/uploads` and are available on the site at `/uploads/...`.

## Local Development

```bash
npm install
npm run dev
```

The admin interface is available at `/admin/` when the local site is running.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
