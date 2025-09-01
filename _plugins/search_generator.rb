# 검색을 위한 JSON 생성기
module Jekyll
  class SearchGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # 검색용 JSON 파일 생성
      site.data['search'] = site.posts.docs.map do |post|
        {
          'title' => post.data['title'],
          'url' => post.url,
          'date' => post.date.strftime('%Y년 %m월 %d일'),
          'categories' => post.data['categories'] || [],
          'tags' => post.data['tags'] || [],
          'content' => post.content.gsub(/<[^>]*>/, '').gsub(/\s+/, ' ').strip,
          'excerpt' => post.data['excerpt'] || post.excerpt || ''
        }
      end

      # search.json 파일 생성
      site.pages << SearchPage.new(site, site.data['search'])
    end
  end

  class SearchPage < Page
    def initialize(site, search_data)
      @site = site
      @base = site.source
      @dir = '/'
      @name = 'search.json'

      self.process(@name)
      self.data = {}
      self.content = search_data.to_json
    end

    def render(layouts, site_payload)
      self.content
    end
  end
end
