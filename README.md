This is a coding demo for GCN. It shows a proposed new navigation for globalcyclingnetwork.com. 

# TOC
1. How to view it
1. Answers to questions
1. Questions & Assumptions
1. How I built it

# How to view it

# Answers to questions

## What further improvements would I make

- Determine who the cohorts are and more specifics about what our goals are for visitors
- A/B test this with a different design, maybe featuring carousels to see which drives more traffic towards our goals.

## How would I prepare this for production

- Unit testing
- Integration testing
- CI/CD workflow
- Speed and accessibility testing
- Error tracking

# Questions & Assumptions

- Questions
  - What is the goal? Drive app subscriptions? Shop purchases? Get views on the Youtube videos? To convert Youtube viewers to racing viewers?
  - What are the different user groups? GCN has some distinct offerings, and it would be nice to know how much overlap there is in the customer base for each.
  - Is this for logged in users only?
  - Do people come looking for something in particular or to surf?

- Assumptions
  - This is to be the "subscriber home page".
  - It's sort of a cycling news feed, and meant to get people to the content they want as quickly as possible. 
  - Visitors are coming looking for cycling content in general, not just youtube videos or just racing videos.
  - We might also be able to use the same page for non subscribers, and put a paywall directly on the paid videos. 

- Recommendations

# How I built it

I am optimizing for speed here. I'm writing it in React, using the Next.js framework because I'm very familiar with it and can get a site up using Next very quickly. I also am using a component library (Chakra) with a theme applied to be more GCN-style. 

I am writing this in Typescript.

I haven't added any tests.

