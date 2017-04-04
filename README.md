# Hapi with handlebars workshop

## Quickstart

```bash
git clone https://github.com/mcelearr/handlebars-with-hapi-workshop.git && cd handlebars-with-hapi-workshop
npm install
npm start
```

## What

A simple workshop to practice building a working hapi server using handlebars, layout/partials, helpers and serving static files.

## Workshop

Your friend loves [palindromes](https://en.wikipedia.org/wiki/Palindrome) and he wants to you to help him improve his website about the Panama Canal.

### Step 1 (Solution branch - added-partial)

1. Edit views/partials/headers.hbs to display the title.
2. Add the header partial to layout/default.hbs.

### Step 2 (Solution branch - solution)

1. Create a new route handler for the '/reverse' endpoint. Make sure the 'message' is the same as the routes/home.js.
2. Export a function from helpers/reverse.js which takes a string and reverses it.
3. Fill in views/reverse.hbs so that the reverse helper is applied to the message. Check the css file to see which class you should apply to the image.
