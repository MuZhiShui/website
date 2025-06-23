<template>
  <!-- 顶部导航栏 - 固定定位，毛玻璃效果 -->
  <header style="position: fixed; top: 0; left: 0; right: 0; z-index: 50; backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
    <nav style="max-width: 1200px; margin: 0 auto; padding: 16px; display: flex; align-items: center; justify-content: space-between;">
      <!-- 左侧 Logo 和功能区 -->
      <div style="display: flex; align-items: center; gap: 16px;">
        <!-- Logo 区域 -->
        <div style="display: flex; align-items: center; gap: 8px;">
          <!-- Logo 图标 -->
          <div style="width: 40px; height: 40px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            <span style="color: white; font-size: 20px;">✨</span>
          </div>
          <!-- 网站标题 -->
          <h1 style="color: white; font-size: 20px; font-weight: bold; margin: 0;">BaiShui</h1>
        </div>
        
        <!-- 功能区 -->
        <div style="display: flex; align-items: center; gap: 8px; padding-left: 16px; border-left: 1px solid rgba(255, 255, 255, 0.2);">
          <!-- 搜索按钮 -->
          <button 
            @click="openSearch"
            style="background: transparent; border: none; color: white; padding: 8px; border-radius: 6px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;"
            @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
            @mouseout="$event.target.style.background = 'transparent'"
            title="搜索"
          >
            <span style="font-size: 16px;">🔍</span>
          </button>
          
          <!-- 通知按钮 -->
          <button 
            @click="openNotifications"
            style="background: transparent; border: none; color: white; padding: 8px; border-radius: 6px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; position: relative;"
            @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
            @mouseout="$event.target.style.background = 'transparent'"
            title="通知"
          >
            <span style="font-size: 16px;">🔔</span>
            <!-- 通知红点 -->
            <span style="position: absolute; top: 4px; right: 4px; width: 8px; height: 8px; background: #ef4444; border-radius: 50%; animation: pulse 2s infinite;"></span>
          </button>
          
          <!-- 设置按钮 -->
          <button 
            @click="openSettings"
            style="background: transparent; border: none; color: white; padding: 8px; border-radius: 6px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;"
            @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
            @mouseout="$event.target.style.background = 'transparent'"
            title="设置"
          >
            <span style="font-size: 16px;">⚙️</span>
          </button>
          
          <!-- 分割线 -->
          <div style="width: 1px; height: 20px; background: rgba(255, 255, 255, 0.2); margin: 0 8px;"></div>
          
          <!-- GitHub 链接 -->
          <button 
            @click="openGitHub"
            style="background: transparent; border: none; color: white; padding: 8px; border-radius: 6px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;"
            @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
            @mouseout="$event.target.style.background = 'transparent'"
            title="GitHub"
          >
            <span style="font-size: 16px;">🐙</span>
          </button>
          
          <!-- 语言切换 -->
          <button 
            @click="toggleLanguage"
            style="background: transparent; border: none; color: white; padding: 8px 12px; border-radius: 6px; cursor: pointer; transition: all 0.2s; font-size: 12px; font-weight: bold;"
            @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
            @mouseout="$event.target.style.background = 'transparent'"
            title="语言切换"
          >
            {{ currentLanguage }}
          </button>
        </div>
      </div>

      <!-- 中间导航链接 - 桌面端显示 -->
      <div style="display: none;" :style="{ display: windowWidth > 768 ? 'flex' : 'none' }">
        <div style="display: flex; align-items: center; gap: 32px;">
          <NuxtLink 
            to="/" 
            style="color: white; text-decoration: none; display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 8px; transition: all 0.2s; font-size: 14px;"
            :style="{ background: $route.path === '/' ? 'rgba(255, 255, 255, 0.3)' : 'transparent' }"
            @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
            @mouseout="$event.target.style.background = $route.path === '/' ? 'rgba(255, 255, 255, 0.3)' : 'transparent'"
          >
            <span>🏠</span>首页
          </NuxtLink>
          
          <NuxtLink 
            to="/about" 
            style="color: white; text-decoration: none; display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 8px; transition: all 0.2s; font-size: 14px;"
            :style="{ background: $route.path === '/about' ? 'rgba(255, 255, 255, 0.3)' : 'transparent' }"
            @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
            @mouseout="$event.target.style.background = $route.path === '/about' ? 'rgba(255, 255, 255, 0.3)' : 'transparent'"
          >
            <span>👤</span>关于我
          </NuxtLink>
          
          <NuxtLink 
            to="/projects" 
            style="color: white; text-decoration: none; display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 8px; transition: all 0.2s; font-size: 14px;"
            :style="{ background: $route.path === '/projects' ? 'rgba(255, 255, 255, 0.3)' : 'transparent' }"
            @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
            @mouseout="$event.target.style.background = $route.path === '/projects' ? 'rgba(255, 255, 255, 0.3)' : 'transparent'"
          >
            <span>💻</span>项目作品
          </NuxtLink>
          
          <NuxtLink 
            to="/contact" 
            style="color: white; text-decoration: none; display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 8px; transition: all 0.2s; font-size: 14px;"
            :style="{ background: $route.path === '/contact' ? 'rgba(255, 255, 255, 0.3)' : 'transparent' }"
            @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
            @mouseout="$event.target.style.background = $route.path === '/contact' ? 'rgba(255, 255, 255, 0.3)' : 'transparent'"
          >
            <span>📧</span>联系我
          </NuxtLink>
        </div>
      </div>

      <!-- 右侧操作区域 -->
      <div style="display: flex; align-items: center; gap: 16px;">
        <!-- 主题切换按钮 -->
        <button 
          @click="toggleColorMode"
          style="background: transparent; border: none; color: white; padding: 10px; border-radius: 6px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;"
          @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
          @mouseout="$event.target.style.background = 'transparent'"
        >
          <span style="font-size: 18px;">{{ isDark ? '☀️' : '🌙' }}</span>
        </button>
        
        <!-- 移动端菜单按钮 -->
        <button 
          @click="toggleMobileMenu"
          style="background: transparent; border: none; color: white; padding: 10px; border-radius: 6px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;"
          :style="{ display: windowWidth > 768 ? 'none' : 'flex' }"
          @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
          @mouseout="$event.target.style.background = 'transparent'"
        >
          <span style="font-size: 18px;">{{ isMobileMenuOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </nav>

    <!-- 移动端菜单 -->
    <div v-if="isMobileMenuOpen && windowWidth <= 768" style="padding: 16px; border-top: 1px solid rgba(255, 255, 255, 0.2); background: rgba(255, 255, 255, 0.1);">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <NuxtLink 
          to="/" 
          @click="closeMobileMenu"
          style="color: white; text-decoration: none; display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 8px; transition: all 0.2s; font-size: 16px;"
          @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
          @mouseout="$event.target.style.background = 'transparent'"
        >
          <span>🏠</span>首页
        </NuxtLink>
        
        <NuxtLink 
          to="/about" 
          @click="closeMobileMenu"
          style="color: white; text-decoration: none; display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 8px; transition: all 0.2s; font-size: 16px;"
          @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
          @mouseout="$event.target.style.background = 'transparent'"
        >
          <span>👤</span>关于我
        </NuxtLink>
        
        <NuxtLink 
          to="/projects" 
          @click="closeMobileMenu"
          style="color: white; text-decoration: none; display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 8px; transition: all 0.2s; font-size: 16px;"
          @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
          @mouseout="$event.target.style.background = 'transparent'"
        >
          <span>💻</span>项目作品
        </NuxtLink>
        
        <NuxtLink 
          to="/contact" 
          @click="closeMobileMenu"
          style="color: white; text-decoration: none; display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 8px; transition: all 0.2s; font-size: 16px;"
          @mouseover="$event.target.style.background = 'rgba(255, 255, 255, 0.2)'"
          @mouseout="$event.target.style.background = 'transparent'"
        >
          <span>📧</span>联系我
        </NuxtLink>
      </div>
    </div>
  </header>

  <!-- 搜索弹窗 -->
  <div v-if="showSearchModal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; z-index: 100;" @click.self="closeSearchModal">
    <div style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 12px; padding: 24px; width: 90%; max-width: 500px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);">
      <h3 style="margin: 0 0 16px 0; color: #333; font-size: 18px; font-weight: bold;">🔍 搜索</h3>
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="搜索内容..." 
        style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; outline: none; margin-bottom: 16px;"
        @keyup.enter="performSearch"
      />
      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <button @click="closeSearchModal" style="padding: 8px 16px; background: #f3f4f6; border: none; border-radius: 6px; cursor: pointer;">取消</button>
        <button @click="performSearch" style="padding: 8px 16px; background: #8b5cf6; color: white; border: none; border-radius: 6px; cursor: pointer;">搜索</button>
      </div>
    </div>
  </div>

  <!-- 通知弹窗 -->
  <div v-if="showNotificationModal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; z-index: 100;" @click.self="closeNotificationModal">
    <div style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 12px; padding: 24px; width: 90%; max-width: 400px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);">
      <h3 style="margin: 0 0 16px 0; color: #333; font-size: 18px; font-weight: bold;">🔔 通知中心</h3>
      <div style="space-y: 12px;">
        <div v-for="notification in notifications" :key="notification.id" style="padding: 12px; background: #f8fafc; border-radius: 8px; margin-bottom: 12px;">
          <div style="font-weight: bold; color: #333; margin-bottom: 4px;">{{ notification.title }}</div>
          <div style="color: #666; font-size: 14px;">{{ notification.message }}</div>
          <div style="color: #999; font-size: 12px; margin-top: 4px;">{{ notification.time }}</div>
        </div>
      </div>
      <button @click="closeNotificationModal" style="width: 100%; padding: 12px; background: #8b5cf6; color: white; border: none; border-radius: 6px; cursor: pointer; margin-top: 16px;">关闭</button>
    </div>
  </div>

  <!-- 设置弹窗 -->
  <div v-if="showSettingsModal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; z-index: 100;" @click.self="closeSettingsModal">
    <div style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 12px; padding: 24px; width: 90%; max-width: 400px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);">
      <h3 style="margin: 0 0 16px 0; color: #333; font-size: 18px; font-weight: bold;">⚙️ 设置</h3>
      <div style="space-y: 16px;">
        <div style="margin-bottom: 16px;">
          <label style="display: block; color: #333; margin-bottom: 8px; font-weight: bold;">主题设置</label>
          <button @click="toggleColorMode" style="width: 100%; padding: 12px; background: #f3f4f6; border: none; border-radius: 6px; cursor: pointer; text-align: left;">
            {{ isDark ? '🌙 深色模式' : '☀️ 浅色模式' }}
          </button>
        </div>
        <div style="margin-bottom: 16px;">
          <label style="display: block; color: #333; margin-bottom: 8px; font-weight: bold;">语言设置</label>
          <button @click="toggleLanguage" style="width: 100%; padding: 12px; background: #f3f4f6; border: none; border-radius: 6px; cursor: pointer; text-align: left;">
            {{ currentLanguage === '中' ? '🇨🇳 中文' : '🇺🇸 English' }}
          </button>
        </div>
        <div style="margin-bottom: 16px;">
          <label style="display: block; color: #333; margin-bottom: 8px; font-weight: bold;">通知设置</label>
          <button @click="toggleNotifications" style="width: 100%; padding: 12px; background: #f3f4f6; border: none; border-radius: 6px; cursor: pointer; text-align: left;">
            {{ notificationsEnabled ? '🔔 通知已开启' : '🔕 通知已关闭' }}
          </button>
        </div>
      </div>
      <button @click="closeSettingsModal" style="width: 100%; padding: 12px; background: #8b5cf6; color: white; border: none; border-radius: 6px; cursor: pointer; margin-top: 16px;">关闭</button>
    </div>
  </div>
