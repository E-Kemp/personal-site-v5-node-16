---
slug: '/post-3'
date: '2023-04-06'
title: 'Progressive enhancement with JavaScript'
tags: ['Development', 'NextJS', 'JavaScript', 'Accessibility']
---

## Introduction

I started this research with the mindset of "no JavaScript? Tough", however upon researching the reasons behind supporting a non-JavaScript experience my mind shifted. Let's explore that...

## The JavaScript experience

In my last job we created web apps that relied on client-side JavaScript to render the page using the Create React App template (a terrible choice, don't use it for public-facing services). This allowed us to make web apps that felt blazing fast and was easy to rapidly develop in a short time-frame. It built an internalised expectation on the user that JavaScript _is always_ enabled and working by default - without considering otherwise.

In other words: I was under the preconceived opinion that JavaScript is required for user to browse the internet. As a frontend developer I was naively ready to exclude users that aren't able to access JavaScript with this idea that it was required with the web framework we use at eLife. This is a terrible outlook on the user experience.

## What is progressive enhancement?

This is where my research started to shift my opinion. I first came across the [gov.uk](https://gds.blog.gov.uk/2013/10/21/how-many-people-are-missing-out-on-JavaScript-enhancement/) blog that talks about the no-JS experience online, that specifically 1 in 93 users experience the internet without JavaScript, whether that be from their own choice or some other factor such as a poor network connection or accessibility tools. Progressive enhancement is a process of building HTML first, getting required content and functionality rendered, then adding layers using CSS and JavaScript to enhance the user experience.

Consider a help chat box on a travel agency website, it could be assumed that JavaScript will be required to interact with the travel agent. Now consider JavaScript isn't working, how does the user communicate with the person on the other end? A progressively enhanced website would ensure a method of communication - whether that be a link to an email address or a form where the user can leave their details for the agent to email, text or phone the user.

Now that one may be an extreme example as a developer of a glorified blog (not my words!). However, consider the modal, a box that displays in front of the web page on the click of a button. That requires JavaScript to work, but what about when JavaScript doesn't work? The instance is to display the information in another portion of the page in case there is no JavaScript available, such as in a footer or in `<noscript>` tags. This is relevant to [eLife's reviewed preprints](https://elifesciences.org/reviewed-preprints) as there are modals used such as citation information and sharing functionality.

## Conclusion

So, my main outcome is that progressive enhancement isn't some afterthought that can be had, there are many people out there that won't see this page with JavaScript, and I need to make sure they have the same experience as someone who does have JavaScript. Let's see if I can introduce a modal here that works without JavaScript...
