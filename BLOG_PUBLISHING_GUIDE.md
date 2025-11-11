# 📝 Yukina 博客发布指南

这是一份完整的博客文章发布指南，帮助你快速发布新文章到你的 Yukina 博客。

---

## 📂 一、文件存放位置

### 博客文章目录
```
yukina/src/contents/posts/
```

**所有博客文章都必须放在这个目录下**，文件格式为 `.md`（Markdown）。

### 文件命名规范

✅ **推荐的命名方式：**
- 使用英文文件名
- 使用小写字母
- 单词之间用连字符 `-` 分隔
- 文件名要有意义，便于识别

**示例：**
```
✅ my-first-blog-post.md
✅ disable-macos26-auto-update.md
✅ javascript-tutorial-2024.md
```

❌ **避免的命名方式：**
```
❌ 我的第一篇博客.md          # 避免中文文件名
❌ My First Blog Post.md      # 避免空格
❌ post@2024#01.md           # 避免特殊符号
```

---

## 📋 二、Front Matter 格式（前置信息）

每篇文章开头必须包含 Front Matter（用 `---` 包裹的 YAML 格式元数据）。

### 完整格式示例

```markdown
---
title: 你的文章标题
published: 2025-01-15
description: 文章的简短描述，会显示在文章卡片上
tags: [标签1, 标签2, 标签3]
category: 分类名称
draft: false
author: herbal
cover: https://example.com/cover-image.jpg
licenseName: "CC BY-NC-SA 4.0"
licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
sourceLink: "https://example.com/original-article"
---

# 这里开始写你的文章内容

文章正文...
```

### 字段说明

| 字段名 | 类型 | 必填 | 说明 | 示例 |
|--------|------|------|------|------|
| `title` | 字符串 | ✅ 必填 | 文章标题，支持中文和 Emoji | `"分享如何关闭MacOS26自动更新"` |
| `published` | 日期 | ✅ 必填 | 发布日期，格式：YYYY-MM-DD | `2025-01-15` |
| `description` | 字符串 | ⭐ 推荐 | 文章描述，用于SEO和文章卡片 | `"针对不想升级MacOS26系统的朋友的一份指南😊"` |
| `tags` | 数组 | ⭐ 推荐 | 文章标签，用于分类和搜索 | `[MacOS, 技术指南]` |
| `category` | 字符串 | ⭐ 推荐 | 文章分类 | `"技术指南"` |
| `draft` | 布尔值 | 可选 | 是否为草稿（true=草稿，false=发布） | `false` |
| `author` | 字符串 | 可选 | 作者名称 | `"herbal"` |
| `cover` | 字符串 | 可选 | 文章封面图片URL | `"https://example.com/image.jpg"` |
| `licenseName` | 字符串 | 可选 | 版权许可名称 | `"CC BY-NC-SA 4.0"` |
| `licenseUrl` | 字符串 | 可选 | 版权许可链接 | `"https://creativecommons.org/..."` |
| `sourceLink` | 字符串 | 可选 | 原文链接（转载文章使用） | `"https://example.com/original"` |

### 最简格式（仅必填项）

```markdown
---
title: 我的第一篇博客
published: 2025-01-15
---

# 文章内容开始

这是我的第一篇博客文章...
```

### 推荐格式（包含常用字段）

```markdown
---
title: 我的第一篇博客
published: 2025-01-15
description: 这是我在新博客上发布的第一篇文章
tags: [博客, 生活记录]
category: 生活
draft: false
---

# 文章内容开始

这是我的第一篇博客文章...
```

---

## ✍️ 三、编写文章内容

### Markdown 语法支持

你的博客支持完整的 Markdown 语法，包括：

- **标题**：`# H1`, `## H2`, `### H3`
- **粗体**：`**粗体文字**`
- **斜体**：`*斜体文字*`
- **代码块**：使用三个反引号
- **链接**：`[链接文字](URL)`
- **图片**：`![图片描述](图片URL)`
- **列表**：有序列表和无序列表
- **引用**：`> 引用文字`
- **表格**：Markdown 表格语法
- **数学公式**：支持 KaTeX 数学公式

### 示例文章结构

```markdown
---
title: 完整的文章示例
published: 2025-01-15
description: 展示如何编写一篇完整的博客文章
tags: [教程, Markdown]
category: 技术
draft: false
---

# 文章主标题

这是文章的开头段落，简要介绍文章内容。

## 第一部分

这是第一部分的内容。

### 子标题

更详细的内容。

## 第二部分

这是第二部分的内容。

### 代码示例

```javascript
console.log("Hello, World!");
```

### 图片示例

![示例图片](https://example.com/image.jpg)

## 总结

文章的总结部分。
```

---

## 🚀 四、发布流程

### 步骤1：创建文章文件

1. 在 `yukina/src/contents/posts/` 目录下创建新的 `.md` 文件
2. 使用英文文件名，例如：`my-new-article.md`

### 步骤2：编写文章内容

1. 添加 Front Matter（前置信息）
2. 编写文章正文
3. 保存文件

### 步骤3：本地预览（可选）

在 `yukina` 目录下运行：

```bash
# 启动开发服务器
pnpm dev
```

访问 `http://localhost:4321` 预览你的博客。

