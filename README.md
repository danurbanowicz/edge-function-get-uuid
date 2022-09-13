[![Netlify Status](https://api.netlify.com/api/v1/badges/2164afa3-77a2-4936-a217-de8463a29bd1/deploy-status)](https://app.netlify.com/sites/edge-function-get-uuid/deploys)

# edge-function-get-uuid

### What is it?

A simple [Edge Function](https://github.com/danurbanowicz/edge-function-get-uuid/blob/main/netlify/edge-functions/get-uuid.ts) example that returns a random v4 UUID and some basic user geolocation data from [Netlify's Edge CDN](https://docs.netlify.com/edge-functions/overview/).

### Play around on the [Demo Site](https://edge-function-get-uuid.netlify.app/)

You can also call the function endpoint directly to return a JSON object

https://edge-function-get-uuid.netlify.app/get

Or deploy your own copy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danurbanowicz/edge-function-get-uuid)

### Bug reports, feature requests, etc

This repo is part of an ongoing project I am working on exploring common use cases for serverless functions, and I welcome contributions and suggestions. Feel free to submit an issue or PR!

### TO DO: improve readme, improve demo fetch JS