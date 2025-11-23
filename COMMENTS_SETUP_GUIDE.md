# 💬 评论系统配置指南

本指南将帮助你为博客添加评论功能和留言板。

---

## 🎯 功能说明

### 已实现功能
- ✅ 文章评论功能
- ✅ 留言板页面
- ✅ GitHub 登录（必须登录才能评论）
- ✅ Markdown 支持
- ✅ Emoji 表情支持
- ✅ 点赞和回复功能
- ✅ 主题自动切换

### 特点
- 🔒 **安全**：基于 GitHub OAuth，无需自己管理用户系统
- 💰 **免费**：完全免费，无广告
- 📦 **无后端**：无需搭建服务器，数据存储在 GitHub
- 🎨 **美观**：自动适配你的博客主题

---

## 📋 配置步骤

### 步骤1：启用 GitHub Discussions

1. 访问你的博客 GitHub 仓库
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Features**（功能）
4. 勾选 **Discussions**（讨论）

### 步骤2：安装 Giscus App

1. 访问 https://github.com/apps/giscus
2. 点击 **Install**（安装）
3. 选择 **Only select repositories**（只选择特定仓库）
4. 选择你的博客仓库（例如：`herbal-rin/yukina`）
5. 点击 **Install** 完成安装

### 步骤3：配置 Giscus

1. 访问 https://giscus.app/zh-CN
2. 按照以下步骤配置：

#### 📝 配置选项

**仓库设置：**
```
仓库：herbal-rin/yukina
```
（替换为你的仓库）

**页面 ↔️ discussion 映射关系：**
```
选择：pathname
```
（推荐使用页面路径）

**Discussion 分类：**
```
选择：Announcements
```
（或者你喜欢的其他分类）

**特性：**
- ✅ 启用主 discussion 的反应
- ✅ 将 discussion 元数据以消息方式发送到父窗口
- ✅ 输入框在评论上方（可选）

**主题：**
```
选择：preferred_color_scheme
```
（自动跟随系统主题）

**语言：**
```
选择：zh-CN
```

### 步骤4：获取配置信息

配置完成后，Giscus 会生成配置代码，类似：

```html
<script src="https://giscus.app/client.js"
        data-repo="herbal-rin/yukina"
        data-repo-id="R_kgDOK..."  ← 这是你的仓库 ID
        data-category="Announcements"
        data-category-id="DIC_kwDOK..."  ← 这是分类 ID
        ...
</script>
```

**记下以下两个值：**
1. `data-repo-id`：你的仓库 ID
2. `data-category-id`：分类 ID

### 步骤5：更新配置文件

打开 `yukina/src/components/Comments.astro` 文件，找到配置区域（第 26-49 行）：

```typescript
const GISCUS_CONFIG = {
  // 你的 GitHub 仓库（格式：用户名/仓库名）
  repo: "herbal-rin/yukina",  // ← 修改为你的仓库
  
  // 仓库 ID（从 giscus.app 获取）
  repoId: "YOUR_REPO_ID",  // ← 替换为你的仓库 ID
  
  // Discussion 分类
  category: "Announcements",
  
  // 分类 ID（从 giscus.app 获取）
  categoryId: "YOUR_CATEGORY_ID",  // ← 替换为你的分类 ID
  
  // 其他配置保持默认即可
  mapping: "pathname",
  strict: "0",
  reactionsEnabled: "1",
  inputPosition: "bottom",
  theme: "preferred_color_scheme",
  lang: "zh-CN",
};
```

**示例配置：**
```typescript
const GISCUS_CONFIG = {
  repo: "herbal-rin/yukina",
  repoId: "R_kgDOK1234567",
  category: "Announcements",
  categoryId: "DIC_kwDOK1234567",
  mapping: "pathname",
  strict: "0",
  reactionsEnabled: "1",
  inputPosition: "bottom",
  theme: "preferred_color_scheme",
  lang: "zh-CN",
};
```

### 步骤6：添加留言板导航（可选）

如果你想在导航栏添加"留言板"链接，编辑 `yukina/yukina.config.ts`：

```typescript
navigators: [
  {
    nameKey: I18nKeys.nav_bar_home,
    href: "/",
  },
  {
    nameKey: I18nKeys.nav_bar_archive,
    href: "/archive",
  },
  {
    nameKey: I18nKeys.nav_bar_about,
    href: "/about",
  },
  {
    nameKey: I18nKeys.nav_bar_friends,
    href: "/friends",
  },
  {
    nameKey: I18nKeys.nav_bar_guestbook,  // ← 添加这行
    href: "/guestbook",                    // ← 添加这行
  },
],
```

