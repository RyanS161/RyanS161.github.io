---
layout: page
title: books
permalink: /books/
description: List of the books I've read
nav: true
nav_order: 4
horizontal: false
---

<!-- pages/books.md -->
<div class="books">
{%- assign sorted_books = site.books | sort: "read_date" -%}
<!-- Generate cards for each project -->
{% if page.horizontal -%}
<div class="container">
  <div class="row row-cols-2">
  {%- for book in sorted_books -%}
    {% include projects_horizontal.html %}
  {%- endfor %}
  </div>
</div>
{%- else -%}
<div class="grid">
  {%- for book in sorted_books -%}
    {% include book.html %}
  {%- endfor %}
</div>
{%- endif -%}
</div>
