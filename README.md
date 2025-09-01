# Mono's Tech Blog

개인 + 기술 블로그입니다. 개발 경험과 기술적 인사이트를 공유합니다.

## 🚀 주요 기능

- **카테고리 시스템**: 포스트를 체계적으로 분류
- **검색 기능**: 제목, 내용, 카테고리, 태그로 검색 가능
- **반응형 디자인**: 모바일과 데스크톱 모두 지원
- **페이지네이션**: 포스트가 많아져도 깔끔하게 정리

## 🛠 기술 스택

- **정적 사이트 생성기**: Jekyll 4.4.1
- **테마**: Minima (커스터마이징)
- **호스팅**: GitHub Pages
- **검색**: JavaScript 클라이언트 사이드 검색

## 📁 프로젝트 구조

```
monolog/
├── _layouts/          # 커스텀 레이아웃
├── _includes/         # 재사용 가능한 HTML 컴포넌트
├── _posts/            # 블로그 포스트
├── _sass/             # SCSS 스타일 파일
├── assets/            # CSS, JS, 이미지 파일
├── categories/        # 카테고리 페이지
└── _config.yml        # Jekyll 설정
```

## 🚀 로컬 실행

### 1. 의존성 설치

```bash
# Ruby와 Jekyll 설치 (macOS)
brew install ruby
gem install jekyll bundler

# 의존성 설치
bundle install
```

### 2. 로컬 서버 실행

```bash
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000`으로 접속하세요.

## 📝 새 포스트 작성

`_posts/` 폴더에 마크다운 파일을 생성하세요:

```markdown
---
layout: post
title: "포스트 제목"
date: 2024-01-15
categories: [카테고리명]
tags: [태그1, 태그2]
excerpt: "포스트 요약"
---

포스트 내용...
```

## 🏷 카테고리 추가

`categories/` 폴더에 카테고리 페이지를 생성하세요:

```markdown
---
layout: category
title: 카테고리명
category: 카테고리명
description: 카테고리 설명
---
```

## 🎨 스타일 커스터마이징

- `_sass/` 폴더의 SCSS 파일을 수정하여 스타일 변경
- `assets/css/main.scss`에서 전체 스타일 통합 관리

## 🔍 검색 기능

- 검색 버튼 클릭 또는 `Ctrl/Cmd + K`로 검색창 열기
- 제목, 내용, 카테고리, 태그로 실시간 검색
- `Escape` 키로 검색창 닫기

## 📱 반응형 디자인

- 모바일 우선 접근법
- 모든 디바이스에서 최적화된 사용자 경험
- 터치 친화적 인터페이스

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 새로운 기능 브랜치를 만드세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 연락처

- **GitHub**: [github.com/mono](https://github.com/mono)
- **이메일**: your-email@example.com

---

*함께 성장하는 개발자 커뮤니티가 되었으면 합니다!* 🚀
