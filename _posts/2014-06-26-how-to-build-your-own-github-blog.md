---
layout: blog
title: How to build you own github blog pages.
date: 2014-06-26 23:00:00 +0800
categories: misc
tags: jekyll
description: This is an indroduction to how to build your own github blog.
---
As my own blog has been almost completed, I'm writing this guide to anyone who wants to build his own blog.

The website is based on jekyll, jekyll is a simple, blog-aware, static site generator, it tool can transform your plain text into static websites.

You can learn more about jekyll at http://jekyllrb.com/. for Chinese, you can visit at http://jekyllcn.com/.

# Requirements
## Accounts
Some accounts is necessary, such as github account, some not, but if you have these accounts , you can do more facilities on your site.
### GitHub Account
An github account is required, you can sign up at https://github.com/join.
### Google Account (optional)
Google account is used for statics and web analysis, you can sign up at http://www.google.com (YOU CANNOT ACCESS GOOGLE IF YOU ARE IN CHINA, FUCK GFW.)
### Disqus Account (optional)
Disqus is a third social comments system, you can let people write their ideas on you blog pages. you can sign up at https://www.disqus.com/
 

# Before start
## sample blog in plain text
The blog file is in markdown or textile syntax, you can learn at http://daringfireball.net/projects/markdown/.

Here is a example:
```
layout: post
title: draft
date: 2014-06-24 23:00:00 +0800
categories: misc
description: page description.
tags: tags
---
This is an example.
```

## for lazy guys
If you just want to use free blog, don't want to create website yourself, you can use this wizard to create your own page, it's very easy.

1. Sign in github with your account.
2. Open the following url, and do as wizard.
	> **https://github.com/`username`/username.github.io/generated_pages/new**
3. Clone your repository to local.
4. Write your blog file named `YYYY-MM-DD-blog-title.md`. and put it in _posts directory, the syntax of blog is markdown.
5. Push it to github server.
6. You can access you website at `http://yourname.github.io.` (The server will take some minutes for the first publish)

## if you are a geek
if you want to build your blog pages yourself, just read the following text.

# Some thing you need to know
You can host your website on github, the process is as follows.

1. Build your own website project according to jekyllrb.
2. Create a new repository on github named `username.github.io.`
3. Push your project into your repository on github.
4. Github server will run jekyll to generate your website, and publish your website automatically.
5. You can access you website at `http://yourname.github.io.` (The server will take some minutes for the first publish)

The detailed wizard is at https://pages.github.com/

## Tools 
### Local computer tools
* git : http://rubyinstaller.org/downloads/
* ruby : http://git-scm.com/ (Windows users can download TortoiseGit. )

# Build site
## knowledge
jekyll project has it's own directory struct, the struct is like these.
```
.
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
|   └── members.yml
├── _site
└── index.html
```
You can learn more about this at http://jekyllrb.com/docs/structure

## How-to
### About Front-matter
Any file that contains a YAML front matter block will be processed by Jekyll as a special file.

You can learn more about YAML Front Matter at http://jekyllrb.com/docs/frontmatter/.

### Front-end framework. 
Bootstrap is a popular front-end framework, You can use it to design your website in your own style.

Here are some example pages.
http://getbootstrap.com/getting-started/#examples

You can use them as your templete pages.

### Display blog posts. 
Here is an introduction to write or display posts, http://jekyllrb.com/docs/posts/

### Some other components you may need.
* jquery : http://jquery.com/
* highlight : http://highlightjs.org/
* font-awesome : http://fortawesome.github.io/Font-Awesome/

### Add comments system 
There are many comments systems, I prefer [Disqus](https://www.disqus.com/)

If your blog is in Chinese, you can use [多说](http://www.duoshuo.com/) as your comments system.

### At last 
The rest is your creativity, you can create you own pages with these powerfull components.

You can also [fork me](https://github.com/pymumu/pymumu.github.io) at github.

# useful links
## github pages
* https://pages.github.com/

## personal website list
* https://github.com/jekyll/jekyll/wiki/sites

## social comments system
* Disqus : https://www.disqus.com/
* 多说 : http://www.duoshuo.com/

## markdown syntax
* syntax practice : http://markdown-here.com/livedemo.html
* syntax : https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet

