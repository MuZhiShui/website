<template>
  <div style="min-height: 100vh; padding-top: 80px;">
    <!-- 关于我页面 -->
    <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
      <!-- 页面标题 -->
      <div style="text-align: center; margin-bottom: 3rem;" class="fade-in-up">
        <h1 style="font-size: 2.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem;">关于我</h1>
        <p style="font-size: 1.2rem; color: #6b7280;">了解更多关于我的技术背景和经历</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
        <!-- 左侧：个人介绍 -->
        <div class="fade-in-left">
          <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; padding: 2rem;">
            <h2 style="font-size: 1.8rem; font-weight: bold; color: #1f2937; margin-bottom: 1.5rem;">个人简介</h2>
            <p style="color: #4b5563; line-height: 1.8; margin-bottom: 1.5rem;">
              我是一名拥有5年+全栈开发经验的后端工程师，专注于Java Spring生态和微服务架构设计。在企业级应用开发、系统性能优化和技术架构设计方面有丰富的实战经验。
            </p>
            <p style="color: #4b5563; line-height: 1.8; margin-bottom: 1.5rem;">
              擅长MySQL数据库设计与优化、分布式系统架构、中间件技术集成等后端核心技术，同时具备前端开发能力，能够独立完成全栈项目的设计与实现。
            </p>
            <p style="color: #4b5563; line-height: 1.8;">
              热爱技术，持续学习新技术趋势，致力于为企业提供高效、稳定、可扩展的技术解决方案。
            </p>
          </div>
        </div>

        <!-- 右侧：技术栈详情 -->
        <div class="fade-in-right">
          <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; padding: 2rem;">
            <h2 style="font-size: 1.8rem; font-weight: bold; color: #1f2937; margin-bottom: 1.5rem;">核心技能</h2>
            
            <!-- 后端技术 -->
            <div style="margin-bottom: 2rem;">
              <h3 style="font-size: 1.3rem; font-weight: 600; color: #374151; margin-bottom: 1rem;">后端开发 (80%)</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                <span style="background: #dc2626; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">Java</span>
                <span style="background: #dc2626; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">Spring Boot</span>
                <span style="background: #dc2626; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">Spring Cloud</span>
                <span style="background: #ea580c; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">MySQL</span>
                <span style="background: #ea580c; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">Redis</span>
                <span style="background: #ea580c; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">RabbitMQ</span>
              </div>
            </div>

            <!-- 前端技术 -->
            <div style="margin-bottom: 2rem;">
              <h3 style="font-size: 1.3rem; font-weight: 600; color: #374151; margin-bottom: 1rem;">前端开发 (20%)</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                <span style="background: #16a34a; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">Vue.js</span>
                <span style="background: #16a34a; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">JavaScript</span>
                <span style="background: #16a34a; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">HTML/CSS</span>
              </div>
            </div>

            <!-- 架构技能 -->
            <div>
              <h3 style="font-size: 1.3rem; font-weight: 600; color: #374151; margin-bottom: 1rem;">架构设计</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                <span style="background: #7c3aed; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">微服务架构</span>
                <span style="background: #7c3aed; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">分布式系统</span>
                <span style="background: #7c3aed; color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">性能优化</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 工作经历 -->
      <div style="margin-top: 3rem;" class="fade-in-up">
        <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; padding: 2rem;">
          <h2 style="font-size: 1.8rem; font-weight: bold; color: #1f2937; margin-bottom: 1.5rem;">工作经历</h2>
          
          <div style="border-left: 3px solid #7c3aed; padding-left: 1.5rem;">
            <div style="margin-bottom: 2rem;">
              <h3 style="font-size: 1.3rem; font-weight: 600; color: #374151;">高级后端工程师</h3>
              <p style="color: #6b7280; margin-bottom: 0.5rem;">2021 - 至今</p>
              <p style="color: #4b5563; line-height: 1.6;">
                负责企业级微服务架构设计与实现，主导多个核心业务系统的后端开发，优化系统性能提升50%以上，参与技术选型和架构决策。
              </p>
            </div>
            
            <div style="margin-bottom: 2rem;">
              <h3 style="font-size: 1.3rem; font-weight: 600; color: #374151;">全栈开发工程师</h3>
              <p style="color: #6b7280; margin-bottom: 0.5rem;">2019 - 2021</p>
              <p style="color: #4b5563; line-height: 1.6;">
                独立完成多个中小型项目的全栈开发，从需求分析到系统上线全流程参与，积累了丰富的项目经验和技术栈应用能力。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '关于我 - 牧之水',
  meta: [
    { name: 'description', content: '了解牧之水的技术背景、工作经历和核心技能' }
  ]
})

// 滚动动画
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
@media (max-width: 768px) {
  div[style*="grid-template-columns: 1fr 1fr"] {
    display: block !important;
  }
  
  div[style*="grid-template-columns: 1fr 1fr"] > div {
    margin-bottom: 2rem;
  }
}
</style> 