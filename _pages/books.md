---
layout: page
title: Reading
permalink: /reading/
description: 
nav: false
nav_order: 4
horizontal: false
---

<!-- pages/books.md -->
<div class="books">
{%- assign sorted_books = site.books | sort: "read_date" | reverse -%}
<table>
  {%- for book in sorted_books -%}
    {% include book.html %}
  {%- endfor %}
</table>
</div>
