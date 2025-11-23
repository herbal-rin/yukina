# 📝 草稿功能使用指南

本指南介绍如何使用博客的草稿功能来管理未发布的文章。

---

## 🎯 草稿功能说明

### 什么是草稿？

草稿（Draft）是一种文章状态，用于标记尚未准备好公开发布的文章。

**特点：**
- ✅ **开发环境可见**：在本地开发时（`pnpm dev`）可以预览
- ❌ **生产环境隐藏**：构建后（`pnpm build`）不会出现在博客中
- 🔒 **完全隐藏**：草稿文章不会出现在首页、归档、分类、标签等任何地方
- 🚫 **无法访问**：即使知道 URL 也无法访问草稿文章

---

## 📋 如何使用草稿功能

### 1. 创建草稿文章

在 Markdown 文件的 Front Matter 中添加 `draft: true`：

```markdown
---
title: 我的草稿文章
published: 2025-01-20
description: 这是一篇草稿
tags: [测试]
category: 技术
draft: true  # ← 设置为草稿
---

这是文章内容...
```

### 2. 发布草稿文章

当文章准备好发布时，将 `draft` 改为 `false` 或删除这一行：

```markdown
---
title: 我的草稿文章
published: 2025-01-20
description: 这是一篇草稿
tags: [测试]
category: 技术
draft: false  # ← 改为 false，或直接删除这一行
---

这是文章内容...
```

### 3. 重新设为草稿

如果需要暂时隐藏已发布的文章，将 `draft` 改回 `true`：

```markdown
---
title: 我的文章
published: 2025-01-20
draft: true  # ← 重新设为草稿
---
```

---

## 🔍 草稿在不同环境的表现

### 开发环境（`pnpm dev`）

**所有文章都可见**，包括草稿：

```bash
# 启动开发服务器
pnpm dev

# 访问 http://localhost:4321
# 可以看到所有文章，包括 draft: true 的文章
```

**用途：**
- 预览草稿文章的效果
- 调试文章格式
- 检查图片、链接等

### 生产环境（`pnpm build`）

**草稿文章完全隐藏**：

```bash
# 构建生产版本
pnpm build

# 草稿文章不会出现在 dist/ 目录中
# 部署后，访客无法看到草稿文章
```

**效果：**
- ❌ 首页不显示
- ❌ 归档页不显示
- ❌ 分类页不显示
- ❌ 标签页不显示
- ❌ 搜索结果不显示
- ❌ RSS 订阅不包含
- ❌ Sitemap 不包含
- ❌ 直接访问 URL 返回 404

---

## 📊 实际案例

### 案例 1：准备中的文章

```markdown
---
title: 深入理解 TypeScript 泛型
published: 2025-01-20
description: 这篇文章还没写完
tags: [TypeScript, 编程]
category: 技术
draft: true  # ← 文章还在写，先设为草稿
---

# 深入理解 TypeScript 泛型

## 目录
- [ ] 泛型基础
- [ ] 泛型约束
- [ ] 泛型工具类型

（待完成...）
```

**效果：**
- 本地开发时可以预览
- 构建后不会发布到博客

### 案例 2：定时发布

```markdown
---
title: 2025 年终总结
published: 2025-12-31  # 设置未来日期
description: 我的年终总结
tags: [总结, 生活]
category: 生活
draft: true  # ← 先设为草稿，到时间再发布
---

这是我的 2025 年终总结...
```

**使用方法：**
1. 提前写好文章，设为草稿
2. 到发布日期时，改为 `draft: false`
3. 提交并部署

### 案例 3：临时下线文章

```markdown
---
title: 某篇已发布的文章
published: 2025-01-15
description: 需要临时下线修改
draft: true  # ← 临时设为草稿，修改后再发布
---

（需要修改的内容...）
```

**场景：**
- 发现文章有错误需要修改
- 内容需要更新但还没准备好
- 暂时不想让访客看到

---

## 🛠️ 开发和部署流程

### 完整工作流程

```bash
# 1. 创建草稿文章
# 在 src/contents/posts/ 创建 my-draft.md
# 设置 draft: true

# 2. 本地预览
pnpm dev
# 访问 http://localhost:4321 查看效果

# 3. 准备发布
# 将 draft: true 改为 draft: false

# 4. 构建测试
pnpm build
# 检查 dist/posts/ 目录，确认文章已生成

# 5. 部署到 GitHub
git add .
git commit -m "发布新文章：XXX"
git push origin main

# 6. 等待 Cloudflare Pages 自动部署（2-5分钟）
```

---

## ⚠️ 注意事项

### 1. `draft` 字段是可选的

如果不写 `draft` 字段，默认为 `false`（已发布）：

