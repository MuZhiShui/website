// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/eslint'
  ],

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
        { name: 'description', content: '牧之水 - Java架构师个人网站，专注后端技术与微服务架构，8年+企业级项目经验' },
        { name: 'keywords', content: '牧之水, Java架构师, Spring Boot, 微服务, 分布式系统, 后端开发, 性能优化, 技术咨询' },
        { name: 'author', content: '牧之水' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '牧之水 - Java架构师个人网站' },
        { property: 'og:description', content: '牧之水个人网站，Java架构师，专注后端技术与微服务架构' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:url', content: 'https://your-domain.com' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '牧之水 - Java架构师个人网站' },
        { name: 'twitter:description', content: '牧之水个人网站，Java架构师，专注后端技术与微服务架构' },
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
            name: '牧之水',
            url: 'https://your-domain.com',
                          jobTitle: 'Java架构师 & 后端技术专家',
                          description: 'Java架构师，专注后端技术与微服务架构，8年+企业级项目经验',
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
          siteName: '牧之水 - Java架构师个人网站',
    siteDescription: '牧之水个人网站，Java架构师，专注后端技术与微服务架构'
    }
  }
})