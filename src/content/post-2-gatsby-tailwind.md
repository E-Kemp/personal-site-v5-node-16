---
slug: '/post-2'
date: '2023-03-13'
title: 'The great GatsbyJS project'
---

## Introduction

This first development post detils my trials and tribulations making a blog using GatsbyJS and ~~MUI~~ TailwindCSS! I started making this website a while ago, however there have been multiple roadblocks - namely Digital Ocean being stuck in the stone age of Node 16 (Gatbsy 5 **requires** Node 18 &#x1f643;).

## Digital Ocean

This site is being hosted on Digital Ocean's App Platform, which is pretty handy considering it's free tier supports static sites (which this website is!). Where it's not handy is that is doesn't support Node 18, the version of NodeJS that most frameworks have updated to, it's been out for over a year! In order to make my website actually build in this app platform, I have had to maticulously downgrade from Gatsby V5 to Gatsby V4, which is supported by Node 16. Not only did I have to make the downgrade, the time taken to figure out that I needed to do this was one hell of a rabbit hole! I considered Docker-ising the app (but that would've cost money to host!), or even using a different platofmrm, but free is free and I'm a stubborn mo\*\*\*\*fu\*\*\*r sometimes!

## GatsbyJS

Gatsby is a wonderful React framework that allows super fast page loading times by caching pages and serving them statically! In simpler terms, it generates pages and stores them so nothing needs to be generated on-the-fly. It also supports page templating, so these blog posts can be written using .md files, and Gatbys uses GraphQL to parse the .md content and format it how you're seeing this now.

## MUI

Next up, my favourite (or used to be) frontend tool! Material UI is a glorious frontend library if you're making a bog-standard React project with no framework-specific routing - but Gatsby isn't that. The `Link` component differs betweent MUI and Gatsby - Gatsby's specific improves internal routiung performance! so I tried to style the Gatsby Link to be identical to MUI's, but that was a lot of effort, and I realised my life isn't dictated by one tool - so what about the other frontend tools out there? Enter TailwindCSS...

## Tailwind CSS

This seeminly solved all my frontend woes, a somewhat interactive CSS library that acts like a 21st century version of Bootstrap. This allowed me to make my Gatsby links and external links look identical, win! It's also proven very capable of making this website look pretty, so I'll definitely be using it to further style the website (after spending an afternoon stripping MUI out of the project).
