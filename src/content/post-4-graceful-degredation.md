---
slug: '/post-4'
date: '2023-04-21'
title: 'Graceful degredation with JavaScript'
tags: ['Development', 'NextJS', 'JavaScript', 'Accessibility']
---

## Introduction

So in my [last post](/blog/post-3), I talked about the importance of progressive enhancement, and how this method of building websites accommodates those without JavaScript **first**, then uses JavaScript to enhance the user experience. Enter graceful degradation.

## Graceful degradation

An inclusive method with the same outcome, graceful degradation approaches browser inclusion from the opposite direction - making a JavaScript enhancement in the first instance, and adding fall backs to support users that may not have JavaScript available or enabled. Let's see an [example](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement) from the W3 foundation using a print page functionality:

In progressive enhancement, the HTML would display instructions to print the page using the browser's tools. JavaScript would replace this HTML containing the instructions with a print button, that contains an on-click handler to print the page.

In graceful degradation, the button would come first in the HTML, and a fallback instruction using the `<noscript>` element would explain how to print the page without JavaScript. However, this may leave a print button lingering with no action.

In most cases progressive enhancement would be preferable over graceful degradation, however there are some edge cases where graceful degradation would be suitable:

- There is no time to retroactively apply progressive enhancement.
- The enhancement may make the difference between a few milliseconds of loading time that could be of large impact to revenue.
- The product is so dependent on JavaScript that it makes more sense to maintain a 'basic' version instead, such as for maps.

... In other words, do progressive enhancement in most cases, and use graceful degradation when it becomes too much hassle to employ progressive enhancement.
