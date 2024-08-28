<br />
<a  href="https://astro.build/">
<div align="center">
<img  src="https://astro.js.org/astro.png"  alt="Salesforce"  width="250"  />
</a>
</div>
<br />
<div align="center">
  ⚡️ ProPlan SMART website built with Astro.js and Tailwind ⚡️
</div>
<br />

# ProPlan SMART website built with Astro.js and Tailwind

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Technologies used

- [Astro.js](https://docs.astro.build/en/getting-started/)
- [Tailwind](https://tailwindcss.com)
- [Typescript](https://www.typescriptlang.org)

  For a more detailed overview of the development & production dependencies, please check `package.json` file.

# Configuration

## Requirements

To run this application locally you will need the following:

- Node.js version 20 or later installed (type `node -v` in your terminal to check). Follow [instructions](https://nodejs.org/en/download) if you don't have node installed
- `npm` version 10.0.0 or later installed (type `npm -v` in your terminal to check). Node.js includes `npm` by default
- `git` installed. Follow the instructions to [install git](https://git-scm.com/downloads)

## Setup

The first step is to clone (or download) the repository and install the project dependencies via a terminal interface by running the `npm install` in the proper folder:

```
cd proplan-smart-website
npm install
```

## Development

To run the application locally, use the command line, navigate to the folder, ensure the dependencies are installed properly, and run the following:

```
npm run dev
```

This will run the development server locally and your website will be available on the following URL: `http://localhost:4321/`

## Deployment

NOTE: This project is currently live and deployed at [proplansmart.hr](https://proplansmart.hr). Deployment instructions are for educational purpose only.

Once you are happy with changes you've made, run the following command in your terminal window:

```
npm run build
```

This will build your production site to `./dist/` folder. The next step is for you to deploy this folder to the hosting provider of your choice.