</template>

<script setup>
// 响应式数据
const isMobileMenuOpen = ref(false)
const currentLanguage = ref('中')
const windowWidth = ref(1024)
const isDark = ref(false)

// 弹窗状态
const showSearchModal = ref(false)
const showNotificationModal = ref(false)
const showSettingsModal = ref(false)

// 搜索相关
const searchQuery = ref('')

// 设置相关
const notificationsEnabled = ref(true)

// 通知数据
const notifications = ref([
  {
    id: 1,
    title: '欢迎访问',
    message: '欢迎来到 BaiShui 的个人网站！',
    time: '2分钟前'
  },
  {
    id: 2,
    title: '新功能上线',
    message: '新增了搜索和通知功能',
    time: '1小时前'
  },
  {
    id: 3,
    title: '系统更新',
    message: '网站性能优化完成',
    time: '1天前'
  }
])

// 监听窗口大小变化
onMounted(() => {
  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
  }
  window.addEventListener('resize', updateWindowWidth)
  updateWindowWidth()
})

// 基础方法
const toggleColorMode = () => {
  isDark.value = !isDark.value
  console.log('切换主题:', isDark.value ? '深色' : '浅色')
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === '中' ? 'EN' : '中'
  console.log('切换语言到:', currentLanguage.value === '中' ? '中文' : 'English')
}

const toggleNotifications = () => {
  notificationsEnabled.value = !notificationsEnabled.value
  console.log('通知设置:', notificationsEnabled.value ? '已开启' : '已关闭')
}

// 功能区方法
const openSearch = () => {
  showSearchModal.value = true
  searchQuery.value = ''
}

const closeSearchModal = () => {
  showSearchModal.value = false
}

const performSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('搜索:', searchQuery.value)
    // 这里可以实现实际的搜索功能
    alert(`搜索: ${searchQuery.value}`)
    closeSearchModal()
  }
}

const openNotifications = () => {
  showNotificationModal.value = true
}

const closeNotificationModal = () => {
  showNotificationModal.value = false
}

const openSettings = () => {
  showSettingsModal.value = true
}

const closeSettingsModal = () => {
  showSettingsModal.value = false
}

const openGitHub = () => {
  window.open('https://github.com', '_blank')
}

// 监听路由变化，关闭移动端菜单
watch(() => useRoute().path, () => {
  closeMobileMenu()
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}
</style> 