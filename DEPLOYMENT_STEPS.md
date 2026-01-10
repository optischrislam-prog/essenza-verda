# 🚀 完整部署指南 - Essenza Verda 豪華電商平台

## 📋 前置準備

確保您已準備好以下帳戶：
- ✅ GitHub 帳戶
- ✅ Vercel 帳戶（免費）
- ✅ 域名（essenza-verda.com 或其他）
- ✅ Stripe 帳戶（用於支付）

---

## 🔧 第 1 步：本地測試（5-10 分鐘）

### 1.1 安裝依賴

```bash
# 進入項目目錄
cd essenza_verda_upgrade

# 使用 npm 安裝所有依賴（不要使用 pnpm）
npm install

# 驗證安裝成功
npm list | head -20
```

**預期結果：**
- 所有依賴成功安裝
- 生成 `package-lock.json`（不是 pnpm-lock.yaml）
- 無錯誤信息

### 1.2 啟動開發伺服器

```bash
# 啟動開發伺服器
npm run dev
```

**預期結果：**
- 伺服器在 `http://localhost:3000` 或 `http://localhost:3001` 啟動
- 看到訊息：`Server running on http://localhost:3000/`

### 1.3 測試所有頁面

在瀏覽器中訪問以下 URL，確保都能正常加載：

| 頁面 | URL | 預期內容 |
|------|-----|--------|
| 首頁 | `http://localhost:3000/` | "Awaken Your Natural Essence" |
| 關於 | `http://localhost:3000/about` | 品牌故事 |
| 科學 | `http://localhost:3000/science` | GLP-1 數據 |
| FAQ | `http://localhost:3000/faq` | 常見問題 |
| 博客 | `http://localhost:3000/journal` | 博客列表 |
| 聯絡 | `http://localhost:3000/contact` | 聯絡表單 |
| 購物車 | `http://localhost:3000/cart` | 購物車頁面 |
| 結帳 | `http://localhost:3000/checkout` | 結帳表單 |
| 管理後台 | `http://localhost:3000/admin` | 管理儀表板 |

**測試清單：**
- [ ] 所有頁面都能加載
- [ ] 導航菜單正常工作
- [ ] 沒有紅色錯誤
- [ ] 響應式設計正常（在手機上測試）

### 1.4 停止開發伺服器

```bash
# 按 Ctrl+C 停止伺服器
```

---

## 📤 第 2 步：推送到 GitHub（10 分鐘）

### 2.1 創建 GitHub 儲存庫

