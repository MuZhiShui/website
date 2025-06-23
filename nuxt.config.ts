// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/color-mode'
  ],

  // 暗色模式配置
  colorMode: {
    preference: 'dark', // 默认为深色模式
    fallback: 'dark', // 后备方案为深色
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

  // 开发服务器配置 - 允许外部访问
  devServer: {
    port: 3000,
    host: '0.0.0.0' // 允许所有IP访问，这样可以进行端口映射
  },

  // SEO优化配置
  app: {
    head: {
      // 基础meta标签
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'BaiShui - 个人网站，展示技术作品和专业能力' },
        { name: 'keywords', content: 'BaiShui, 个人网站, 前端开发, Vue.js, Nuxt.js, 技术博客' },
        { name: 'author', content: 'BaiShui' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'BaiShui - 个人网站' },
        { property: 'og:description', content: 'BaiShui个人网站，展示技术作品和专业能力' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:url', content: 'https://your-domain.com' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'BaiShui - 个人网站' },
        { name: 'twitter:description', content: 'BaiShui个人网站，展示技术作品和专业能力' },
        { name: 'twitter:image', content: '/og-image.jpg' },
        
        // 其他SEO标签
        { name: 'theme-color', content: '#8b5cf6' },
        { name: 'msapplication-TileColor', content: '#8b5cf6' }
      ],
      
      // 结构化数据
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'BaiShui',
            url: 'https://your-domain.com',
            jobTitle: '前端开发工程师',
            description: '专注于Vue.js、Nuxt.js等前端技术的开发者',
            sameAs: [
              'https://github.com/your-username',
              'https://twitter.com/your-username'
            ]
          })
        }
      ],
      
      // 网站图标
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://your-domain.com' }
      ]
    }
  },
  
  // SSR配置
  ssr: true,
  
  // 路由配置
  router: {
    options: {
      strict: false,
      sensitive: false
    }
  },
  
  // 性能优化
  nitro: {
    prerender: {
      // 预渲染首页和主要页面
      routes: ['/', '/about', '/projects', '/contact']
    }
  },
  
  // CSS配置
  css: ['~/assets/css/main.css'],
  
  // 运行时配置
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://your-domain.com',
      siteName: 'BaiShui - 个人网站',
      siteDescription: 'BaiShui个人网站，展示技术作品和专业能力'
    }
  }
})