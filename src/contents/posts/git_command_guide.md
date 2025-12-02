---
title: Git命令备忘与汇总
published: 2025-11-23
description: Git的各个指令比较琐碎，写一篇文章来系统的整理
tags:
  - 技术开发
  - Git
category: 备忘
draft: false
cover: "https://vip.123pan.cn/1846863100/yk6baz03t0n000d7w33his9yscv4nhk2DIYxAqYzDweODcxvBIryBF==.png"
---
## 1. 配置 Git 环境

### 1.1 配置用户信息

首先，我们需要设置 Git 的用户信息，这是每次提交时所用的用户名和电子邮件地址。

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

- `--global`：表示该配置适用于全局用户的所有 Git 仓库。（去除即为项目级）
- `user.name` 和 `user.email`：分别设置用户的名字和电子邮件。

### 1.2 检查配置

要查看当前的 Git 配置，可以使用以下命令：

```bash
git config --list
```

这将列出所有当前的配置项。

### 1.3 配置编辑器

如果你想设置一个默认的编辑器（比如 Vim 、nano 或 VSCode），可以这样做：

```bash
git config --global core.editor "vi"
git config --global core.editor "nano"
git config --global core.editor "code --wait"
```

- `"code --wait"`：表示设置 Visual Studio Code 为编辑器，并且等到关闭编辑器后才继续执行 Git 命令。

## 2. 初始化 Git 仓库

如果你在本地创建一个新的 Git 仓库，可以使用以下命令：

```bash
git init
```

这将初始化一个新的 Git 仓库，创建一个 `.git` 隐藏文件夹，其中存储了版本控制信息。

## 3. 设置 SSH 公钥和私钥

为了与远程 Git 仓库（如 GitHub）进行安全通信，我们通常使用 SSH 密钥。

### 3.1 生成 SSH 密钥

生成 SSH 密钥

```bash
ssh-keygen -t rsa -b 4096 -C "your_github_email@example.com" -f ~/.ssh/id_rsa_github1
```

生成多个 SSH 密钥

```bash
ssh-keygen -t rsa -b 4096 -C "your_github_email@example.com" -f ~/.ssh/id_rsa_github2
```

- `id_rsa_github`：密钥文件名，可按需更改，但最好以 “id_rsa_” 为开头（出于安全考虑）
- `-t rsa`：指定使用 RSA 算法生成密钥。
- `-b 4096`：指定密钥的位数为 4096 位。
- `-C`：为密钥添加注释，通常是你的邮箱地址。

这两条命令会在 `~/.ssh/` 目录下生成两个密钥对：

- `id_rsa_github1`（私钥）
- `id_rsa_github1.pub`（公钥）
- `id_rsa_gitlab2`（私钥）
- `id_rsa_gitlab2.pub`（公钥）

### 3.2 添加 SSH 密钥到 SSH agent

启动 SSH agent 并将密钥添加到 agent 中：

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa_github1
ssh-add ~/.ssh/id_rsa_github2
```

在 shell 配置文件中自动启动 SSH agent

```bash
nano ~/.bashrc   # 或者如果你使用 zsh
nano ~/.zshrc
```

在文件末尾加上

```bash
# 启动 SSH agent
eval "$(ssh-agent -s)"

# 自动加载所有密钥
for key in ~/.ssh/id_rsa*; do
    ssh-add $key
