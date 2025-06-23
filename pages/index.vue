<template>
  <!-- 首页内容 -->
  <div style="min-height: 100vh; background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 16.67%, #ddd6fe 33.33%, #c4b5fd 50%, #a78bfa 66.67%, #8b5cf6 83.33%, #7c3aed 100%); position: relative;">
    <!-- 使用 Header 组件 -->
    <Header />
    
    <!-- 主要内容区域 - 添加适当的顶部边距避免被固定导航遮挡 -->
    <main style="padding-top: 100px;">
      <!-- 英雄区域 -->
      <section class="fade-in-up" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 80px 16px;">
        <div style="max-width: 800px; margin: 0 auto;">
          <div style="margin-bottom: 24px; color: rgba(255, 255, 255, 0.8); font-size: 1.1rem;">
            欢迎来到牧之水的技术世界
          </div>
          <h1 style="font-size: 3.5rem; font-weight: bold; color: white; margin-bottom: 24px; line-height: 1.2;">
            五年+全栈架构师
          </h1>
          <p style="font-size: 1.25rem; color: rgba(255, 255, 255, 0.9); margin-bottom: 32px; line-height: 1.6;">
            专注Java后端架构设计与系统优化，5年+企业级项目经验，精通需求分析、数据库设计、微服务架构、运维部署
          </p>
          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
            <button @click="scrollToSection('about')" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 28px; border: none; border-radius: 8px; font-size: 1rem; font-weight: 500; cursor: pointer; transition: all 0.3s;">
              专业技能
            </button>
            <button @click="scrollToSection('projects')" style="background: transparent; color: white; padding: 14px 28px; border: 2px solid rgba(255, 255, 255, 0.3); border-radius: 8px; font-size: 1rem; font-weight: 500; cursor: pointer; transition: all 0.3s;">
              项目经验
            </button>
          </div>
        </div>
      </section>

      <!-- 专业背景 -->
      <section id="about" class="fade-in-left" style="padding: 80px 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); margin: 40px 20px; border-radius: 20px; border: 2px solid #ef4444;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <h2 style="font-size: 2.5rem; font-weight: bold; color: white; text-align: center; margin-bottom: 48px;">专业背景</h2>
          
          <div style="display: grid; grid-template-columns: 1.618fr 1fr; gap: 40px; align-items: start;">
            <!-- 左侧：核心能力 -->
            <div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 24px;">💼 核心业务能力</h3>
              <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.1rem; line-height: 1.8; margin-bottom: 24px;">
                五年+全栈开发经验，主要负责后台系统架构设计与开发。擅长从需求分析到系统上线的全流程技术把控，包括MySQL数据库设计优化、Java服务端开发、微服务架构实现、以及Linux运维部署。
              </p>
              <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.1rem; line-height: 1.8;">
                具备完整的项目交付能力，从技术选型、架构设计到性能调优，能够独立承担复杂业务系统的技术实现，确保系统的高可用性和可扩展性。
              </p>
            </div>
            
            <!-- 右侧：技术分布 -->
            <div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 24px;">📊 技术专长分布</h3>
              <div style="background: rgba(255, 255, 255, 0.1); padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);">
                <div style="margin-bottom: 20px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: white; font-weight: 500;">后端架构开发</span>
                    <span style="color: #ef4444; font-weight: bold;">75%</span>
                  </div>
                  <div style="background: rgba(255, 255, 255, 0.2); height: 8px; border-radius: 4px;">
                    <div style="background: linear-gradient(90deg, #ef4444, #dc2626); width: 75%; height: 100%; border-radius: 4px;"></div>
                  </div>
                </div>
                <div style="margin-bottom: 20px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: white; font-weight: 500;">运维部署调优</span>
                    <span style="color: #f59e0b; font-weight: bold;">15%</span>
                  </div>
                  <div style="background: rgba(255, 255, 255, 0.2); height: 8px; border-radius: 4px;">
                    <div style="background: linear-gradient(90deg, #f59e0b, #d97706); width: 15%; height: 100%; border-radius: 4px;"></div>
                  </div>
                </div>
                <div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: white; font-weight: 500;">前端协作开发</span>
                    <span style="color: #22c55e; font-weight: bold;">10%</span>
                  </div>
                  <div style="background: rgba(255, 255, 255, 0.2); height: 8px; border-radius: 4px;">
                    <div style="background: linear-gradient(90deg, #22c55e, #16a34a); width: 10%; height: 100%; border-radius: 4px;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 专业技能 -->
      <section class="fade-in-up" style="padding: 80px 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); margin: 40px 20px; border-radius: 20px; border: 2px solid #6366f1;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <h2 style="font-size: 2.5rem; font-weight: bold; color: white; text-align: center; margin-bottom: 48px;">专业技能</h2>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
            <!-- 后端核心技术 -->
            <div class="scale-in" style="background: rgba(239, 68, 68, 0.15); padding: 24px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3);">
              <div style="font-size: 2rem; margin-bottom: 16px;">☕</div>
              <h3 style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">后端核心技术</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                • Java服务端开发：Spring Boot、Spring Cloud、MyBatis<br/>
                • 微服务架构设计：Nacos配置中心、Gateway网关、OpenFeign远程调用<br/>
                • 高并发业务系统构建，分布式系统实现
              </p>
            </div>

            <!-- 数据库技术栈 -->
            <div class="scale-in" style="background: rgba(34, 197, 94, 0.15); padding: 24px; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.3);">
              <div style="font-size: 2rem; margin-bottom: 16px;">🗄️</div>
              <h3 style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">数据库技术栈</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                • MySQL数据库设计、查询优化、索引设计<br/>
                • Redis缓存架构、分布式锁方案<br/>
                • 数据库性能调优，SQL执行计划优化
              </p>
            </div>

            <!-- 系统架构与中间件 -->
            <div class="scale-in" style="background: rgba(59, 130, 246, 0.15); padding: 24px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.3);">
              <div style="font-size: 2rem; margin-bottom: 16px;">⚙️</div>
              <h3 style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">系统架构与中间件</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                • RabbitMQ异步解耦、削峰限流、事务一致性保障<br/>
                • JVM参数调优、接口响应时间控制<br/>
                • Hystrix熔断降级、负载均衡、服务监控
              </p>
            </div>

            <!-- 运维与工具 -->
            <div class="scale-in" style="background: rgba(245, 158, 11, 0.15); padding: 24px; border-radius: 12px; border: 1px solid rgba(245, 158, 11, 0.3);">
              <div style="font-size: 2rem; margin-bottom: 16px;">🚀</div>
              <h3 style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">运维与工具</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                • Docker容器化、Linux服务器管理、Shell脚本自动化<br/>
                • Git协作开发、Maven项目构建、JMeter压力测试<br/>
                • 系统部署上线、线上调优
              </p>
            </div>

            <!-- 全栈协作能力 -->
            <div class="scale-in" style="background: rgba(168, 85, 247, 0.15); padding: 24px; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.3);">
              <div style="font-size: 2rem; margin-bottom: 16px;">🎨</div>
              <h3 style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">全栈协作能力</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                • Vue、Element-UI、JavaScript独立前端开发<br/>
                • RESTful API设计、前后端分离架构<br/>
                • 接口文档维护，管理后台前端开发
              </p>
            </div>

            <!-- 云原生技术 -->
            <div class="scale-in" style="background: rgba(6, 182, 212, 0.15); padding: 24px; border-radius: 12px; border: 1px solid rgba(6, 182, 212, 0.3);">
              <div style="font-size: 2rem; margin-bottom: 16px;">☁️</div>
              <h3 style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">云原生与部署</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                • Alibaba Cloud云服务应用<br/>
                • Docker容器化部署方案<br/>
                • Linux运维管理，系统性能监控
              </p>
            </div>
          </div>

          <!-- 技术标签云 -->
          <div style="margin-top: 40px; text-align: center;">
            <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 24px;">核心技术栈</h3>
            <div style="display: inline-flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
              <!-- Java生态 (红色系) -->
              <span style="background: rgba(239, 68, 68, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(239, 68, 68, 0.5);">Java</span>
              <span style="background: rgba(239, 68, 68, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(239, 68, 68, 0.5);">Spring Boot</span>
              <span style="background: rgba(239, 68, 68, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(239, 68, 68, 0.5);">Spring Cloud</span>
              <span style="background: rgba(239, 68, 68, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(239, 68, 68, 0.5);">MyBatis</span>
              
              <!-- 数据库 (蓝色系) -->
              <span style="background: rgba(59, 130, 246, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(59, 130, 246, 0.5);">MySQL</span>
              <span style="background: rgba(59, 130, 246, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(59, 130, 246, 0.5);">Redis</span>
              
              <!-- 中间件 (橙色系) -->
              <span style="background: rgba(245, 158, 11, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(245, 158, 11, 0.5);">RabbitMQ</span>
              <span style="background: rgba(245, 158, 11, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(245, 158, 11, 0.5);">Nacos</span>
              
              <!-- 运维工具 (紫色系) -->
              <span style="background: rgba(168, 85, 247, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(168, 85, 247, 0.5);">Docker</span>
              <span style="background: rgba(168, 85, 247, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(168, 85, 247, 0.5);">Linux</span>
              
              <!-- 前端技术 (绿色系) -->
              <span style="background: rgba(34, 197, 94, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(34, 197, 94, 0.5);">Vue</span>
              <span style="background: rgba(34, 197, 94, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(34, 197, 94, 0.5);">Element-UI</span>
              
              <!-- 云服务 (青色系) -->
              <span style="background: rgba(6, 182, 212, 0.3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; border: 1px solid rgba(6, 182, 212, 0.5);">Ali Cloud</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 项目经验与解决方案 -->
      <section id="projects" class="fade-in-right" style="padding: 80px 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); margin: 40px 20px; border-radius: 20px; border: 2px solid #22c55e;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <h2 style="font-size: 2.5rem; font-weight: bold; color: white; text-align: center; margin-bottom: 48px;">核心能力与解决方案</h2>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
            <!-- 需求分析与架构设计 -->
            <div class="scale-in" style="background: rgba(255, 255, 255, 0.15); padding: 32px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); text-align: center; transition: transform 0.3s;">
              <div style="font-size: 3rem; margin-bottom: 20px;">📋</div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">需求分析与架构设计</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 20px;">
                • 业务需求深度分析与技术可行性评估<br/>
                • 系统架构设计与技术选型<br/>
                • 微服务拆分策略与服务边界定义<br/>
                • 数据库建模与表结构设计
              </p>
              <div style="background: rgba(239, 68, 68, 0.2); padding: 8px 16px; border-radius: 20px; display: inline-block;">
                <span style="color: #ef4444; font-weight: bold;">架构设计</span>
              </div>
            </div>

            <!-- 系统性能优化 -->
            <div class="scale-in" style="background: rgba(255, 255, 255, 0.15); padding: 32px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); text-align: center; transition: transform 0.3s;">
              <div style="font-size: 3rem; margin-bottom: 20px;">⚡</div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">系统性能优化</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 20px;">
                • MySQL查询优化与索引策略设计<br/>
                • JVM参数调优与内存管理<br/>
                • Redis缓存架构与热点数据处理<br/>
                • 接口响应时间优化与并发控制
              </p>
              <div style="background: rgba(245, 158, 11, 0.2); padding: 8px 16px; border-radius: 20px; display: inline-block;">
                <span style="color: #f59e0b; font-weight: bold;">性能调优</span>
              </div>
            </div>

            <!-- 微服务架构实现 -->
            <div class="scale-in" style="background: rgba(255, 255, 255, 0.15); padding: 32px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); text-align: center; transition: transform 0.3s;">
              <div style="font-size: 3rem; margin-bottom: 20px;">🏗️</div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">微服务架构实现</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 20px;">
                • Spring Cloud微服务技术栈应用<br/>
                • 服务注册发现与配置中心管理<br/>
                • API网关设计与路由策略<br/>
                • 分布式事务与数据一致性保障
              </p>
              <div style="background: rgba(59, 130, 246, 0.2); padding: 8px 16px; border-radius: 20px; display: inline-block;">
                <span style="color: #3b82f6; font-weight: bold;">微服务</span>
              </div>
            </div>

            <!-- 运维部署与监控 -->
            <div class="scale-in" style="background: rgba(255, 255, 255, 0.15); padding: 32px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); text-align: center; transition: transform 0.3s;">
              <div style="font-size: 3rem; margin-bottom: 20px;">🚀</div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">运维部署与监控</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 20px;">
                • Docker容器化部署与编排<br/>
                • Linux服务器环境配置与管理<br/>
                • 系统监控与日志分析<br/>
                • 线上问题排查与性能调优
              </p>
              <div style="background: rgba(34, 197, 94, 0.2); padding: 8px 16px; border-radius: 20px; display: inline-block;">
                <span style="color: #22c55e; font-weight: bold;">运维部署</span>
              </div>
            </div>

            <!-- 数据库设计优化 -->
            <div class="scale-in" style="background: rgba(255, 255, 255, 0.15); padding: 32px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); text-align: center; transition: transform 0.3s;">
              <div style="font-size: 3rem; margin-bottom: 20px;">🗃️</div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">数据库设计优化</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 20px;">
                • 业务建模与数据库结构设计<br/>
                • SQL查询优化与执行计划分析<br/>
                • 索引策略设计与性能测试<br/>
                • 分库分表与读写分离方案
              </p>
              <div style="background: rgba(168, 85, 247, 0.2); padding: 8px 16px; border-radius: 20px; display: inline-block;">
                <span style="color: #a855f7; font-weight: bold;">数据库</span>
              </div>
            </div>

            <!-- 全栈项目交付 -->
            <div class="scale-in" style="background: rgba(255, 255, 255, 0.15); padding: 32px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); text-align: center; transition: transform 0.3s;">
              <div style="font-size: 3rem; margin-bottom: 20px;">💻</div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 16px;">全栈项目交付</h3>
              <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 20px;">
                • 从需求到上线的完整项目管理<br/>
                • 前后端分离架构实现<br/>
                • RESTful API设计与文档维护<br/>
                • 管理后台系统独立开发
              </p>
              <div style="background: rgba(6, 182, 212, 0.2); padding: 8px 16px; border-radius: 20px; display: inline-block;">
                <span style="color: #06b6d4; font-weight: bold;">全栈交付</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 项目经验数据 -->
      <section class="fade-in-up" style="padding: 80px 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); margin: 40px 20px; border-radius: 20px; border: 2px solid #8b5cf6;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <h2 style="font-size: 2.5rem; font-weight: bold; color: white; text-align: center; margin-bottom: 48px;">项目经验与技术成果</h2>
          
          <div style="display: grid; grid-template-columns: 1.618fr 1fr; gap: 40px; align-items: start;">
            <!-- 左侧：技术成果 -->
            <div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 24px;">🎯 核心技术成果</h3>
              <div style="background: rgba(255, 255, 255, 0.1); padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);">
                <ul style="color: rgba(255, 255, 255, 0.9); line-height: 2; margin: 0; padding-left: 20px;">
                  <li>高并发电商系统架构设计，支持万级并发访问</li>
                  <li>企业级权限管理系统，完整的RBAC权限模型</li>
                  <li>分布式订单处理系统，保证数据强一致性</li>
                  <li>MySQL数据库优化，查询性能提升80%</li>
                  <li>微服务架构重构，系统可用性达99.9%</li>
                  <li>Redis缓存架构设计，响应时间优化至100ms内</li>
                  <li>Docker容器化部署，实现一键部署上线</li>
                  <li>Linux服务器集群管理，支持负载均衡</li>
                  <li>RabbitMQ消息队列应用，实现系统解耦</li>
                  <li>Vue管理后台开发，提供完整的数据可视化</li>
                </ul>
              </div>
            </div>
            
            <!-- 右侧：经验数据 -->
            <div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 24px;">📈 项目经验数据</h3>
              <div style="display: flex; flex-direction: column; gap: 20px;">
                <div class="scale-in" style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 12px; text-align: center;">
                  <div style="font-size: 2.5rem; font-weight: bold; color: #ef4444; margin-bottom: 8px;">5+</div>
                  <div style="color: rgba(255, 255, 255, 0.8);">年开发经验</div>
                </div>
                <div class="scale-in" style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 12px; text-align: center;">
                  <div style="font-size: 2.5rem; font-weight: bold; color: #22c55e; margin-bottom: 8px;">30+</div>
                  <div style="color: rgba(255, 255, 255, 0.8);">企业级项目</div>
                </div>
                <div class="scale-in" style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 12px; text-align: center;">
                  <div style="font-size: 2.5rem; font-weight: bold; color: #3b82f6; margin-bottom: 8px;">万级</div>
                  <div style="color: rgba(255, 255, 255, 0.8);">并发处理能力</div>
                </div>
                <div class="scale-in" style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 12px; text-align: center;">
                  <div style="font-size: 2.5rem; font-weight: bold; color: #a855f7; margin-bottom: 8px;">99.9%</div>
                  <div style="color: rgba(255, 255, 255, 0.8);">系统可用性</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 技术交流 -->
      <section class="fade-in-left" style="padding: 80px 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); margin: 40px 20px; border-radius: 20px; border: 2px solid #8b5cf6;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <h2 style="font-size: 2.5rem; font-weight: bold; color: white; text-align: center; margin-bottom: 48px;">技术交流与合作</h2>
          
          <div style="display: grid; grid-template-columns: 1.618fr 1fr; gap: 40px; align-items: start;">
            <!-- 左侧：技术分享 -->
            <div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 24px;">📝 技术分享</h3>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);">
                  <h4 style="color: white; font-size: 1.1rem; font-weight: bold; margin-bottom: 8px;">MySQL索引优化实战经验</h4>
                  <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; margin-bottom: 12px;">
                    从慢查询分析到索引设计，分享MySQL性能优化的完整方案和实战经验...
                  </p>
                  <div style="display: flex; gap: 8px;">
                    <span style="background: rgba(59, 130, 246, 0.3); color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">MySQL</span>
                    <span style="background: rgba(245, 158, 11, 0.3); color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">性能优化</span>
                  </div>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);">
                  <h4 style="color: white; font-size: 1.1rem; font-weight: bold; margin-bottom: 8px;">Spring Cloud微服务实践</h4>
                  <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; margin-bottom: 12px;">
                    微服务架构设计模式、服务治理、配置中心的企业级应用实践分享...
                  </p>
                  <div style="display: flex; gap: 8px;">
                    <span style="background: rgba(239, 68, 68, 0.3); color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">Spring Cloud</span>
                    <span style="background: rgba(168, 85, 247, 0.3); color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px;">微服务</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 右侧：技术合作 -->
            <div>
              <h3 style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 24px;">🤝 技术合作</h3>
              <div style="background: rgba(255, 255, 255, 0.1); padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);">
                <p style="color: rgba(255, 255, 255, 0.9); line-height: 1.6; margin-bottom: 20px;">
                  专注于Java后端技术架构设计与系统优化，提供从需求分析到系统上线的完整技术解决方案。
                </p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <a href="#contact" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; padding: 12px 16px; background: rgba(239, 68, 68, 0.2); border-radius: 8px; transition: all 0.3s; border: 1px solid rgba(239, 68, 68, 0.3); text-align: center;">
                    🔥 架构咨询
                  </a>
                  <a href="#projects" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; padding: 12px 16px; background: rgba(59, 130, 246, 0.2); border-radius: 8px; transition: all 0.3s; border: 1px solid rgba(59, 130, 246, 0.3); text-align: center;">
                    💼 项目合作
                  </a>
                  <a href="#about" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; padding: 12px 16px; background: rgba(34, 197, 94, 0.2); border-radius: 8px; transition: all 0.3s; border: 1px solid rgba(34, 197, 94, 0.3); text-align: center;">
                    📞 技术交流
                  </a>
                </div>
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
  title: '牧之水 - 五年+全栈架构师 | Java后端技术专家',
  meta: [
    {
      name: 'description',
      content: '牧之水个人网站 - 五年+全栈架构师，专注Java后端开发、微服务架构设计、MySQL数据库优化、系统性能调优，具备完整项目交付能力。'
    },
    {
      name: 'keywords',
      content: '牧之水, Java架构师, Spring Boot, Spring Cloud, MySQL优化, 微服务, RabbitMQ, Docker, Linux运维, 全栈开发'
    },
    {
      property: 'og:title',
      content: '牧之水 - 五年+全栈架构师 | Java后端技术专家'
    },
    {
      property: 'og:description',
      content: '牧之水个人网站 - 五年+全栈架构师，专注Java后端开发、微服务架构设计、MySQL数据库优化、系统性能调优，具备完整项目交付能力。'
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
      content: '牧之水 - 五年+全栈架构师 | Java后端技术专家'
    },
    {
      name: 'twitter:description',
      content: '牧之水个人网站 - 五年+全栈架构师，专注Java后端开发、微服务架构设计、MySQL数据库优化、系统性能调优，具备完整项目交付能力。'
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
        name: '牧之水',
        jobTitle: '五年+全栈架构师 & Java后端技术专家',
        description: '五年+全栈架构师，专注Java后端开发、微服务架构设计、MySQL数据库优化、系统性能调优，具备完整项目交付能力',
        url: 'https://your-domain.com',
        image: 'https://your-domain.com/avatar.jpg',
        sameAs: [
          'https://github.com/your-username',
          'https://twitter.com/your-username',
          'https://linkedin.com/in/your-username'
        ],
        knowsAbout: [
          'Java',
          'Spring Boot',
          'Spring Cloud',
          'MySQL优化',
          '微服务架构',
          'RabbitMQ',
          'Redis缓存',
          'Docker容器化',
          'Linux运维',
          'Alibaba Cloud',
          '系统性能调优',
          '数据库设计',
          'Vue前端开发',
          'RESTful API',
          'DevOps',
          'JVM调优',
          'MyBatis',
          'Nacos',
          'Gateway网关',
          'OpenFeign'
        ],
        alumniOf: {
          '@type': 'Organization',
          name: '你的学校或培训机构'
        },
        worksFor: {
          '@type': 'Organization',
          name: '全栈架构师'
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

// 滚动动画观察器
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

  // 观察所有动画元素
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in')
  animatedElements.forEach(el => observer.observe(el))
})
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