### 步骤7：构建和部署

```bash
# 构建项目
pnpm build

# 提交到 GitHub
git add .
git commit -m "添加评论系统和留言板功能"
git push origin main
```

等待 Cloudflare Pages 自动部署（2-5分钟）。

---

## 🎉 使用说明

### 文章评论
- 访问任意文章页面
- 滚动到文章底部
- 会看到评论区
- 点击"使用 GitHub 登录"开始评论

### 留言板
- 访问 `https://你的域名/guestbook`
- 或点击导航栏的"留言板"
- 使用 GitHub 账号登录后留言

---

## 🔧 高级配置

### 自定义主题

编辑 `yukina/src/components/Comments.astro`，修改 `theme` 字段：

```typescript
// 亮色主题
theme: "light",

// 暗色主题
theme: "dark",

// 跟随系统（推荐）
theme: "preferred_color_scheme",

// 其他主题
theme: "dark_dimmed",
theme: "transparent_dark",
theme: "noborder_light",
```

### 修改评论框位置

```typescript
// 评论框在下方（默认）
inputPosition: "bottom",

// 评论框在上方
inputPosition: "top",
```

### 修改映射方式

```typescript
// 使用页面路径（推荐）
mapping: "pathname",

// 使用页面 URL
mapping: "url",

// 使用页面标题
mapping: "title",

// 使用特定术语
mapping: "specific",

// 使用页面序号
mapping: "number",
```

### 禁用反应（点赞）

```typescript
reactionsEnabled: "0",  // 禁用
reactionsEnabled: "1",  // 启用（默认）
```

---

## ❓ 常见问题

### Q1: 评论区没有显示？

**检查项：**
1. 确认已启用 GitHub Discussions
2. 确认已安装 Giscus App
3. 确认 `repoId` 和 `categoryId` 配置正确
4. 清除浏览器缓存，刷新页面

### Q2: 无法登录评论？

**解决方法：**
- 确保你有 GitHub 账号
- 检查浏览器是否阻止了弹出窗口
- 尝试使用无痕模式
- 检查 GitHub OAuth 是否正常

### Q3: 评论数据存储在哪里？

**答案：**
- 所有评论数据存储在你的 GitHub 仓库的 Discussions 中
- 你可以在仓库的 Discussions 标签页查看和管理
- 可以删除、编辑、隐藏评论

### Q4: 如何删除评论？

**方法：**
1. 访问你的 GitHub 仓库
2. 点击 **Discussions** 标签
3. 找到对应的 discussion
4. 可以删除整个 discussion 或单条评论

### Q5: 评论会被搜索引擎收录吗？

**答案：**
- 评论内容在 GitHub Discussions 中，会被搜索引擎收录
- 但在你的博客页面上，评论是通过 iframe 加载的
- 不会直接影响你的博客 SEO

### Q6: 可以导出评论数据吗？

**答案：**
- 可以通过 GitHub API 导出
- 也可以在 Discussions 页面手动复制
- 数据完全归你所有

### Q7: 需要付费吗？

**答案：**
- 完全免费
- 无广告
- 无限制

---

## 🎨 样式自定义

评论区样式会自动适配你的博客主题。如果需要自定义，编辑 `yukina/src/components/Comments.astro` 的 `<style>` 部分：

```css
.giscus-wrapper {
  @apply mt-12 w-full;
  /* 添加你的自定义样式 */
}

.giscus-wrapper :global(.giscus) {
  @apply rounded-2xl bg-[var(--card-color)] p-6;
  /* 自定义评论区容器样式 */
}
```

---

## 🌟 替代方案

如果 Giscus 不适合你，还有以下替代方案：

### 1. Utterances
- 类似 Giscus，基于 GitHub Issues
- 更轻量，但功能较少
- 官网：https://utteranc.es/

### 2. Waline
- 功能更强大
- 支持多种登录方式
- 需要部署后端服务
- 官网：https://waline.js.org/

### 3. Twikoo
- 功能丰富
- 支持多种部署方式
- 国内访问速度快
- 官网：https://twikoo.js.org/

---

## 📞 需要帮助？

如果遇到问题：
1. 查看本指南的常见问题部分
2. 访问 Giscus 官方文档：https://giscus.app/zh-CN
3. 检查 GitHub Discussions 是否已启用
4. 确认配置信息是否正确

---

**祝你的博客评论功能顺利运行！💬**