done
```

- `~/.ssh/id_rsa*`：自动匹配 /.ssh/ 目录下的所有 "id_rsa" 开头的所有私钥文件

这段脚本会自动加载 `~/.ssh/` 目录下的所有私钥，简化了管理多个密钥的过程。
保存并关闭配置文件后，重新加载配置文件：

```bash
source ~/.bashrc   # 或者
source ~/.zshrc
```



### 3.3 将 SSH 公钥添加到 GitHub

复制公钥内容：

```bash
cat ~/.ssh/id_rsa.pub
```

然后将内容复制到 GitHub 的 **SSH and GPG keys** 页面中。

## 4. 绑定远程仓库

### 4.1 添加远程仓库

```bash
git remote add origin git@github.com:username/repo.git
```

- `origin` 是远程仓库的名字，通常用 `origin` 表示，可按需更改。
- `git@github.com:username/repo.git` 是远程仓库的 URL。

### 4.2 查看远程仓库

```bash
git remote -v
```

此命令会列出当前配置的所有远程仓库和对应的 URL。

## 5. 克隆远程仓库

要将远程仓库克隆到本地，可以使用以下命令：

```bash
git clone https://github.com/username/repo.git
```

这将创建一个本地仓库，并将远程仓库的内容复制过来。

## 6. **查看文件状态**

### 6.1 **查看当前修改状态**

```bash
git status
```

- 显示当前工作目录的状态，包括：
  - **未跟踪文件**：这些文件是新创建的，但尚未被 Git 跟踪。
  - **已修改文件**：这些文件在工作区有修改，但尚未被添加到暂存区。
  - **已暂存文件**：这些文件已经被 `git add` 命令添加到暂存区，准备提交。
![vscode简便标志](https://vip.123pan.cn/1846863100/yk6baz03t0l000d7w33fx926bczrd31cDIYxAqYzDweODcxvBIryBF==.png)

### 6.2 **查看文件差异**

```bash
git diff
```

- 显示工作区和暂存区之间的差异。你可以查看哪些内容被修改，但尚未被暂存（`git add`）到暂存区。

如果你只想查看 **暂存区和最后一次提交之间的差异**，可以运行：

```bash
git diff --cached
```

### 6.3 **查看特定文件的差异**

你可以只查看特定文件的差异，例如：

```bash
git diff <file_name>
```

这将显示指定文件与暂存区之间的差异。

---

## 7. **提交更改**

### 7.1 **将更改添加到暂存区**

```bash
git add <file_name>
```

或添加所有更改：

```bash
git add .
```

- 这会将指定文件（或所有文件）添加到暂存区，准备提交。

### 7.2 **提交更改**

```bash
git commit -m "Commit message"
```

- 提交文件到本地仓库，并附带提交说明（`-m` 后跟提交信息）。

如果你忘记添加提交信息，可以运行：

```bash
git commit
```

- 这将打开你配置的默认编辑器来编辑提交消息。

### 7.3 **查看提交日志**

```bash
git log
```

- 显示所有提交的日志信息，包括提交 ID、作者、日期和提交信息。

你可以使用以下选项来格式化输出并查看特定的提交信息。

#### `git log` 常用选项：

- `git log --oneline`：显示每个提交的简短信息（仅显示提交 ID 和提交信息）。
  
  ```bash
  git log --oneline
  ```

- `git log --oneline --graph --decorate`：以图形化方式显示提交历史，并显示分支和标签信息。

  ```bash
  git log --oneline --graph --decorate
  ```

- `git log --since="2 weeks ago"`：查看过去两周内的提交。

  ```bash
  git log --since="2 weeks ago"
  ```

- `git log -p`：显示每个提交的具体改动（类似 `git diff`）。

  ```bash
  git log -p
  ```

- `git log --author="author_name"`：查看特定作者的提交记录。

  ```bash
  git log --author="Jane Doe"
  ```

- `git log -- <file>`：查看特定文件的提交历史。

  ```bash
  git log -- <file_name>
  ```

### 7.4 **简化提交日志输出**

通过以下命令来简化和优化输出：

```bash
git log --oneline --graph --decorate --abbrev-commit
```

这将以简短形式显示提交历史，同时显示分支图标和提交 ID（以缩短格式显示）。

---

## 8. **回退文件和版本**

### 8.1 **回退文件到上一个提交**

```bash
git checkout -- <file>
```

- 这将撤销工作区的修改并恢复文件到最近的提交状态。

### 8.2 **回退到某个提交**

```bash
git reset --hard <commit_id>
```

- 使用 `git reset --hard` 可以将 HEAD 和当前分支重置到指定的提交，并且丢弃所有当前的工作区和暂存区修改。

如果你不想丢失文件更改，可以使用软重置：

```bash
git reset --soft <commit_id>
```

这将保留文件改动，但将 HEAD 重置到指定提交。

---

## 9. **分支管理**

### 9.1 **创建新分支**

```bash
git branch <branch_name>
```

- 这将在本地仓库中创建一个新分支，但不切换到该分支。

### 9.2 **切换到某个分支**

```bash
git checkout <branch_name>
```

- 切换到指定的分支。如果该分支没有本地存在，你也可以使用 `-b` 标志来同时创建并切换到新分支：

```bash
git checkout -b <branch_name>
```

### 9.3 **查看当前分支**

```bash
git branch
```

- 列出所有本地分支，并且在当前分支前面有一个 `*` 标记。

### 9.4 **删除分支**

```bash
git branch -d <branch_name>
```

- 删除一个分支，如果该分支有未合并的更改，则会提示错误。若强制删除，可以使用 `-D` 标志：

```bash
git branch -D <branch_name>
```

### 9.5 **合并分支**

```bash
git merge <branch_name>
```

- 将指定分支的改动合并到当前分支中。如果有冲突，Git 会提示你解决冲突。

### 9.6 **解决合并冲突**

合并冲突通常发生在不同开发者修改了相同的文件或相同代码行。Git 会提示哪些文件发生了冲突，开发者需要手动解决冲突。

1. 使用 `git status` 查看冲突文件。
2. 打开冲突文件，解决冲突标记 `<<<<<<<`, `=======`, `>>>>>>>`。
3. 解决冲突后，使用 `git add <file>` 添加修改。
4. 提交解决后的冲突：

```bash
git commit -m "Resolved merge conflict"
```

---

## 10. **与远程仓库交互**

### 10.1 **拉取最新的远程仓库内容**

```bash
git pull origin <branch_name>
```

- 从远程仓库拉取最新代码并合并到当前分支。

### 10.2 **推送本地更改到远程仓库**

```bash
git push origin <branch_name>
```

- 将本地的提交推送到远程仓库。

### 10.3 **查看远程仓库信息**

```bash
git remote -v
```

- 查看当前仓库所配置的所有远程仓库 URL。

### 10.4 **删除远程分支**

```bash
git push origin --delete <branch_name>
```

- 删除远程仓库中的分支。 

## 11. 结束语

以上介绍了 Git 配置、使用及多人协作开发时常见的操作。
希望这篇博客对你有所帮助，祝你在 Git 使用上越来越得心应手！😘
