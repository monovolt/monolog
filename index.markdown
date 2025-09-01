---
layout: home
title: "Mono's Tech Blog"
subtitle: "개발 경험과 기술적 인사이트를 공유하는 블로그입니다"
---

## 최근 포스트

{% raw %}{% for post in paginator.posts %}
<div class="post-preview">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p class="post-meta">{{ post.date | date: "%Y년 %m월 %d일" }} | {{ post.categories | join: ", " }}</p>
  <p>{{ post.excerpt }}</p>
</div>
{% endfor %}

{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">이전</a>
  {% endif %}
  <span class="page_number">페이지 {{ paginator.page }} / {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">다음</a>
  {% endif %}
</div>
{% endif %}{% endraw %}
