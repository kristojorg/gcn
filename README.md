This is a coding demo for GCN. It shows a proposed new navigation for globalcyclingnetwork.com. 

## TOC

1. How to view it
1. The concept
1. Answers to prompt questions
1. How I built it

# How to view it

I have deployed the site at https://gcn.kristo.sh, so feel free to view it there. You can also run it locally:

```bash
npm i
npm run dev
```
Then open http://localhost:3000 in your browser.

**Note:** The site only really works on mobile, since that's what the prompt asked for. It's not pretty on desktop!

# The concept

There are many different ways the navigation can be structured that will have different impacts, and choosing between them would require a better understanding of GCN's goals and user base. I made the assumption that one group of visitors comes to GCN specifically to watch racing, while another group comes to browse the Youtube content, and a final group comes looking for a specific video or help on a particular topic. I tried to structure the navigation such that users can quickly get to the content they want, while also cross-pollinating between those user groups. 

The "Home" tab shows users top content from all sources: Live races, replays and results, Youtube videos, and maybe articles or other sources of cycling news. From there, they can quickly switch to the "Racing", "GCN+" or "Shop" tabs to narrow down the content they are browsing.

The menu in the top left then provides a more detailed breakdown of the various places a user can go, and offers a search function as well.

# Answers to prompt questions

## What further improvements would I make

- Determine who the different user groups are and what our goals are for each.
- A/B test this with a different design, maybe featuring horizontal carousels to see which drives more traffic towards our goals.
- Add more options to the menu, and work on the layout of that to make it easier to navigate.
- Add more detailed race results.
- Add writeups and "key moments" to replays, so viewers can quickly watch the most exciting parts of the race.

## How would I prepare this for production

- Integration test my components and pages
- Add automated End-to-end tests using cypress
- CI/CD workflow
  - Make sure tests are run on every PR
  - Deploy preview site on every PR
- Speed and accessibility testing
  - Ensure a Google Lighthouse score above 90
- Add an error tracking system
- Make the home page tabs sync'd with the browser URL

# How I built it

I wrote this in React using the [Next.js](https://nextjs.org/) framework because I am very familiar with it. I also made use of a themeable component library called [Chakra](https://chakra-ui.com/), which I am also familiar with. I didn't add any tests, but I did write this using Typescript.

## Things that don't work

- There are many links that lead to a 404 page
- The search bar does nothing currently
- The shop page has nothing on it

