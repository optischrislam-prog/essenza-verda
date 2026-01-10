# 📤 GitHub 推送指南

## 快速開始（3 步）

### 步驟 1：創建 GitHub 儲存庫

1. 前往 [github.com/new](https://github.com/new)
2. 填寫以下信息：
   - **Repository name:** `essenza-verda`
   - **Description:** `Essenza Verda - Luxury Wellness E-Commerce Platform`
   - **Visibility:** 選擇 **Private**（私有）
   - **Initialize repository:** 不勾選
3. 點擊 **Create repository**

### 步驟 2：複製儲存庫 URL

創建成功後，您會看到一個 URL，例如：
```
https://github.com/YOUR_USERNAME/essenza-verda.git
```

### 步驟 3：推送代碼

在您的電腦上執行以下命令：

```bash
# 進入項目目錄
cd essenza_verda_upgrade

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Essenza Verda luxury e-commerce platform with npm"

# 添加遠程儲存庫（替換 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/essenza-verda.git

# 設置主分支
git branch -M main

# 推送到 GitHub
git push -u origin main
```

## 完整命令（複製粘貼）

```bash
cd essenza_verda_upgrade && \
git init && \
git add . && \
git commit -m "Initial commit: Essenza Verda luxury e-commerce platform with npm" && \
git remote add origin https://github.com/YOUR_USERNAME/essenza-verda.git && \
git branch -M main && \
git push -u origin main
```

**記得替換 `YOUR_USERNAME` 為您的 GitHub 用戶名！**

## 驗證推送成功

1. 前往 [github.com](https://github.com)
2. 進入您的 `essenza-verda` 儲存庫
3. 確認所有文件都已上傳
4. 複製儲存庫 URL 用於 Vercel 部署

## 常見問題

### Q：出現 "fatal: not a git repository" 錯誤

**解決方案：** 確保您在正確的目錄中
```bash
pwd  # 檢查當前目錄
cd essenza_verda_upgrade  # 進入項目目錄
```

### Q：出現 "fatal: remote origin already exists" 錯誤

**解決方案：** 移除現有的遠程儲存庫
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/essenza-verda.git
git push -u origin main
```

### Q：出現 "Permission denied (publickey)" 錯誤

**解決方案：** 設置 SSH 金鑰或使用 HTTPS
```bash
# 使用 HTTPS（推薦）
git remote set-url origin https://github.com/YOUR_USERNAME/essenza-verda.git

# 或設置 SSH 金鑰
ssh-keygen -t ed25519 -C "your_email@example.com"
# 然後將公鑰添加到 GitHub Settings → SSH and GPG keys
```

## 下一步

推送成功後，前往 [DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md) 進行 Vercel 部署。
