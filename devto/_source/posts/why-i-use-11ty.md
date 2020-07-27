---
title: Why I use 11ty.io
tags: posts
---

## Web Development in 2020 is confusing...

I'll be honest, it's been ***really*** hard to keep up with web development technologies over the past 10 years.

For someone like me (someone who understands *basic* HTML, CSS and JavaScript) the myriad of frameworks can be extremely daunting. I feel like the barrier to entry for a lot of them is so high and they all seem to be overkill for what I need.

David Wickes seems to agree:

https://dev.to/gypsydave5/why-you-shouldnt-use-a-web-framework-3g24?signin=true

But now it seems like there's a new trend emerging that seems oddly familiar - [JAMstack](https://jamstack.org/). Rather than these highly reactive and fully-loaded websites, why don't we just generate static files and serve those! (How very 90's!)

## Turn JAMstack up to 11ty

Upon first glance at some of the [suggested tools](https://www.staticgen.com/) to generate JAMstack sites, a lot of them still had **way** too much bloat. When I came across [11ty](11ty.dev) (pronounced 'eleventy) though, it immediately appealed and was super easy to get to grips with.

Rather than being a framework used at runtime or some server-side 'on-the-fly' site generator, 11ty runs as a **compiler**. It takes inputs, glues them together (really quickly!) and outputs a static site. Simple. 

There are several great tutorials on the official 11ty site for beginners, but Omar Sinan does a great job here on Dev.to:

https://dev.to/oohsinan/create-a-blog-in-less-than-20-lines-of-code-using-11ty-3oh0

For me, I'm a very visual person so I've tried to illustrate how 11ty works for my development needs in this diagram:

![How 11ty works](https://dev-to-uploads.s3.amazonaws.com/i/sgo9z7ui1rzn3r7snv8p.png)
*(FYI, I do all my diagrams in [Excalidraw](https://excalidraw.com) - read about why [here](https://medium.com/@ndsn/why-excalidraw-is-mightier-than-the-pen-and-the-sword-47ecea8e81)!)*