```markdown
---
title: 我的文章
published: 2025-01-20
# 没有 draft 字段 = draft: false = 已发布
---
```

### 2. 开发环境总是显示所有文章

在本地开发时（`pnpm dev`），无论 `draft` 设置为什么，所有文章都会显示。

**这是正常的！** 这样可以方便你预览草稿。

### 3. 只有构建后才会过滤草稿

草稿过滤只在 **生产构建**（`pnpm build`）时生效。

**测试方法：**
```bash
# 构建
pnpm build

# 检查 dist/posts/ 目录
# 草稿文章不应该出现在这里
```

### 4. 已部署的草稿需要重新构建

如果你之前部署了一篇文章，后来改为草稿，需要：

```bash
# 1. 修改 draft: true
# 2. 重新构建
pnpm build

# 3. 重新部署
git add .
git commit -m "将文章设为草稿"
git push origin main
```

### 5. 草稿文章的 URL 会改变

如果你使用 `HASH` 模式生成 URL（默认），草稿文章的 URL 基于文件名生成。

**建议：** 在发布前不要分享草稿文章的 URL。

---

## 🔧 技术实现

### 过滤逻辑

草稿过滤在以下位置实现：

#### 1. 文章列表（首页）
```typescript
// src/utils/content.ts
const allBlogPosts = await getCollection("posts", ({ data }) => {
  return import.meta.env.PROD ? data.draft !== true : true;
});
```

#### 2. 单篇文章页面
```typescript
// src/pages/posts/[...slug].astro
const postEntries = await getCollection("posts", ({ data }) => {
  return import.meta.env.PROD ? data.draft !== true : true;
});
```

#### 3. 归档、分类、标签
同样使用 `GetSortedPosts()` 等函数，已内置草稿过滤。

### 环境判断

- `import.meta.env.PROD`：生产环境（`pnpm build`）
- `import.meta.env.DEV`：开发环境（`pnpm dev`）

**逻辑：**
```typescript
// 如果是生产环境，过滤掉 draft: true 的文章
// 如果是开发环境，显示所有文章
return import.meta.env.PROD ? data.draft !== true : true;
```

---

## 📝 快速参考

### 草稿文章模板

```markdown
---
title: 文章标题
published: 2025-01-20
description: 文章描述
tags: [标签1, 标签2]
category: 分类
draft: true  # ← 草稿标记
---

文章内容...
```

### 常用命令

```bash
# 本地预览（显示草稿）
pnpm dev

# 生产构建（隐藏草稿）
pnpm build

# 部署
git add .
git commit -m "更新文章"
git push origin main
```

### 检查草稿是否被过滤

```bash
# 1. 构建
pnpm build

# 2. 检查 dist/posts/ 目录
# Windows
dir dist\posts

# Linux/Mac
ls dist/posts

# 3. 草稿文章不应该出现在列表中
```

---

## ❓ 常见问题

### Q1: 为什么本地开发时草稿也显示？

**答：** 这是设计行为，方便你预览草稿。只有构建后（`pnpm build`）草稿才会被过滤。

### Q2: 如何确认草稿不会被发布？

**答：** 运行 `pnpm build`，然后检查 `dist/posts/` 目录，草稿文章不应该出现。

### Q3: 我改了 `draft: true`，为什么还能访问？

**答：** 
1. 确认你运行的是 `pnpm build` 而不是 `pnpm dev`
2. 如果是已部署的文章，需要重新构建并推送到 GitHub

### Q4: 可以批量管理草稿吗？

**答：** 可以使用文本编辑器的批量替换功能：
```bash
# 批量设为草稿
查找: draft: false
替换为: draft: true

# 批量发布
查找: draft: true
替换为: draft: false
```

### Q5: 草稿会被搜索引擎收录吗？

**答：** 不会。草稿文章：
- 不会出现在 sitemap.xml
- 不会出现在 robots.txt
- 不会被 Pagefind 索引
- 构建后不存在对应的 HTML 文件

### Q6: 可以给草稿设置密码吗？

**答：** 当前不支持。草稿功能是完全隐藏，不是密码保护。如果需要密码保护，建议使用其他方案。

---

## ✅ 总结

### 草稿功能的优势

- ✅ **简单易用**：只需一个 `draft: true` 字段
- ✅ **安全可靠**：生产环境完全隐藏
- ✅ **方便预览**：开发环境可以查看效果
- ✅ **灵活控制**：随时发布或隐藏文章

### 最佳实践

1. **新文章先设为草稿**：写完后再发布
2. **定期检查草稿**：避免忘记发布
3. **构建前测试**：确保草稿被正确过滤
4. **使用模板**：使用 `templates/template-draft.md` 快速创建草稿

---

**现在你可以放心使用草稿功能了！** 📝



