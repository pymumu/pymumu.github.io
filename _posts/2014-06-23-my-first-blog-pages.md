---
layout: blog
title: My first blog.
date: 2014-06-24 23:00:00 +0800
categories: misc
description: Hi, everybody, This is my first github blog page, it's my pleasure to see you all. The content contains some Markdown syntax test cases.
tags: jekyll
---
Hi, everybody, This is my first github blog page, it's my pleasure to see you all. The content contains some Markdown syntax test cases.

# Start
## Basic writing
### Paragraphs
On July 2, an alien mothership entered Earth's orbit and deployed several dozen saucer-shaped "destroyer" spacecraft, each 15 miles (24 km) wide.

On July 3, the Black Knights, a squadron of Marine Corps F/A-18 Hornets, participated in an assault on a destroyer near the city of Los Angeles.
### Headings
# The largest heading 
## The second largest heading 

### Blockquotes
In the words of Abraham Lincoln:

> Pardon my french

### Styling text
*This text will be italic*
**This text will be bold**
**Everyone _must_ attend the meeting at 5 o'clock today.**

## Lists
### Unordered lists
* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered lists
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b
   * 
### Nested lists
1. Item 1
  1. A corollary to the above item.
  2. Yet another point to consider.
2. Item 2
  * A corollary that does not need to be ordered.
    * This is indented four spaces, because it's two spaces further than the item above.
    * You might want to consider making a new list.
3. Item 3

## Images
![My helpful screenshot](https://avatars3.githubusercontent.com/u/3275997?s=460)

## Code formatting
### Inline formats
Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`.


### Multiple lines
Check out this neat program I wrote:

```
x = 0
x = 2 + 2
what is x
```

## Links
[Visit GitHub!](www.github.com)


# GitHub Flavored Markdown
## Multiple underscores in words
perform_complicated_task
do_this_and_do_that_and_another_thing

## URL autolinking
http://example.com

## Strikethrough
~~Mistaken text.~~

## Fenced code blocks
Here's an example:

```
function test() {
  console.log("notice the blank line before this function?");
}
```

## Syntax highlighting
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

{% highlight c linenos %}
int main(int argc, char *argv[])
{
	printf("Hello, world!");
	return 0;
}
{% endhighlight %}

# Tables
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |

| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |


First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column


# Writing on GitHub
## Markup
### Newlines
Roses are red
Violets are blue

### Task lists
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> are supported 
- [x] list syntax is required (any unordered or ordered list supported) 
- [x] this is a complete item 
- [ ] this is an incomplete item

- [ ] a bigger project
  - [ ] first subtask #1234
  - [ ] follow up subtask #4321
  - [ ] final subtask cc @mention
- [ ] a separate task
