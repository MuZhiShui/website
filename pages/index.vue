<template>
  <!-- 首页内容 -->
  <div style="min-height: 100vh; background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 16.67%, #ddd6fe 33.33%, #c4b5fd 50%, #a78bfa 66.67%, #8b5cf6 83.33%, #7c3aed 100%); position: relative;">
    <!-- 使用 Header 组件 -->
    <Header />
    
    <!-- 主要内容区域 - 添加适当的顶部边距避免被固定导航遮挡 -->
    <main style="padding-top: 100px;">
      <!-- 英雄区域 -->
      <section style="min-height: calc(100vh - 100px); display: flex; align-items: center; justify-content: center; text-align: center; padding: 0 16px;">
        <div style="max-width: 800px;">
          <h1 style="font-size: 3.5rem; font-weight: bold; color: white; margin-bottom: 24px; text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
            欢迎来到 BaiShui 的世界
          </h1>
          <p style="font-size: 1.25rem; color: rgba(255, 255, 255, 0.9); margin-bottom: 32px; line-height: 1.6;">
            我是一名充满激情的前端开发者，专注于创造优美的用户体验和高性能的Web应用
          </p>
          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
            <button style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); color: white; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s;">
              查看作品
            </button>
            <button style="background: transparent; border: 2px solid rgba(255, 255, 255, 0.5); color: white; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s;">
              联系我
            </button>
          </div>
        </div>
      </section>

      <!-- 个人介绍区域 -->
      <section style="padding: 80px 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); margin: 40px 20px; border-radius: 20px; border: 2px solid #ef4444;">
        <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1.618fr 1fr; gap: 40px; align-items: center;">
          <!-- 左侧内容 -->
          <div>
            <h2 style="font-size: 2.5rem; font-weight: bold; color: white; margin-bottom: 24px;">关于我</h2>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
              我热爱编程，喜欢探索新技术，始终保持学习的热情。从前端基础到现代框架，从UI设计到用户体验优化，我享受将创意转化为现实的过程。
            </p>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.1rem; line-height: 1.8;">
              专注于Vue.js生态系统，熟练使用Nuxt.js、TypeScript等现代开发工具，致力于打造高质量的Web应用。
            </p>
          </div>
          
          <!-- 右侧头像区域 -->
          <div style="display: flex; justify-content: center;">
            <div style="width: 250px; height: 250px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid rgba(255, 255, 255, 0.3);">
              <span style="font-size: 80px;">👨‍💻</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 技能展示区域 -->
      <section style="padding: 80px 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); margin: 40px 20px; border-radius: 20px; border: 2px solid #3b82f6;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <h2 style="font-size: 2.5rem; font-weight: bold; color: white; text-align: center; margin-bottom: 48px;">技能专长</h2>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
            <!-- 技能卡片 -->
            <div style="background: rgba(255, 255, 255, 0.15); padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);">
              <div style="font-size: 2rem; margin-bottom: 16px;">🚀</div>
              <h3 style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">前端开发</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">Vue.js、React、TypeScript、HTML5、CSS3、JavaScript ES6+</p>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.15); padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);">
              <div style="font-size: 2rem; margin-bottom: 16px;">🎨</div>
              <h3 style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">UI/UX设计</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">界面设计、用户体验优化、响应式设计、原型制作</p>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.15); padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);">
              <div style="font-size: 2rem; margin-bottom: 16px;">🛠️</div>
              <h3 style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">开发工具</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">Git、Webpack、Vite、Docker、CI/CD、性能优化</p>
            </div>
          </div>
          
          <!-- 技能标签云 -->
          <div style="margin-top: 40px; text-align: center;">
            <div style="display: inline-flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
              <span style="background: rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(255, 255, 255, 0.3);">Vue.js</span>
              <span style="background: rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(255, 255, 255, 0.3);">Nuxt.js</span>
              <span style="background: rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(255, 255, 255, 0.3);">TypeScript</span>
              <span style="background: rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(255, 255, 255, 0.3);">Tailwind CSS</span>
              <span style="background: rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(255, 255, 255, 0.3);">Node.js</span>
              <span style="background: rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(255, 255, 255, 0.3);">MongoDB</span>
              <span style="background: rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(255, 255, 255, 0.3);">Docker</span>
              <span style="background: rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(255, 255, 255, 0.3);">Git</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 服务展示区域 -->
      <section style="padding: 80px 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); margin: 40px 20px; border-radius: 20px; border: 2px solid #10b981;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <h2 style="font-size: 2.5rem; font-weight: bold; color: white; text-align: center; margin-bottom: 48px;">我的服务</h2>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
            <!-- 服务卡片 -->
            <div style="background: rgba(255, 255, 255, 0.15); padding: 32px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); text-align: center; transition: transform 0.3s;">
              <div style="font-size: 3rem; margin-bottom: 20px;">🌐</div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">后端开发</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 20px;">
                设计和开发可扩展的服务器端应用程序
              </p>
              <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px;">
                设计和开发可扩展的服务器端应用和API接口
              </p>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.15); padding: 32px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); text-align: center; transition: transform 0.3s;">
              <div style="font-size: 3rem; margin-bottom: 20px;">📱</div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">移动端开发</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 20px;">
                开发跨平台移动应用，提供原生体验
              </p>
              <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px;">
                开发跨平台移动应用，提供原生体验
              </p>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.15); padding: 32px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); text-align: center; transition: transform 0.3s;">
              <div style="font-size: 3rem; margin-bottom: 20px;">🎯</div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">网站优化</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 20px;">
                性能优化、SEO优化，提升用户体验和搜索排名
              </p>
              <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px;">
                性能优化、SEO优化，提升用户体验和搜索排名
              </p>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.15); padding: 32px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); text-align: center; transition: transform 0.3s;">
              <div style="font-size: 3rem; margin-bottom: 20px;">🛠️</div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">技术咨询</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 20px;">
                提供技术选型建议和项目架构设计咨询服务
              </p>
              <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px;">
                提供技术选型建议和项目架构设计咨询服务
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 最新动态区域 -->
      <section style="padding: 80px 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); margin: 40px 20px; border-radius: 20px; border: 2px solid #8b5cf6;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <h2 style="font-size: 2.5rem; font-weight: bold; color: white; text-align: center; margin-bottom: 48px;">最新动态</h2>
          
          <div style="display: grid; grid-template-columns: 1.618fr 1fr; gap: 40px; align-items: start;">
            <!-- 左侧：最新项目 -->
            <div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 24px;">🚀 最新项目</h3>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);">
                <h4 style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">个人网站重构</h4>
                <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 16px;">
                  使用Nuxt.js重新构建个人网站，采用现代化设计和优化的用户体验
                </p>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <span style="background: rgba(139, 92, 246, 0.3); color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">Nuxt.js</span>
                  <span style="background: rgba(139, 92, 246, 0.3); color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">Vue 3</span>
                  <span style="background: rgba(139, 92, 246, 0.3); color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">TypeScript</span>
                </div>
              </div>
            </div>
            
            <!-- 右侧：快速导航 -->
            <div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 24px;">🧭 快速导航</h3>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <a href="#about" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; padding: 12px 16px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; transition: all 0.3s; border: 1px solid rgba(255, 255, 255, 0.2);">
                  📖 了解更多
                </a>
                <a href="#projects" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; padding: 12px 16px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; transition: all 0.3s; border: 1px solid rgba(255, 255, 255, 0.2);">
                  💼 查看作品
                </a>
                <a href="#contact" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; padding: 12px 16px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; transition: all 0.3s; border: 1px solid rgba(255, 255, 255, 0.2);">
                  📞 联系我
                </a>
                <a href="#blog" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; padding: 12px 16px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; transition: all 0.3s; border: 1px solid rgba(255, 255, 255, 0.2);">
                  📝 技术博客
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 使用 Footer 组件 -->
    <Footer />
  </div>
