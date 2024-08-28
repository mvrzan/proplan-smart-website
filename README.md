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

An Astro.js website build with Tailwind for the [ProPlan SMART](https://proplansmart.hr) business.

# Table of Contents

- [ProPlan SMART website built with Astro.js and Tailwind](#proplan-smart-website-built-with-astrojs-and-tailwind)
- [Table of Contents](#table-of-contents)
  - [Website demo](#website-demo)
  - [Technologies used](#technologies-used)
- [Configuration](#configuration)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Development](#development)
  - [Deployment](#deployment)
- [Kudos](#kudos)

## Website demo

<img width="100%" src="./screenshots/page1.png"/>

<img width="100%" src="./screenshots/page2.png"/>

| Dark mode                                                | Light mode                                               |
| -------------------------------------------------------- | -------------------------------------------------------- |
| <img width="100%" src="./screenshots/mobile-page1.png"/> | <img width="100%" src="./screenshots/mobile-page2.png"/> |

![](./screenshots/website-demo.gif)

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

# Kudos

This project was inspired by the free [Agencex Astro](https://astro.build/themes/details/agencex/) theme template made by [Johnkat Mj](https://github.com/Johnkat-Mj).