1. 前往 [github.com/new](https://github.com/new)
2. 填寫以下信息：
   - **Repository name:** `essenza-verda`
   - **Description:** `Essenza Verda - Luxury Wellness E-Commerce Platform`
   - **Visibility:** 選擇 **Private**（私有）或 **Public**（公開）
   - **Initialize repository:** 不勾選
3. 點擊 **Create repository**

### 2.2 推送代碼到 GitHub

```bash
# 進入項目目錄
cd essenza_verda_upgrade

# 初始化 Git（如果還沒有）
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

**預期結果：**
- 代碼成功推送到 GitHub
- 儲存庫顯示所有文件
- 沒有錯誤信息

---

## 🚀 第 3 步：部署到 Vercel（10-15 分鐘）

### 3.1 連接 GitHub 到 Vercel

1. 前往 [vercel.com/new](https://vercel.com/new)
2. 點擊 **Continue with GitHub**（如果還沒有登入）
3. 授權 Vercel 訪問您的 GitHub 帳戶

### 3.2 導入儲存庫

1. 在 Vercel 儀表板中，點擊 **Import Project**
2. 選擇 **Import Git Repository**
3. 輸入您的儲存庫 URL：`https://github.com/YOUR_USERNAME/essenza-verda`
4. 點擊 **Continue**

### 3.3 配置項目

在 **Configure Project** 頁面：

| 設定 | 值 | 說明 |
|------|-----|------|
| **Framework Preset** | Vite | 自動選擇 |
| **Build Command** | `npm run build` | 已預設 |
| **Install Command** | `npm install` | 已預設 |
| **Output Directory** | `dist` | 已預設 |

**重要：確保使用 npm，不要使用 pnpm！**

### 3.4 添加環境變數

在 **Environment Variables** 部分，添加以下變數：

```
DATABASE_URL = [您的資料庫連接字符串]
JWT_SECRET = [隨機生成的密鑰，例如：abc123def456ghi789]
VITE_APP_ID = [Manus OAuth App ID]
OAUTH_SERVER_URL = [Manus OAuth Server URL]
VITE_OAUTH_PORTAL_URL = [Manus OAuth Portal URL]
OWNER_OPEN_ID = [您的 Open ID]
OWNER_NAME = [您的名字]
BUILT_IN_FORGE_API_URL = [Manus Forge API URL]
BUILT_IN_FORGE_API_KEY = [Manus Forge API Key]
VITE_FRONTEND_FORGE_API_KEY = [Frontend Forge API Key]
VITE_FRONTEND_FORGE_API_URL = [Frontend Forge API URL]
VITE_STRIPE_PUBLISHABLE_KEY = [暫時留空或添加 Stripe Publishable Key]
STRIPE_SECRET_KEY = [暫時留空或添加 Stripe Secret Key]
VITE_GA_ID = [Google Analytics ID，例如：G-XXXXXXXXXX]
```

**注意：** 如果您還沒有某些值，可以暫時留空，稍後再添加。

### 3.5 部署

1. 點擊 **Deploy**
2. 等待部署完成（約 2-3 分鐘）
3. 看到 **Congratulations!** 訊息表示部署成功

**預期結果：**
- 部署成功
- 獲得 Vercel URL（例如：`https://essenza-verda.vercel.app`）
- 可以訪問網站

---

## 🌐 第 4 步：配置自訂域名（15-20 分鐘）

### 4.1 在 Vercel 中添加域名

1. 進入 Vercel 項目儀表板
2. 點擊 **Settings** → **Domains**
3. 點擊 **Add Domain**
4. 輸入您的域名：`essenza-verda.com`
5. 點擊 **Add**

### 4.2 配置 DNS 記錄

Vercel 會顯示 DNS 配置信息。根據您的域名提供商，選擇以下方式之一：

#### 選項 A：CNAME 記錄（推薦）

在您的域名提供商（GoDaddy、Namecheap、阿里雲等）中：

1. 進入 **DNS Settings** 或 **Domain Management**
2. 添加以下 CNAME 記錄：

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

3. 保存更改

#### 選項 B：A 記錄

如果 CNAME 不可用，使用 A 記錄：

```
Type: A
Name: @
Value: 76.76.19.21
TTL: 3600
```

### 4.3 等待 DNS 傳播

- DNS 傳播通常需要 24 小時
- 您可以使用 [DNS Checker](https://dnschecker.org/) 檢查狀態
- Vercel 儀表板會顯示 **Valid Configuration** 當 DNS 配置正確

### 4.4 驗證域名

```bash
# 在終端中檢查 DNS 記錄
nslookup essenza-verda.com

# 或使用 dig 命令
dig essenza-verda.com
```

**預期結果：**
- DNS 記錄正確指向 Vercel
- 訪問 `https://essenza-verda.com` 時，會自動重定向到您的 Vercel 網站
- SSL 證書自動配置（Vercel 提供免費 SSL）

---

## 💳 第 5 步：配置 Stripe 支付（可選，稍後執行）

### 5.1 獲取 Stripe API 金鑰

1. 前往 [stripe.com](https://stripe.com)
2. 登入您的 Stripe 帳戶
3. 進入 **Developers** → **API Keys**
4. 複製以下金鑰：
   - **Publishable Key**（以 `pk_live_` 開頭）
   - **Secret Key**（以 `sk_live_` 開頭）

### 5.2 在 Vercel 中添加 Stripe 金鑰

1. 進入 Vercel 項目儀表板
2. 點擊 **Settings** → **Environment Variables**
3. 添加以下變數：
   - `VITE_STRIPE_PUBLISHABLE_KEY` = 您的 Publishable Key
   - `STRIPE_SECRET_KEY` = 您的 Secret Key

### 5.3 重新部署

1. 進入 Vercel 儀表板
2. 點擊 **Deployments**
3. 找到最新部署，點擊 **Redeploy**
4. 等待重新部署完成

**預期結果：**
- 支付功能自動啟用
- 結帳頁面可以處理 Stripe 支付

---

## 📧 第 6 步：配置郵件服務（可選，稍後執行）

### 6.1 選擇郵件服務

支持以下郵件服務：
- **SendGrid**（推薦）
- **Mailchimp**

### 6.2 獲取 API 金鑰

**SendGrid：**
1. 前往 [sendgrid.com](https://sendgrid.com)
2. 登入帳戶
3. 進入 **Settings** → **API Keys**
4. 創建新 API Key

**Mailchimp：**
1. 前往 [mailchimp.com](https://mailchimp.com)
2. 登入帳戶
3. 進入 **Account** → **Extras** → **API Keys**
4. 創建新 API Key

### 6.3 在 Vercel 中添加郵件 API 金鑰

1. 進入 Vercel 項目儀表板
2. 點擊 **Settings** → **Environment Variables**
3. 添加以下變數（根據您選擇的服務）：
   - `SENDGRID_API_KEY` = 您的 SendGrid API Key
   - 或 `MAILCHIMP_API_KEY` = 您的 Mailchimp API Key

### 6.4 重新部署

重複第 5.3 步中的重新部署步驟。

---

## 📊 環境變數完整清單

### 必需的環境變數

| 變數名 | 說明 | 獲取方式 |
|--------|------|--------|
| `DATABASE_URL` | 資料庫連接字符串 | Manus 提供 |
| `JWT_SECRET` | JWT 簽名密鑰 | 自己生成（任意字符串） |
| `VITE_APP_ID` | Manus OAuth App ID | Manus 儀表板 |
| `OAUTH_SERVER_URL` | Manus OAuth 伺服器 URL | Manus 提供 |
| `VITE_OAUTH_PORTAL_URL` | Manus OAuth 登入門戶 | Manus 提供 |
| `OWNER_OPEN_ID` | 您的 Manus Open ID | Manus 帳戶設定 |
| `OWNER_NAME` | 您的名字 | 自己填寫 |
| `BUILT_IN_FORGE_API_URL` | Manus Forge API URL | Manus 提供 |
| `BUILT_IN_FORGE_API_KEY` | Manus Forge API Key | Manus 提供 |
| `VITE_FRONTEND_FORGE_API_KEY` | Frontend Forge API Key | Manus 提供 |
| `VITE_FRONTEND_FORGE_API_URL` | Frontend Forge API URL | Manus 提供 |

### 可選的環境變數

| 變數名 | 說明 | 獲取方式 |
|--------|------|--------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe 公開金鑰 | Stripe 儀表板 |
| `STRIPE_SECRET_KEY` | Stripe 私密金鑰 | Stripe 儀表板 |
| `VITE_GA_ID` | Google Analytics ID | Google Analytics |
| `SENDGRID_API_KEY` | SendGrid API Key | SendGrid 帳戶 |
| `MAILCHIMP_API_KEY` | Mailchimp API Key | Mailchimp 帳戶 |

---

## ✅ 完成檢查清單

### 本地測試
- [ ] 執行 `npm install` 成功
- [ ] 執行 `npm run dev` 成功
- [ ] 訪問所有 9 個頁面都正常
- [ ] 沒有紅色錯誤

### GitHub 推送
- [ ] 創建 GitHub 儲存庫
- [ ] 執行 `git push` 成功
- [ ] 代碼在 GitHub 上可見

### Vercel 部署
- [ ] 導入 GitHub 儲存庫到 Vercel
- [ ] 配置環境變數
- [ ] 部署成功
- [ ] 訪問 `https://essenza-verda.vercel.app` 正常

### 自訂域名
- [ ] 在 Vercel 中添加域名
- [ ] 在域名提供商中配置 DNS
- [ ] 等待 DNS 傳播（24 小時）
- [ ] 訪問 `https://essenza-verda.com` 正常
- [ ] SSL 證書自動配置

### 支付功能（可選）
- [ ] 獲取 Stripe API 金鑰
- [ ] 在 Vercel 中添加 Stripe 金鑰
- [ ] 重新部署
- [ ] 測試支付流程

---

## 🆘 常見問題

### Q1：npm install 失敗

**錯誤信息：** `ERR! code ERESOLVE`

**解決方案：**
```bash
# 清除 npm 緩存
npm cache clean --force

# 刪除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安裝
npm install
```

### Q2：部署失敗，顯示「Build failed」

**解決方案：**
1. 檢查 Vercel 的構建日誌（點擊 **Deployments** → **View Logs**）
2. 查看具體的錯誤信息
3. 常見原因：
   - 環境變數未正確配置
   - 依賴版本衝突
   - TypeScript 錯誤

### Q3：頁面顯示空白

**解決方案：**
1. 清除瀏覽器緩存
2. 檢查瀏覽器控制台（F12）是否有錯誤
3. 檢查環境變數是否正確配置

### Q4：自訂域名不工作

**解決方案：**
1. 等待 DNS 傳播（可能需要 24 小時）
2. 使用 [DNS Checker](https://dnschecker.org/) 檢查 DNS 狀態
3. 確保 DNS 記錄正確指向 Vercel
4. 在 Vercel 儀表板中驗證域名配置

### Q5：Stripe 支付不工作

**解決方案：**
1. 確保 Stripe API 金鑰已正確添加到環境變數
2. 使用 Stripe 測試金鑰進行測試（以 `pk_test_` 開頭）
3. 檢查瀏覽器控制台是否有 Stripe 相關錯誤
4. 確認 Stripe 帳戶已激活

---

## 📞 需要幫助？

如果您在部署過程中遇到問題：

1. **查看錯誤信息** - 記下具體的錯誤信息
2. **查看日誌** - 在 Vercel 儀表板中查看構建日誌
3. **檢查環境變數** - 確保所有必需的環境變數都已正確配置
4. **聯絡支援** - 如果問題仍未解決，請聯絡 Vercel 或 Manus 支援

---

## 🎉 完成！

當您完成所有步驟後，您將擁有：

✅ 完整的豪華品牌官網（14 個頁面）
✅ 完整的電商功能（購物車、結帳、訂單）
✅ 管理後台（產品管理、訂單管理）
✅ 用戶帳戶系統
✅ 自訂域名（essenza-verda.com）
✅ SSL 證書（免費）
✅ 支付功能（Stripe）
✅ 郵件服務（SendGrid/Mailchimp）
✅ 分析跟蹤（Google Analytics）

**祝賀！您的 Essenza Verda 品牌官網 + 電商平台已上線！** 🚀

---

## 📚 相關資源

- [Vercel 文檔](https://vercel.com/docs)
- [npm 文檔](https://docs.npmjs.com/)
- [Stripe 文檔](https://stripe.com/docs)
- [Google Analytics 文檔](https://support.google.com/analytics)
- [SendGrid 文檔](https://sendgrid.com/docs)
- [Mailchimp 文檔](https://mailchimp.com/help)

---

**最後更新：2025 年 1 月 10 日**
**版本：npm 穩定版（無 pnpm）**
