---
title: "Hello World — My First Blog Post"
description: "Welcome to my blog! I'll be sharing my thoughts on software engineering, design, and technology."
date: "2026-02-17"
tags: ["announcement", "personal"]
---

# Welcome to My Blog

Hey! I'm Fabio — a software engineer and designer from Antwerp, Belgium. I've finally set up a blog on my portfolio site, and I'm excited to start sharing my thoughts and experiences.

## What to Expect

I'll be writing about things I'm passionate about:

- **Software Engineering** — deep dives into React, Next.js, TypeScript, and the tools I use daily
- **Design** — UI/UX principles, Figma workflows, and the intersection of code and design
- **Side Projects** — breakdowns of the things I build and the decisions behind them
- **Learning** — sharing what I learn along the way

## Why a Blog?

I've always believed the best way to learn is to teach. Writing forces you to think clearly about a topic and organize your thoughts in a way that others can understand.

> "If you can't explain it simply, you don't understand it well enough."

Plus, having a blog on my portfolio gives me a place to share more in-depth content that doesn't fit in a project description.

## A Quick Code Example

Here's a snippet of how this blog system works under the hood — it's all powered by markdown files:

```typescript
import matter from "gray-matter";

export function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    content,
  };
}
```

Drop a `.md` file in the `content/blog/` folder and it automatically appears on the site. No code changes needed.

## What's Next

I have a few posts in the pipeline already. Stay tuned!

---

Thanks for reading. If you have any questions or just want to say hi, feel free to reach out on the [contact page](/contact).
