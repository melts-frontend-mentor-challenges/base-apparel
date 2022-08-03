# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: https://www.frontendmentor.io/solutions/base-apparel-coming-soon-challenge-solution-Skr7q-tmc
- Live Site URL: https://melt-base-apparel.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript
- Mobile and Desktop Responsivity

### What I learned

Custom Javascript form validation, and turning off the pesky browser's defaults, was new for me. I still feel that I need to do more projects similar to this one, but I have an understanding of how the logic works now.

I ended up employing Chrome DevTools to help me to better visualize alignment issues and responsivity (its hover box model is very convenient!). I knew this was a great tool, but it was something I never explored. I felt it was necessary to use DevTools in this project. I'm interested in seeing what more DevTools can do for me, and I'm proud of myself for adopting this tool when I needed it. It felt so natural!

One thing I plan on doing in the future--
Mobile First. When I started doing the media queries, I regretted it. I felt it would have been much smoother of a transition had I not been trying to undo the more complex layout of my desktop design.

I also wanted to paste an interesting piece of code down below. I was looking for a way to align the newsletter title according to the Figma design I was given. I was struggling to do it myself in a way that wasn't clunky. I felt there had to be a better way. I found on Stack Overflow a solution: "white-space: pre-line". If I moved the title words to a new line using the enter key in the DOM, and using the white-space CSS property, I was able to line my title up correctly on a desktop display. If I didn't space out the words, and left them inline in the DOM, this effect didn't work. I thought this was neat, and I wanted to highlight it here:

```html
<h1 class="newsletter-title">We're 
<span class="coming-soon">Coming 
Soon</span></h1>
```
```css
.newsletter-title {
	text-transform: uppercase;
	font-weight: 300;
	font-size: 4rem;
	display: block;
	white-space: pre-line;
	letter-spacing: 1.083rem;
	line-height: 4rem;
}

.opening-announcement,
.newsletter-title{
	color: #CE9898;
}

.coming-soon {
	font-weight: 600;
	line-height: 4.438rem;
	color: #423A3A;
}
```

### Continued development

I will absolutely be exploring others' methods of custom js form validation. I only watched a couple of videos, and fully explored one, so I feel that it would be beneficial for me to become comfortably familiar with the different ways that data is validated.

### Useful resources

- https://stackoverflow.com/ - Of course, always a great addition in a dev's resource section. I feel that Stack Overflow is the very first website I go to whenever a piece of code is breaking, and I can't figure out why.
- https://www.w3schools.com/ - I regularly use this website to check my code's syntax. I can learn a concept quickly, but syntax is something that is acquired with usage and experience. Besides playing creating with code, W3 Schools is great for helping me through that process.
- https://scrimba.com/ - A great partner to Frontend Mentor. I've been enjoying using both websites to advance my knowledge and refresh rusty skills.
- https://www.youtube.com/ - An obvious one, but I had to peruse several videos for the custom JS form validation.
- https://codepen.io/ - Such a fun and explorative website, great for playing around with others' code that is both unfamiliar and very pretty.

## Author

- Frontend Mentor - [@MeltedGreenVelvet] https://www.frontendmentor.io/profile/MeltedGreenVelvet

## Acknowledgments

I heavily referenced a JavaScript Academy pen, as well as watched this developer's accompanying YouTube video. I coded along to his video, practiced with a separate repo, and eventually utilized his solution in this challenge. Both the pen and video are linked below.
https://codepen.io/javascriptacademy-stash/pen/oNeNMNR
https://www.youtube.com/watch?v=CYlNJpltjMM&t=29s
