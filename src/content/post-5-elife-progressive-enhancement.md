---
slug: '/post-5'
date: '2023-04-24'
title: 'Progressie Enhancements at eLife'
tags: ['Development', 'NextJS', 'JavaScript', 'Accessibility']
---

## Introduction

Now I've covered [progressive enhancement](/blog/post-3) and [graceful degradation](/blog/post-4), I can use these methods on our Enhanced Preprints Platform to see where we can enhance the user experience, and where we can retrofit better non-JavaScript fall backs.

## Tabs

In our article pages, the default view for the user is the 'Full Text', where options for 'Figures' and 'Reviews' appear in a tabbed layout. When the user selects a tab, current behavior dictates that a user is directed to a new page for each tab! This is perfect if you don't have JavaScript enabled, but it feels slow for the vast majority of users that have JavaScript-enabled browsers and expect a 'snappier' website. The enhancement is achieved by adding a conditional render and a state that dictates which tab should be active. This allows the content to be rendered instantly when the user selects a different tab - rather than NextJS having to serve up a whole new page!

## Expanding lists

In the content headers of an article, the authors and institutions behind the article are listed. These were already following the principles of progressive enhancement - as the render was dependent on a state being null to decide whether to render an interactive 'expandable' list, or the whole list with no interactivity. The downside is a React `useEffect` was being used upon every initial render to initialize the interactive list - creating a 'flashing' effect on the page. In conjunction with the non-enhanced tabbing method, this visual effect would happen every time the user switches between tabs. The improved experience comes in two parts:

1. Enhanced tabs (see aboe)
2. Avoiding the useEffect 'shortcut' method

So enhanced tabbing will prevent the whole page re-rendering - preventing the `useEffect` from triggering when the user switches tabs. However, avoiding `useEffect` and replacing it with `useMemo` or a conditional render to test JavaScript is running in the browser will present a cached result of the page. How do we test if JavaScript is enabled? We test `typeof window !== 'undefined'`, this checks if the `window` object (only in the browser) is available. This will prevent NextJS presenting a JavaScript-enabled version of the page - as `window` is not available in the server.

## Modals

This last feature requires a retrofitted progressive enhancement, as there is no non-JavaScript alternative for the 'Share' and 'Cite' modal windows on an article page. These modal windows appear on top of everything else in the page, and are dependent on a React state to render. If JavaScript isn't available, the buttons that trigger the modal windows do nothing, which is not acceptable. The default action should work similarly to this website, where the 'Share' button will direct you to [/share](/blog/post-5/share), or alternatively to a section of the page (i.e. `#share`) which contains the same content.
