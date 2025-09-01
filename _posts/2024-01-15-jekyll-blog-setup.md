---
layout: post
title: "Jekyll로 개인 기술 블로그 만들기"
date: 2024-01-15
categories: [개발팁]
tags: [jekyll, github-pages, 블로그]
excerpt: "Jekyll을 사용해서 GitHub Pages에 개인 기술 블로그를 구축한 경험을 공유합니다."
---

## Jekyll 블로그 구축기

안녕하세요! 오늘은 Jekyll을 사용해서 개인 기술 블로그를 만든 경험을 공유하려고 합니다.

### 왜 Jekyll을 선택했나요?

Jekyll을 선택한 이유는 다음과 같습니다:

1. **GitHub Pages와의 완벽한 호환성**
2. **마크다운 지원으로 쉬운 글 작성**
3. **정적 사이트 생성으로 빠른 로딩 속도**
4. **무료 호스팅 가능**

### 설치 과정

```bash
# Jekyll 설치
gem install jekyll bundler

# 새 블로그 생성
jekyll new my-blog
cd my-blog

# 로컬 서버 실행
bundle exec jekyll serve
```

### 주요 기능 구현

#### 1. 카테고리 시스템
카테고리별로 포스트를 분류할 수 있도록 구현했습니다.

#### 2. 검색 기능
JavaScript를 사용해서 클라이언트 사이드 검색을 구현했습니다.

#### 3. 반응형 디자인
모바일과 데스크톱 모두에서 잘 보이도록 CSS를 작성했습니다.

### 마무리

Jekyll로 블로그를 만드는 것은 생각보다 간단하면서도 강력했습니다. 
앞으로 더 많은 개발 경험과 기술적 인사이트를 이 블로그를 통해 공유하겠습니다!

---

*이 포스트는 Jekyll 블로그 구축 과정에서 작성되었습니다.*
