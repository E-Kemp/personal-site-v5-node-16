---
slug: '/post-2'
date: '2023-03-13'
title: 'The great GatsbyJS project'
tags: ['Introduction', 'Development', 'Gatsby', 'DevOps', 'Tailwind']
---

## Introduction

This first development post detils my trials and tribulations making a blog using GatsbyJS and ~~MUI~~ TailwindCSS! I started making this website a while ago, however there have been multiple roadblocks - namely Digital Ocean being stuck in the stone age of Node 16 (Gatbsy 5 **requires** Node 18), and MUI being terrible to work with Gatsby (maybe Gatsby is the problem, but we live laugh love!).

## Digital Ocean

This site is being hosted on Digital Ocean's App Platform, which is pretty handy considering it's free tier supports static sites (which this website is!). Where it's not handy is that is doesn't support Node 18, the version of NodeJS that most frameworks have updated to, it's been out for over a year! In order to make my website actually build in this app platform, I have had to maticulously downgrade from Gatsby V5 to Gatsby V4, which is supported by Node 16 - a version reaching it's end-of-life in September. Not only did I have to make the downgrade, the time taken to figure out that I needed to do this was one hell of a rabbit hole! I considered Docker-ising the app (but that would've cost money to host!), or even using a different platofmrm, but free is free and I'm a stubborn mo\*\*\*\*fu\*\*\*r sometimes!

## GatsbyJS

[Gatsby](https://www.gatsbyjs.com/) is a wonderful React framework that allows super fast page loading times by caching pages and serving them statically! In simpler terms, it generates pages and stores them so nothing needs to be generated on-the-fly. It also supports page templating, so these blog posts can be written using .md files, and Gatbys uses GraphQL to render the .md content and format it how you're seeing this now.

## MUI

Next up, my favourite (or used to be) frontend tool! [MUI (formerly Material UI)](https://mui.com/) is a glorious frontend library if you're making a bog-standard React project with no framework-specific routing - but Gatsby isn't that. The `Link` component differs betweent MUI and Gatsby - Gatsby's specific Link improves internal routiung performance, so I tried to style the Gatsby Link to be identical to MUI's. That turned into too much effort and I realised my life isn't dictated by one tool, so what about the other frontend tools out there? Enter TailwindCSS.

## TailwindCSS

This seeminly solved all my frontend woes, [TailwindCSS](https://tailwindcss.com/) is a somewhat interactive CSS library that acts like a 21st century version of Bootstrap. This allowed me to make my Gatsby links and external links look identical - win! It's also proven very capable of making this website look pretty, so I'll definitely be using it to further style the website (after spending an afternoon stripping MUI out of the project).

## Final thoughts

This experience has been fun and insightful, but don't be stunned if I re-make this using something completely different like Svelte or Remix. This website is an experiment and a channel for me to show off what I've been doing with my 10% time so my manager doesn't fire me (that's a joke). See you in the next post!
