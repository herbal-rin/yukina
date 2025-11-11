---
title: 分享如何关闭MacOS26自动更新
published: 2025-10-19
description: 针对不想升级MacOS26系统的朋友的一份指南😊
tags: [MacOS, 技术指南]
category: 技术指南
licenseName: "Unlicensed"
author: herbal
draft: false
cover: "https://vip.123pan.cn/1846863100/yk6baz03t0l000d7w33fvn1d6zgbpjo2DIYxAqYzDweODcxvBIryBF==.png"
---

# 写在之前：为什么要停止更新MacOS26🤗

MacOS26刚刚发布不久，考虑到很多人反映的各种新系统的问题，如：功耗上升、发热严重、续航下降，且对所谓液态玻璃（Liquid glass）的效果并不太感冒...

总之是对新功能的吸引力并不能胜过系统多处常用功能更改的适应成本（其实主要是启动台被砍了，吓得直接去搜怎么停止更新😢  

故通过gpt整理了一篇停止更新MacOS的博客，旨在记录和备忘（还有水一篇博客（bushi

---

# ✅ 第一步：关闭自动更新

1. 点击左上角苹果菜单  → 「系统设置」（System Settings） → **通用（General）** → **软件更新（Software Update）**。
2. 在「软件更新」界面中，通常会有一个「自动更新（Automatic Updates）」的选项
3. 在详细设置中，把以下开关都关闭：
   - "下载可用更新"
   - "安装 macOS 更新"
   - "安装安全响应与系统文件"等。
4. 确认关闭后，点击「完成／Done」保存设置。
   
这样做后，系统理论上就不会**自动下载安装**新系统版本或大规模升级。

---

# ⚠️ 第二步：减少升级提醒 / 阻止提醒弹窗

关闭自动更新后，系统可能**仍会弹出升级提醒**（比如提示"有可用   macOS 26 更新"）。如果你也想尽量减少这类提醒，可以考虑以下方法：

- 通过终端命令延后提醒时间：

```bash
defaults write com.apple.SoftwareUpdate MajorOSUserNotificationDate -date "2030-02-07 23:22:47 +0000"
defaults write com.apple.SoftwareUpdate UserNotificationDate -date "2030-02-07 23:22:47 +0000"
```

  这样设置后，系统会将"强制升级提醒"的日期推迟到将来。

  ---

# 📝 第三步：修改hosts文件屏蔽 Apple 更新服务器

## 🧭 一、什么是 `/etc/hosts`

`/etc/hosts` 是一个系统配置文件，用来手动指定域名与 IP 地址的对应关系。
 例如，你可以让某个网址（如 `swdist.apple.com`）指向本地 `127.0.0.1`，从而让系统访问不到苹果更新服务器，达到**屏蔽系统更新**的效果。

------

## ⚙️ 二、修改 `/etc/hosts` 的步骤

### 1️⃣ 打开终端

在「启动台 → 其他 → 终端（Terminal）」中打开终端。

------

### 2️⃣ 备份原文件（强烈建议）

在修改前先备份：

```
sudo cp /etc/hosts /etc/hosts.backup
```

------

### 3️⃣ 用管理员权限打开 `hosts` 文件

可以用内置的文本编辑器 `nano` 打开：

```
sudo nano /etc/hosts
```

系统会提示输入密码（输入时不会显示字符，直接输入回车即可）。

------

### 4️⃣ 编辑文件内容

在文件最下方加入以下几行（用于阻止 macOS 更新服务器）：

```
127.0.0.1  swdist.apple.com
127.0.0.1  swscan.apple.com
127.0.0.1  swcdn.apple.com
127.0.0.1  xp.apple.com
127.0.0.1  gdmf.apple.com
127.0.0.1  mesu.apple.com
127.0.0.1  updates.cdn-apple.com
```
🔒 这些域名对应苹果的更新分发服务，指向本地 127.0.0.1 后，系统就无法访问更新服务器。

------

### 5️⃣ 保存并退出

在 `nano` 编辑器中：

- 按下 **`Control + O`** → 回车（保存）
- 然后按 **`Control + X`**（退出）

------

### 6️⃣ 刷新 DNS 缓存

为了让更改立即生效，执行：

```bash
sudo dscacheutil -flushcache #清空系统 DNS 缓存，确保修改立即生效
sudo killall -HUP mDNSResponder #重启 DNS 服务进程，让网络配置刷新生效
```

没有提示即表示成功。

------

## 🧹 三、验证是否生效

你可以在终端执行：

```
ping swdist.apple.com
```

如果返回：

```
PING swdist.apple.com (127.0.0.1)
```

说明已成功屏蔽 🎉

---
## ⚠️ 四、注意事项

- **风险提示**：屏蔽更新服务器可能导致系统无法下载安全补丁或某些服务异常。
- **撤销方法**：  
执行：
```bash
sudo cp /etc/hosts.backup /etc/hosts #恢复原始 hosts 文件
sudo dscacheutil -flushcache #清空系统 DNS 缓存，确保修改立即生效
sudo killall -HUP mDNSResponder #重启 DNS 服务进程，让网络配置刷新生效
```
即可恢复原状。

- **受保护系统文件**：macOS 可能启用了「系统完整性保护（SIP）」，如果提示权限不足，请先进入恢复模式关闭 SIP（不推荐普通用户操作）。

---

# 写在最后😘
真的不明白老库克到底要干啥，你升级系统外观就升级系统外观，增加点动画效果、加点功耗还不能关掉也就算了，只是原来的外观看习惯了不适应而已，但直接阉割启动台强行改变用户使用习惯，这操作是真没看懂。据说是因为觉得用启动台的用户不多（在说什么？）

很迷惑，为什么不能给选项可调，不喜欢用的可以关掉启动台用你那个聚焦搜索嘛，直接阉割掉也太ee了。

总之感觉是有点精神错乱在里头的，电脑是好电脑，系统是好系统，人是老馋人。