</template>

<script setup>
// SEO meta标签设置
useHead({
  title: 'BaiShui - 专业前端开发者 | Vue.js & Nuxt.js 专家',
  meta: [
    {
      name: 'description',
      content: 'BaiShui个人网站 - 专业前端开发者，精通Vue.js、Nuxt.js、TypeScript等现代前端技术，提供高质量的Web开发服务。'
    },
    {
      name: 'keywords',
      content: 'BaiShui, 前端开发, Vue.js, Nuxt.js, TypeScript, JavaScript, Web开发, UI设计, 个人网站'
    },
    {
      property: 'og:title',
      content: 'BaiShui - 专业前端开发者 | Vue.js & Nuxt.js 专家'
    },
    {
      property: 'og:description',
      content: 'BaiShui个人网站 - 专业前端开发者，精通Vue.js、Nuxt.js、TypeScript等现代前端技术，提供高质量的Web开发服务。'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: '/og-home.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'BaiShui - 专业前端开发者 | Vue.js & Nuxt.js 专家'
    },
    {
      name: 'twitter:description',
      content: 'BaiShui个人网站 - 专业前端开发者，精通Vue.js、Nuxt.js、TypeScript等现代前端技术，提供高质量的Web开发服务。'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://your-domain.com'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'BaiShui',
        jobTitle: '前端开发工程师',
        description: '专业前端开发者，精通Vue.js、Nuxt.js、TypeScript等现代前端技术',
        url: 'https://your-domain.com',
        image: 'https://your-domain.com/avatar.jpg',
        sameAs: [
          'https://github.com/your-username',
          'https://twitter.com/your-username',
          'https://linkedin.com/in/your-username'
        ],
        knowsAbout: [
          'Vue.js',
          'Nuxt.js',
          'TypeScript',
          'JavaScript',
          'Web Development',
          'Frontend Development',
          'UI/UX Design'
        ],
        alumniOf: {
          '@type': 'Organization',
          name: '你的学校或培训机构'
        },
        worksFor: {
          '@type': 'Organization',
          name: '自由职业者'
        }
      })
    }
  ]
})

// 平滑滚动到指定区域的函数
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
/* 移动端适配 */
@media (max-width: 768px) {
  section > div {
    grid-template-columns: 1fr !important;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5rem !important;
  }
  
  h2 {
    font-size: 2rem !important;
  }
  
  .service-grid,
  .skill-grid {
    grid-template-columns: 1fr !important;
  }
}

/* 悬停效果 */
section > div > div:hover {
  transform: translateY(-2px);
}

a:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: translateX(4px);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style> 