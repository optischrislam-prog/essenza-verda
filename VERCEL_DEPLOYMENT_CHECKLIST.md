# Vercel 部署檢查清單 - 簡化版

**您的 GitHub 儲存庫已完全準備好！✅**

GitHub 連結：https://github.com/optischrislam-prog/essenza-verda

---

## 📋 需要您在 Vercel 中完成的操作

### ✅ 已完成（無需操作）
- ✅ 代碼已推送到 GitHub
- ✅ Vercel 已自動連接 GitHub 儲存庫
- ✅ 已創建 3 個部署（但因缺少環境變數而失敗）

### ⚠️ 需要您完成的操作

---

## 第 1 步：進入 Vercel Settings

1. 打開瀏覽器，進入：https://vercel.com/dashboard
2. 找到項目 **essenza-verda**
3. 點擊頂部菜單中的 **Settings** 標籤

---

## 第 2 步：添加環境變數

在 Settings 中，找到左側菜單的 **Environment Variables**，點擊進入。

### 需要添加的 11 個環境變數

**請逐個添加以下環境變數。對於每個變數：**
1. 點擊 **Add New**
2. 在 **Name** 欄填寫變數名
3. 在 **Value** 欄填寫對應的值
4. 在 **Environments** 中勾選：**Production**、**Preview**、**Development**（全選）
5. 點擊 **Save**

---

### 環境變數列表

#### 第 1 個：DATABASE_URL
- **Name:** `DATABASE_URL`
- **Value:** `mysql://user:password@host:port/database`
  - 說明：這是您的資料庫連接字符串，從 Manus 儀表板獲取
  - 格式例子：`mysql://admin:mypassword@db.example.com:3306/essenza_verda`

#### 第 2 個：JWT_SECRET
- **Name:** `JWT_SECRET`
- **Value:** 任意 32 個以上字符的密鑰
  - 說明：用於簽署會話令牌
  - 格式例子：`your-super-secret-key-12345678901234567890`

#### 第 3 個：VITE_APP_ID
- **Name:** `VITE_APP_ID`
- **Value:** 您的 Manus OAuth App ID
  - 說明：從 Manus 儀表板 → OAuth Settings 獲取
  - 格式例子：`app_1234567890abcdef`

#### 第 4 個：OAUTH_SERVER_URL
- **Name:** `OAUTH_SERVER_URL`
- **Value:** `https://api.manus.im`
  - 說明：固定值，無需修改

#### 第 5 個：VITE_OAUTH_PORTAL_URL
- **Name:** `VITE_OAUTH_PORTAL_URL`
- **Value:** 您的 Manus OAuth 登入門戶 URL
  - 說明：從 Manus 提供的文檔獲取
  - 格式例子：`https://oauth.manus.im`

#### 第 6 個：OWNER_OPEN_ID
- **Name:** `OWNER_OPEN_ID`
- **Value:** 您的 Manus Open ID
  - 說明：從 Manus 帳戶設定獲取
  - 格式例子：`user_1234567890abcdef`

#### 第 7 個：OWNER_NAME
- **Name:** `OWNER_NAME`
- **Value:** 您的名字
  - 說明：任意名字
  - 格式例子：`John Doe` 或 `你的名字`

#### 第 8 個：BUILT_IN_FORGE_API_URL
- **Name:** `BUILT_IN_FORGE_API_URL`
- **Value:** Manus Forge API URL
  - 說明：從 Manus 儀表板獲取
  - 格式例子：`https://forge.manus.im`

#### 第 9 個：BUILT_IN_FORGE_API_KEY
- **Name:** `BUILT_IN_FORGE_API_KEY`
- **Value:** Manus Forge API 密鑰（伺服器端）
  - 說明：從 Manus 儀表板獲取，這是私密密鑰
  - 格式例子：`key_server_1234567890abcdef`

#### 第 10 個：VITE_FRONTEND_FORGE_API_KEY
- **Name:** `VITE_FRONTEND_FORGE_API_KEY`
- **Value:** Manus Forge API 密鑰（前端）
  - 說明：從 Manus 儀表板獲取，這個可以暴露給前端
  - 格式例子：`key_frontend_1234567890abcdef`

#### 第 11 個：VITE_FRONTEND_FORGE_API_URL
- **Name:** `VITE_FRONTEND_FORGE_API_URL`
- **Value:** Manus Forge API URL（前端）
  - 說明：通常與 BUILT_IN_FORGE_API_URL 相同
  - 格式例子：`https://forge.manus.im`

---

## 第 3 步：重新部署

添加完所有 11 個環境變數後：

1. 進入 **Deployments** 標籤
2. 找到最新的部署（顯示紅色 ❌ Error 的那個）
3. 點擊右側的 **...** 菜單（三個點）
4. 選擇 **Redeploy**
5. 點擊 **Redeploy** 按鈕確認

---

## 第 4 步：等待部署完成

- 部署通常需要 2-3 分鐘
- 您會看到部署進度
- 完成後，如果顯示 ✅ 綠色勾選，表示成功！

---

## 部署成功後

您的網站將在以下地址上線：
```
https://essenza-verda.vercel.app
```

---

## 🆘 需要幫助？

### 我在哪裡找到這些環境變數？

**所有環境變數都來自 Manus 儀表板：**

1. 進入您的 Manus 項目
2. 進入 **Settings** 或 **Configuration**
3. 查找以下部分：
   - **Database** → 複製 DATABASE_URL
   - **OAuth** → 複製 App ID 和 Portal URL
   - **API Keys** → 複製 Forge API 密鑰和 URL
   - **Account** → 複製 Open ID 和名字

### 如果我找不到某個環境變數？

**跳過它，使用以下默認值：**
- 如果找不到 OAUTH_SERVER_URL，使用 `https://api.manus.im`
- 如果找不到 VITE_FRONTEND_FORGE_API_URL，使用與 BUILT_IN_FORGE_API_URL 相同的值

### 部署仍然失敗？

檢查以下事項：
1. 所有環境變數都已添加？
2. 環境變數的值是否正確（無多餘空格）？
3. 是否選擇了所有三個環境（Production、Preview、Development）？

---

## 📞 聯絡支持

如果您需要幫助，請：
1. 聯絡 Manus 支持團隊
2. 或找一位熟悉 Vercel 和環境變數的開發者幫助您

---

**祝您部署順利！** 🚀
