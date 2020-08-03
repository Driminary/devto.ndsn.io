# devto.ndsn.io

[![Built with eleventy](https://img.shields.io/badge/Built%20with%2011ty-%E2%9C%93-brightgreen?logo=eleventy)](https://11ty.dev)
[![Vercel hosting](https://img.shields.io/badge/Vercel%20Hosting-%E2%9C%93-brightgreen?logo=vercel)](https://vercel.com)

> This repo contains the end-to-end source code for [devto.ndsn.io](https://devto.ndsn.io) and is published entirely free and under the MIT License - Hopefully the code and below description explains the architecture well!

> If you do end up using this for any commercial purpose, or found the code useful please consider buying me a coffee:
[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-orange?logo=Buy%20Me%20A%20Coffee&logoColor=white)](https://www.buymeacoffee.com/ndsn)

A website built with 11ty that pulls posts from a Dev.to RSS feed and generates a static site with links to the posts. [Live Demo](https://devto.ndsn.io/) 

Check out the associated blog post on Dev.to [here](https://dev.to/ndsn/add-dev-to-posts-to-your-static-site-in-20-lines-of-code-409h)!

## Architecture

![Architecture](https://i.ibb.co/6n6j5nG/devto-architecture.png)
*(Click image to view full size. Made with [Excalidraw](https://excalidraw.com) - raw file: **architecture.excalidraw**)*

Source folder : **```_source```**
Output folder : **```_build```**

To build:
```bash
npm install
npx @11ty/eleventy
```

## Dev.to Feed URL

To modify the feed that the script calls, either set the environment variable ```DEVTO_APIURL``` or change the fallback URL in the ```_data/devtoapi.js``` file in the ```_source``` folder.

## Deployment

First, build the files, then upload the ```_build``` directory your favourite static site host!
