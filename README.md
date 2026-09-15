# Daira

Website for Daira, a youth-led initiative creating spaces where women and girls can speak without shame, access knowledge and support, and claim their place in their communities.

*ہم بھی دیکھیں گے (We too shall see)*

**Live site:** https://daira-ngo.vercel.app

## What's on the site

- **Home**: what Daira is, its aims and objectives
- **About**: the story behind Daira and its leadership, with a profile page for each leader
- **Helplines**: support services grouped by category, each with a detail page
- **Legal Rights** and **Islamic Rights**: plain-language guides
- **Get Involved**: ways to volunteer or support Daira
- **Contact** and **Privacy Policy**

## Built with

- Plain HTML, CSS and JavaScript, with no framework and no build step
- A tiny Node server (`dev-server.js`) for local previewing
- Deployed on Vercel as a static site

## Running it locally

You need Node.js installed.

```bash
node dev-server.js
```

Then open http://localhost:4001.

You can also open `public/index.html` directly in a browser, but some pages load data with JavaScript and work best through the server.

## Project structure

```
public/
  *.html               one file per page
  css/style.css        all styles, including the mobile menu at the end
  js/nav.js            mobile hamburger menu
  js/reveal.js         scroll animations
  js/helpline-data.js  helpline listings
  js/leader-data.js    leadership profiles
  images/
dev-server.js          local preview server
vercel.json            tells Vercel to serve the public/ folder
```

## Editing content

- **Helplines**: edit `public/js/helpline-data.js`. Please double-check phone numbers and links before publishing, since people rely on them.
- **Leadership profiles**: edit `public/js/leader-data.js`.
- **New pages**: copy an existing page so it keeps the same header, mobile menu button and scripts.

## Deployment

Every push to `main` deploys automatically to Vercel.

## Contact

- Instagram: [@daira.ngo](https://www.instagram.com/daira.ngo/)
- Email: daira.ngo.info@gmail.com
