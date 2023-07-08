---
slug: '/post-6'
date: '2023-05-15'
title: 'Exploring NextJS 13'
tags: ['Development', 'NextJS']
---

## Introduction

At [eLife](https://github.com/elifesciences), we use NextJS in our latest project to deliver preprints. Recently, NextJS has received an update that changes the game in terms of data fetching and how components can be rendered, which means there are some things I need to explore...

## Data fetching

With the latest version of NextJS, there is a new way to fetch data without the need for `getServerSideProps()` or `getStaticProps()`. Instead, we can now simply `fetch()` externally in separate functions, and specifying whether the data should be cached or not, and that will tell NextJS whether the render the page statically or dynamically.

##  Client components

In NextJS, components will typically be rendered as React Server components, where data is fetched, and the component is rendered by the server before being delivered to the client. In this new release, we opt to 'render' the component in the user's browser by using a `'use client'` directive at the top of _any_ component to make the user's browser render the component.

This will make progressive enhancement much easier, as we can make the user's browser decide whether to render a component depending on the presence of JavaScript, rather than making strange workarounds in the NextJS renderer.

## Implementation

What better way to implement this new version of NextJS than migrating this very blog! ~~Over time, this website will change over to NextJS.~~

--------------------------------

## Edits

**07/07/2023:** I didn't switch to NextJS, it's overcomplicated for even a blog, Gatsby is so blazingly fast, and I'd rather focus on making posts (for now...)
