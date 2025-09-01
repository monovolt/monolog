// 블로그 검색 기능
class BlogSearch {
  constructor() {
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.searchOverlay = document.getElementById('search-overlay');
    this.posts = [];
    
    this.init();
  }
  
  async init() {
    await this.loadPosts();
    this.bindEvents();
  }
  
  async loadPosts() {
    try {
      // Jekyll의 site.posts 데이터를 가져옴
      const response = await fetch('/search.json');
      this.posts = await response.json();
    } catch (error) {
      console.error('포스트 로딩 실패:', error);
      this.posts = [];
    }
  }
  
  bindEvents() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
      
      this.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeSearch();
        }
      });
    }
    
    // 검색 오버레이 클릭 시 닫기
    if (this.searchOverlay) {
      this.searchOverlay.addEventListener('click', () => {
        this.closeSearch();
      });
    }
  }
  
  handleSearch(query) {
    if (!query.trim()) {
      this.hideResults();
      return;
    }
    
    const results = this.searchPosts(query);
    this.displayResults(results);
  }
  
  searchPosts(query) {
    const searchTerm = query.toLowerCase();
    
    return this.posts.filter(post => {
      const title = post.title.toLowerCase();
      const content = post.content.toLowerCase();
      const categories = post.categories ? post.categories.join(' ').toLowerCase() : '';
      const tags = post.tags ? post.tags.join(' ').toLowerCase() : '';
      
      return title.includes(searchTerm) || 
             content.includes(searchTerm) || 
             categories.includes(searchTerm) || 
             tags.includes(searchTerm);
    });
  }
  
  displayResults(results) {
    if (!this.searchResults) return;
    
    if (results.length === 0) {
      this.searchResults.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>';
    } else {
      const resultsHtml = results.map(post => `
        <div class="search-result-item">
          <h3><a href="${post.url}">${post.title}</a></h3>
          <p class="search-meta">
            ${post.date} | ${post.categories ? post.categories.join(', ') : '카테고리 없음'}
          </p>
          <p class="search-excerpt">${this.getExcerpt(post.content, 100)}</p>
        </div>
      `).join('');
      
      this.searchResults.innerHTML = resultsHtml;
    }
    
    this.showResults();
  }
  
  getExcerpt(content, maxLength) {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  }
  
  showResults() {
    if (this.searchResults) {
      this.searchResults.style.display = 'block';
    }
  }
  
  hideResults() {
    if (this.searchResults) {
      this.searchResults.style.display = 'none';
    }
  }
  
  openSearch() {
    if (this.searchOverlay) {
      this.searchOverlay.style.display = 'block';
      this.searchInput.focus();
    }
  }
  
  closeSearch() {
    if (this.searchOverlay) {
      this.searchOverlay.style.display = 'none';
      this.hideResults();
      if (this.searchInput) {
        this.searchInput.value = '';
      }
    }
  }
}

// 검색 기능 초기화
document.addEventListener('DOMContentLoaded', () => {
  new BlogSearch();
});

// 검색 버튼 클릭 이벤트
document.addEventListener('click', (e) => {
  if (e.target.matches('.search-toggle')) {
    e.preventDefault();
    const search = document.querySelector('.search-overlay');
    if (search) {
      search.style.display = 'block';
      const input = search.querySelector('#search-input');
      if (input) input.focus();
    }
  }
});
