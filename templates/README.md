# 📝 博客文章模板说明

这个文件夹包含了多种博客文章模板，方便你快速创建新文章。

---

## 📚 可用模板

### 1. 主模板（详细版）
**文件：** `../BLOG_POST_TEMPLATE.md`

包含所有字段和详细注释，适合：
- 第一次写文章的用户
- 需要了解所有可用字段的用户
- 需要参考注释的用户

---

### 2. 最简模板
**文件：** `template-minimal.md`

只包含必填字段，适合：
- 快速发布简单文章
- 个人笔记或随笔

**包含字段：**
- `title` - 标题
- `published` - 发布日期

---

### 3. 推荐模板 ⭐
**文件：** `template-recommended.md`

包含常用字段，适合：
- 大多数日常文章
- 技术博客
- 生活记录

**包含字段：**
- `title` - 标题
- `published` - 发布日期
- `description` - 描述
- `tags` - 标签
- `category` - 分类
- `draft` - 草稿状态

---

### 4. 转载文章模板
**文件：** `template-repost.md`

包含版权信息字段，适合：
- 转载他人文章
- 翻译文章
- 需要标注来源的文章

**包含字段：**
- 推荐模板的所有字段
- `licenseName` - 许可证名称
- `licenseUrl` - 许可证链接
- `author` - 原作者
- `sourceLink` - 原文链接

---

### 5. 草稿模板
**文件：** `template-draft.md`

用于未完成的文章，适合：
- 正在撰写的文章
- 需要稍后完成的文章
- 团队协作时的待审核文章

**特点：**
- `draft: true` - 不会在博客中显示

---

### 6. 带封面图模板
**文件：** `template-with-cover.md`

包含自定义封面图，适合：
- 需要特定封面图的文章
- 重要文章或专题文章

**额外字段：**
- `cover` - 封面图片URL

---

## 🚀 使用方法

### 方法1：复制模板
1. 选择合适的模板文件
2. 复制整个文件内容
3. 在 `yukina/src/contents/posts/` 目录创建新文件
4. 粘贴内容并修改

### 方法2：基于模板创建
```bash
# 复制模板文件到 posts 目录
cp templates/template-recommended.md src/contents/posts/my-new-article.md

# 编辑新文件
# 修改 Front Matter 和文章内容
```

---

## 📋 字段快速参考

### 必填字段
```yaml
title: "文章标题"
published: 2025-01-15
```

### 推荐字段
```yaml
description: "文章描述"
tags: [标签1, 标签2]
category: "分类"
```

### 可选字段
```yaml
draft: false                    # 草稿状态
cover: "图片URL"                # 封面图
author: "作者"                  # 作者名称
licenseName: "许可证"           # 许可证名称
licenseUrl: "许可证URL"         # 许可证链接
sourceLink: "原文URL"           # 原文链接
```

---

## 💡 常见场景

### 场景1：写技术教程
使用：**推荐模板** (`template-recommended.md`)
```yaml
category: "技术"
tags: [JavaScript, 教程, 前端]
```

### 场景2：生活记录
使用：**推荐模板** 或 **最简模板**
```yaml
category: "生活"
tags: [日常, 随笔]
```

### 场景3：转载文章
使用：**转载模板** (`template-repost.md`)
```yaml
licenseName: "CC BY-NC-SA 4.0"
author: "原作者"
sourceLink: "原文链接"
```

### 场景4：未完成的文章
使用：**草稿模板** (`template-draft.md`)
```yaml
draft: true  # 不会显示在博客上
```

---

## 📝 文件命名建议

### 推荐命名方式
- `my-first-blog-post.md`
- `javascript-array-methods.md`
- `2025-year-end-summary.md`

### 命名规则
- ✅ 使用英文
- ✅ 小写字母
- ✅ 用连字符 `-` 分隔单词
- ❌ 避免中文字符
- ❌ 避免空格
- ❌ 避免特殊符号

---

## 🔗 相关文档

- **详细发布指南：** `../BLOG_PUBLISHING_GUIDE.md`
- **配置文件：** `../yukina.config.ts`
- **内容配置：** `../src/content.config.ts`

---

## ❓ 需要帮助？

查看完整的发布指南：
```bash
cat ../BLOG_PUBLISHING_GUIDE.md
```

或查看主模板的详细注释：
```bash
cat ../BLOG_POST_TEMPLATE.md
```

