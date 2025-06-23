<template>
  <!-- 页脚区域 -->
  <footer class="py-12 px-4 border-t border-white border-opacity-10">
    <div class="container mx-auto">
      <div class="text-center">
        <!-- 版权信息 -->
        <p class="text-white text-opacity-60 mb-4">
          © {{ currentYear }} 牧之水. All rights reserved.
        </p>
        
        <!-- 社交链接 -->
        <div class="flex justify-center space-x-6 mb-4">
          <a href="#" class="text-white text-opacity-60 hover:text-white transition-colors">
            <UIcon name="i-heroicons-envelope" class="text-xl" />
          </a>
          <a href="#" class="text-white text-opacity-60 hover:text-white transition-colors">
            <UIcon name="i-heroicons-code-bracket" class="text-xl" />
          </a>
        </div>
        
        <!-- 技术栈说明 -->
        <p class="text-white text-opacity-50 text-sm">
          Built with Nuxt.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 获取当前年份
const currentYear = new Date().getFullYear()
</script> 