### 步骤4：构建项目

在 `yukina` 目录下运行：

```bash
# 构建静态文件
pnpm build
```

**检查构建结果：**
- 如果构建成功，会显示 `[build] Complete!`
- 如果构建失败，检查错误信息并修复

**常见构建错误：**

1. **缺少必填字段**
   ```
   title: Required
   published: Required
   ```
   解决：检查 Front Matter 是否包含 `title` 和 `published` 字段

2. **日期格式错误**
   ```
   published: Invalid date format
   ```
   解决：确保日期格式为 `YYYY-MM-DD`，例如 `2025-01-15`

3. **文件名包含中文**
   ```
   data does not match collection schema
   ```
   解决：将文件名改为英文

### 步骤5：提交到 GitHub

```bash
# 1. 添加所有更改
git add .

# 2. 提交更改（附上有意义的提交信息）
git commit -m "添加新文章：文章标题"

# 3. 推送到 GitHub
git push origin main
```

**提交信息示例：**
```bash
git commit -m "添加新文章：如何关闭MacOS26自动更新"
git commit -m "更新文章：修复代码示例中的错误"
git commit -m "新增分类：技术指南"
```

### 步骤6：自动部署

推送到 GitHub 后，Cloudflare Pages 会自动：
1. 检测到代码更新
2. 自动运行 `pnpm build`
3. 部署新的静态文件
4. 更新你的博客网站

**部署时间：** 通常需要 2-5 分钟

**查看部署状态：**
访问 Cloudflare Dashboard → Pages → 你的项目 → 查看部署历史

---

## 📝 五、完整示例

### 示例1：技术教程文章

**文件名：** `javascript-array-methods.md`

```markdown
---
title: JavaScript 数组方法完全指南
published: 2025-01-15
description: 详细介绍 JavaScript 中常用的数组方法及其使用场景
tags: [JavaScript, 前端开发, 教程]
category: 技术
draft: false
---

# JavaScript 数组方法完全指南

在 JavaScript 中，数组是最常用的数据结构之一...

## 常用方法

### map() 方法

`map()` 方法创建一个新数组...

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

## 总结

本文介绍了 JavaScript 中常用的数组方法...
```

### 示例2：生活记录文章

**文件名：** `my-first-blog-post.md`

```markdown
---
title: Hello My Blog
published: 2025-01-15
description: 第一篇博客发布
tags: [First blog post, Record life]
category: 生活
draft: false
---

# 我的第一篇博客

这是我的个人博客，用来记录生活和学习。

## 为什么写博客

写博客可以帮助我：
- 记录学习过程
- 整理知识体系
- 分享经验心得

## 未来计划

我计划在这个博客上分享：
1. 技术学习笔记
2. 生活感悟
3. 读书心得

期待与大家交流！
```

---

## 🔧 六、常见问题

### Q1: 如何设置文章为草稿？

在 Front Matter 中设置 `draft: true`：

```markdown
---
title: 草稿文章
published: 2025-01-15
draft: true
---
```

草稿文章不会在博客中显示。

### Q2: 如何添加文章封面图？

在 Front Matter 中添加 `cover` 字段：

```markdown
---
title: 我的文章
published: 2025-01-15
cover: "https://example.com/cover.jpg"
---
```

### Q3: 如何修改已发布的文章？

1. 直接编辑 `yukina/src/contents/posts/` 目录下的对应 `.md` 文件
2. 保存修改
3. 运行 `pnpm build` 构建
4. 提交到 GitHub：`git add . && git commit -m "更新文章" && git push`

### Q4: 如何删除文章？

1. 删除 `yukina/src/contents/posts/` 目录下的对应 `.md` 文件
2. 运行 `pnpm build` 构建
3. 提交到 GitHub

### Q5: 文件名可以用中文吗？

❌ **不推荐使用中文文件名**

虽然文章标题可以是中文，但文件名建议使用英文，以避免编码问题和构建错误。

---

## 📚 七、快速参考

### 最小可用模板

```markdown
---
title: 文章标题
published: 2025-01-15
---

文章内容...
```

### 推荐模板

```markdown
---
title: 文章标题
published: 2025-01-15
description: 文章描述
tags: [标签1, 标签2]
category: 分类
draft: false
---

# 文章标题

文章内容...
```

### 发布命令速查

```bash
# 本地预览
pnpm dev

# 构建项目
pnpm build

# 提交到 GitHub
git add .
git commit -m "添加新文章：文章标题"
git push origin main
```

---

## 🎯 八、最佳实践

1. **文件命名**：使用有意义的英文文件名
2. **Front Matter**：至少填写 `title`、`published`、`description`、`tags`、`category`
3. **文章结构**：使用清晰的标题层级
4. **图片处理**：使用图床或 CDN 托管图片
5. **代码格式**：使用代码块并指定语言
6. **提交信息**：写清楚每次提交的内容
7. **本地预览**：发布前先本地预览确认效果
8. **定期备份**：定期备份你的文章源文件

---

## 📞 需要帮助？

如果遇到问题，可以：
1. 检查本指南的常见问题部分
2. 查看构建错误信息
3. 检查 Front Matter 格式是否正确
4. 确认文件名是否符合规范

---

**祝你写作愉快！🎉**



