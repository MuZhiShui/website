<template>
  <div style="min-height: 100vh; padding-top: 80px;">
    <!-- 项目展示页面 -->
    <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
      <!-- 页面标题 -->
      <div style="text-align: center; margin-bottom: 3rem;" class="fade-in-up">
        <h1 style="font-size: 2.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem;">项目展示</h1>
        <p style="font-size: 1.2rem; color: #6b7280;">精选企业级项目案例和技术实现</p>
      </div>

      <!-- 项目筛选 -->
      <div style="text-align: center; margin-bottom: 3rem;" class="fade-in-up">
        <div style="display: inline-flex; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0.5rem; padding: 0.25rem;">
          <button style="padding: 0.5rem 1rem; border-radius: 0.25rem; background: #7c3aed; color: white; border: none; cursor: pointer;">全部</button>
          <button style="padding: 0.5rem 1rem; border-radius: 0.25rem; background: transparent; color: #4b5563; border: none; cursor: pointer;">后端</button>
          <button style="padding: 0.5rem 1rem; border-radius: 0.25rem; background: transparent; color: #4b5563; border: none; cursor: pointer;">全栈</button>
          <button style="padding: 0.5rem 1rem; border-radius: 0.25rem; background: transparent; color: #4b5563; border: none; cursor: pointer;">架构</button>
        </div>
      </div>

      <!-- 项目网格 -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
        <!-- 项目1：电商微服务平台 -->
        <div class="fade-in-up hover-float" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; overflow: hidden;">
          <div style="height: 200px; background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%); position: relative;">
            <div style="position: absolute; bottom: 1rem; left: 1rem; color: white;">
              <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">电商微服务平台</h3>
              <p style="opacity: 0.9;">企业级分布式电商解决方案</p>
            </div>
          </div>
          <div style="padding: 1.5rem;">
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">
              基于Spring Cloud构建的大型电商平台，支持千万级用户并发，采用微服务架构设计，包含用户、商品、订单、支付等核心服务模块。
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
              <span style="background: #dc2626; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Spring Cloud</span>
              <span style="background: #ea580c; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">MySQL</span>
              <span style="background: #ea580c; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Redis</span>
              <span style="background: #ea580c; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">RabbitMQ</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button style="flex: 1; padding: 0.5rem; background: #7c3aed; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">查看详情</button>
              <button style="padding: 0.5rem; background: transparent; color: #7c3aed; border: 1px solid #7c3aed; border-radius: 0.5rem; cursor: pointer;">🔗</button>
            </div>
          </div>
        </div>

        <!-- 项目2：智能办公系统 -->
        <div class="fade-in-up hover-float" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; overflow: hidden;">
          <div style="height: 200px; background: linear-gradient(135deg, #059669 0%, #10b981 100%); position: relative;">
            <div style="position: absolute; bottom: 1rem; left: 1rem; color: white;">
              <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">智能办公系统</h3>
              <p style="opacity: 0.9;">一站式企业办公管理平台</p>
            </div>
          </div>
          <div style="padding: 1.5rem;">
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">
              集成OA办公、人事管理、财务管理等功能的企业级办公系统，支持工作流引擎、权限管理、数据统计分析等核心功能。
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
              <span style="background: #dc2626; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Spring Boot</span>
              <span style="background: #16a34a; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Vue.js</span>
              <span style="background: #ea580c; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">MySQL</span>
              <span style="background: #7c3aed; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">工作流</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button style="flex: 1; padding: 0.5rem; background: #7c3aed; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">查看详情</button>
              <button style="padding: 0.5rem; background: transparent; color: #7c3aed; border: 1px solid #7c3aed; border-radius: 0.5rem; cursor: pointer;">🔗</button>
            </div>
          </div>
        </div>

        <!-- 项目3：金融风控系统 -->
        <div class="fade-in-up hover-float" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; overflow: hidden;">
          <div style="height: 200px; background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); position: relative;">
            <div style="position: absolute; bottom: 1rem; left: 1rem; color: white;">
              <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">金融风控系统</h3>
              <p style="opacity: 0.9;">实时风险评估与控制平台</p>
            </div>
          </div>
          <div style="padding: 1.5rem;">
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">
              基于大数据和机器学习的金融风控系统，实现实时交易监控、风险评估、反欺诈检测等功能，日处理千万级交易数据。
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
              <span style="background: #dc2626; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Java</span>
              <span style="background: #ea580c; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Kafka</span>
              <span style="background: #ea580c; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Elasticsearch</span>
              <span style="background: #7c3aed; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">大数据</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button style="flex: 1; padding: 0.5rem; background: #7c3aed; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">查看详情</button>
              <button style="padding: 0.5rem; background: transparent; color: #7c3aed; border: 1px solid #7c3aed; border-radius: 0.5rem; cursor: pointer;">🔗</button>
            </div>
          </div>
        </div>

        <!-- 项目4：在线教育平台 -->
        <div class="fade-in-up hover-float" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; overflow: hidden;">
          <div style="height: 200px; background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); position: relative;">
            <div style="position: absolute; bottom: 1rem; left: 1rem; color: white;">
              <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">在线教育平台</h3>
              <p style="opacity: 0.9;">全栈在线学习管理系统</p>
            </div>
          </div>
          <div style="padding: 1.5rem;">
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">
              包含课程管理、在线直播、作业系统、考试系统等功能的综合性在线教育平台，支持多终端访问和实时互动。
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
              <span style="background: #dc2626; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Spring Boot</span>
              <span style="background: #16a34a; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Vue.js</span>
              <span style="background: #ea580c; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">WebRTC</span>
              <span style="background: #7c3aed; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">直播</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button style="flex: 1; padding: 0.5rem; background: #7c3aed; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">查看详情</button>
              <button style="padding: 0.5rem; background: transparent; color: #7c3aed; border: 1px solid #7c3aed; border-radius: 0.5rem; cursor: pointer;">🔗</button>
            </div>
          </div>
        </div>

        <!-- 项目5：物联网监控系统 -->
        <div class="fade-in-up hover-float" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; overflow: hidden;">
          <div style="height: 200px; background: linear-gradient(135deg, #059669 0%, #047857 100%); position: relative;">
            <div style="position: absolute; bottom: 1rem; left: 1rem; color: white;">
              <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">物联网监控系统</h3>
              <p style="opacity: 0.9;">设备数据采集与分析平台</p>
            </div>
          </div>
          <div style="padding: 1.5rem;">
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">
              面向制造业的物联网设备监控系统，实现设备状态实时监控、数据采集分析、预测性维护等功能。
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
              <span style="background: #dc2626; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Java</span>
              <span style="background: #ea580c; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">MQTT</span>
              <span style="background: #ea580c; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">InfluxDB</span>
              <span style="background: #7c3aed; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">IoT</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button style="flex: 1; padding: 0.5rem; background: #7c3aed; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">查看详情</button>
              <button style="padding: 0.5rem; background: transparent; color: #7c3aed; border: 1px solid #7c3aed; border-radius: 0.5rem; cursor: pointer;">🔗</button>
            </div>
          </div>
        </div>

        <!-- 项目6：数据可视化平台 -->
        <div class="fade-in-up hover-float" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; overflow: hidden;">
          <div style="height: 200px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); position: relative;">
            <div style="position: absolute; bottom: 1rem; left: 1rem; color: white;">
              <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">数据可视化平台</h3>
              <p style="opacity: 0.9;">企业数据分析与展示系统</p>
            </div>
          </div>
          <div style="padding: 1.5rem;">
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">
              面向企业管理层的数据可视化分析平台，支持多维度数据分析、实时报表生成、数据钻取等功能。
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
              <span style="background: #dc2626; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Spring Boot</span>
              <span style="background: #16a34a; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Vue.js</span>
              <span style="background: #16a34a; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">ECharts</span>
              <span style="background: #7c3aed; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">大屏</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button style="flex: 1; padding: 0.5rem; background: #7c3aed; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">查看详情</button>
              <button style="padding: 0.5rem; background: transparent; color: #7c3aed; border: 1px solid #7c3aed; border-radius: 0.5rem; cursor: pointer;">🔗</button>
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
  title: '项目展示 - 牧之水',
  meta: [
    { name: 'description', content: '查看牧之水的精选项目案例和技术实现' }
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
  div[style*="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))"] {
    grid-template-columns: 1fr !important;
  }
}
</style> 