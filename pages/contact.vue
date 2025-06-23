<template>
  <div style="min-height: 100vh; padding-top: 80px;">
    <!-- 联系我页面 -->
    <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
      <!-- 页面标题 -->
      <div style="text-align: center; margin-bottom: 3rem;" class="fade-in-up">
        <h1 style="font-size: 2.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem;">联系我</h1>
        <p style="font-size: 1.2rem; color: #6b7280;">让我们开启技术合作之旅</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
        <!-- 左侧：联系信息 -->
        <div class="fade-in-left">
          <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; padding: 2rem;">
            <h2 style="font-size: 1.8rem; font-weight: bold; color: #1f2937; margin-bottom: 1.5rem;">联系方式</h2>
            
            <!-- 邮箱 -->
            <div style="display: flex; align-items: center; margin-bottom: 1.5rem; padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <div style="width: 48px; height: 48px; background: #7c3aed; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                <span style="color: white; font-size: 1.5rem;">📧</span>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">邮箱</h3>
                <p style="color: #6b7280;">muzhishui@example.com</p>
              </div>
            </div>

            <!-- 微信 -->
            <div style="display: flex; align-items: center; margin-bottom: 1.5rem; padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <div style="width: 48px; height: 48px; background: #16a34a; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                <span style="color: white; font-size: 1.5rem;">💬</span>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">微信</h3>
                <p style="color: #6b7280;">muzhishui2024</p>
              </div>
            </div>

            <!-- QQ -->
            <div style="display: flex; align-items: center; margin-bottom: 1.5rem; padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <div style="width: 48px; height: 48px; background: #2563eb; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                <span style="color: white; font-size: 1.5rem;">🐧</span>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">QQ</h3>
                <p style="color: #6b7280;">123456789</p>
              </div>
            </div>

            <!-- GitHub -->
            <div style="display: flex; align-items: center; margin-bottom: 1.5rem; padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <div style="width: 48px; height: 48px; background: #1f2937; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                <span style="color: white; font-size: 1.5rem;">🐙</span>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">GitHub</h3>
                <p style="color: #6b7280;">github.com/muzhishui</p>
              </div>
            </div>

            <!-- 工作状态 -->
            <div style="margin-top: 2rem; padding: 1rem; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 0.5rem;">
              <div style="display: flex; align-items: center;">
                <div style="width: 12px; height: 12px; background: #22c55e; border-radius: 50%; margin-right: 0.5rem;"></div>
                <span style="color: #22c55e; font-weight: 600;">目前接受项目合作</span>
              </div>
              <p style="color: #4b5563; margin-top: 0.5rem; font-size: 0.875rem;">响应时间：24小时内</p>
            </div>
          </div>
        </div>

        <!-- 右侧：联系表单 -->
        <div class="fade-in-right">
          <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; padding: 2rem;">
            <h2 style="font-size: 1.8rem; font-weight: bold; color: #1f2937; margin-bottom: 1.5rem;">发送消息</h2>
            
            <form style="space-y: 1rem;">
              <!-- 姓名 -->
              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">姓名</label>
                <input type="text" placeholder="您的姓名" style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0.5rem; background: rgba(255, 255, 255, 0.05); color: #1f2937; outline: none;" />
              </div>

              <!-- 邮箱 -->
              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">邮箱</label>
                <input type="email" placeholder="您的邮箱地址" style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0.5rem; background: rgba(255, 255, 255, 0.05); color: #1f2937; outline: none;" />
              </div>

              <!-- 主题 -->
              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">主题</label>
                <select style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0.5rem; background: rgba(255, 255, 255, 0.05); color: #1f2937; outline: none;">
                  <option value="">请选择咨询类型</option>
                  <option value="project">项目合作</option>
                  <option value="consulting">技术咨询</option>
                  <option value="job">工作机会</option>
                  <option value="other">其他</option>
                </select>
              </div>

              <!-- 消息内容 -->
              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">消息内容</label>
                <textarea rows="5" placeholder="请详细描述您的需求..." style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0.5rem; background: rgba(255, 255, 255, 0.05); color: #1f2937; outline: none; resize: vertical;"></textarea>
              </div>

              <!-- 发送按钮 -->
              <button type="submit" style="width: 100%; padding: 0.75rem; background: #7c3aed; color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; transition: background-color 0.3s ease;">
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- 服务特色 -->
      <div style="margin-top: 3rem;" class="fade-in-up">
        <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; padding: 2rem;">
          <h2 style="font-size: 1.8rem; font-weight: bold; color: #1f2937; margin-bottom: 1.5rem; text-align: center;">为什么选择我？</h2>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
            <!-- 特色1 -->
            <div style="text-align: center; padding: 1.5rem;">
              <div style="width: 80px; height: 80px; background: #7c3aed; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                <span style="color: white; font-size: 2rem;">⚡</span>
              </div>
              <h3 style="font-size: 1.2rem; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">快速响应</h3>
              <p style="color: #6b7280; line-height: 1.6;">24小时内回复，快速了解需求并提供解决方案</p>
            </div>

            <!-- 特色2 -->
            <div style="text-align: center; padding: 1.5rem;">
              <div style="width: 80px; height: 80px; background: #059669; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                <span style="color: white; font-size: 2rem;">🎯</span>
              </div>
              <h3 style="font-size: 1.2rem; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">专业靠谱</h3>
              <p style="color: #6b7280; line-height: 1.6;">5年+企业级项目经验，技术方案成熟稳定</p>
            </div>

            <!-- 特色3 -->
            <div style="text-align: center; padding: 1.5rem;">
              <div style="width: 80px; height: 80px; background: #dc2626; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                <span style="color: white; font-size: 2rem;">🔧</span>
              </div>
              <h3 style="font-size: 1.2rem; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">全栈服务</h3>
              <p style="color: #6b7280; line-height: 1.6;">从后端架构到前端实现，提供完整技术解决方案</p>
            </div>

            <!-- 特色4 -->
            <div style="text-align: center; padding: 1.5rem;">
              <div style="width: 80px; height: 80px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                <span style="color: white; font-size: 2rem;">💼</span>
              </div>
              <h3 style="font-size: 1.2rem; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">长期合作</h3>
              <p style="color: #6b7280; line-height: 1.6;">提供项目后期维护和技术支持服务</p>
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
  title: '联系我 - 牧之水',
  meta: [
    { name: 'description', content: '联系牧之水，开启技术合作之旅' }
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
/* 按钮悬浮效果 */
button[type="submit"]:hover {
  background: #6d28d9 !important;
}

/* 表单输入框聚焦效果 */
input:focus, select:focus, textarea:focus {
  border-color: #7c3aed !important;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1) !important;
}

@media (max-width: 768px) {
  div[style*="grid-template-columns: 1fr 1fr"] {
    display: block !important;
  }
  
  div[style*="grid-template-columns: 1fr 1fr"] > div {
    margin-bottom: 2rem;
  }
}
</style> 