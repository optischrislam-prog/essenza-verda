# 🔐 環境變數完整參考

## 環境變數位置

### 本地開發
```
essenza_verda_upgrade/.env.local（如果需要）
```

### Vercel 部署
```
Vercel 儀表板 → Settings → Environment Variables
```

---

## 必需的環境變數

### 1. 資料庫配置

**變數名：** `DATABASE_URL`
- **說明：** 資料庫連接字符串
- **格式：** `mysql://user:password@host:port/database`
- **獲取方式：** Manus 儀表板 → Database
- **範例：** `mysql://admin:pass123@db.example.com:3306/essenza_verda`

### 2. JWT 密鑰

**變數名：** `JWT_SECRET`
- **說明：** 用於簽署 JWT 令牌的密鑰
- **格式：** 任意字符串（建議 32+ 字符）
- **獲取方式：** 自己生成
- **範例：** `your-super-secret-key-12345678901234567890`
- **生成方法：**
  ```bash
  # 在終端中執行
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

### 3. OAuth 配置

**變數名：** `VITE_APP_ID`
- **說明：** Manus OAuth 應用 ID
- **獲取方式：** Manus 儀表板 → OAuth Settings
- **範例：** `app_1234567890abcdef`

**變數名：** `OAUTH_SERVER_URL`
- **說明：** Manus OAuth 伺服器 URL
- **獲取方式：** Manus 提供
- **範例：** `https://api.manus.im`

**變數名：** `VITE_OAUTH_PORTAL_URL`
- **說明：** Manus OAuth 登入門戶 URL
- **獲取方式：** Manus 提供
- **範例：** `https://oauth.manus.im`

### 4. 用戶信息

**變數名：** `OWNER_OPEN_ID`
- **說明：** 您的 Manus Open ID
- **獲取方式：** Manus 帳戶設定
- **範例：** `user_1234567890abcdef`

**變數名：** `OWNER_NAME`
- **說明：** 您的名字
- **獲取方式：** 自己填寫
- **範例：** `John Doe`

### 5. Forge API 配置

**變數名：** `BUILT_IN_FORGE_API_URL`
- **說明：** Manus Forge API URL（用於 LLM、存儲、通知等）
- **獲取方式：** Manus 提供
- **範例：** `https://forge.manus.im`

**變數名：** `BUILT_IN_FORGE_API_KEY`
- **說明：** Manus Forge API 密鑰（伺服器端使用）
- **獲取方式：** Manus 儀表板
- **範例：** `key_1234567890abcdef`
- **重要：** 這是私密密鑰，不要在前端代碼中使用

**變數名：** `VITE_FRONTEND_FORGE_API_KEY`
- **說明：** Manus Forge API 密鑰（前端使用）
- **獲取方式：** Manus 儀表板
- **範例：** `key_frontend_1234567890abcdef`
- **注意：** 以 `VITE_` 開頭表示會暴露給前端

**變數名：** `VITE_FRONTEND_FORGE_API_URL`
- **說明：** Manus Forge API URL（前端使用）
- **獲取方式：** Manus 提供
- **範例：** `https://forge.manus.im`

---

## 可選的環境變數

### 1. Stripe 支付配置

**變數名：** `VITE_STRIPE_PUBLISHABLE_KEY`
- **說明：** Stripe 公開金鑰（可以暴露給前端）
- **獲取方式：** Stripe 儀表板 → Developers → API Keys
- **格式：** 以 `pk_live_` 開頭
- **範例：** `pk_live_1234567890abcdef`
- **狀態：** 可選（支付功能需要）

**變數名：** `STRIPE_SECRET_KEY`
- **說明：** Stripe 私密金鑰（只在伺服器端使用）
- **獲取方式：** Stripe 儀表板 → Developers → API Keys
- **格式：** 以 `sk_live_` 開頭
- **範例：** `sk_live_1234567890abcdef`
- **重要：** 絕不要在前端代碼中使用
- **狀態：** 可選（支付功能需要）

### 2. Google Analytics

**變數名：** `VITE_GA_ID`
- **說明：** Google Analytics 測量 ID
- **獲取方式：** Google Analytics → Admin → Property → Data Streams
- **格式：** 以 `G-` 開頭
- **範例：** `G-XXXXXXXXXX`
- **狀態：** 可選（分析跟蹤）

### 3. 郵件服務

**變數名：** `SENDGRID_API_KEY`
- **說明：** SendGrid API 密鑰
- **獲取方式：** SendGrid → Settings → API Keys
- **狀態：** 可選（郵件通知功能）
- **注意：** 不要在代碼中硬編碼，使用環境變數

**或**

**變數名：** `MAILCHIMP_API_KEY`
- **說明：** Mailchimp API 密鑰
- **獲取方式：** Mailchimp → Account → Extras → API Keys
- **狀態：** 可選（新聞通訊功能）
- **注意：** 不要在代碼中硬編碼，使用環境變數

---

## 在 Vercel 中添加環境變數

### 方法 1：通過 Vercel 儀表板

1. 進入 [vercel.com](https://vercel.com)
2. 選擇您的項目
3. 點擊 **Settings** → **Environment Variables**
4. 點擊 **Add New**
5. 填寫變數名和值
6. 選擇應用範圍（Production、Preview、Development）
7. 點擊 **Save**

### 方法 2：通過 Vercel CLI

```bash
# 安裝 Vercel CLI
npm install -g vercel

# 登入 Vercel
vercel login

# 添加環境變數
vercel env add DATABASE_URL
# 然後輸入值

# 部署
vercel deploy
```

### 方法 3：通過 vercel.json

在項目根目錄的 `vercel.json` 中：

```json
{
  "env": {
    "DATABASE_URL": "@database_url",
    "JWT_SECRET": "@jwt_secret",
    "VITE_APP_ID": "@vite_app_id"
  }
}
```

然後在 Vercel 儀表板中設置這些值。

---

## 環境變數檢查清單

### 部署前必檢查

- [ ] `DATABASE_URL` - 已設置
- [ ] `JWT_SECRET` - 已生成
- [ ] `VITE_APP_ID` - 已設置
- [ ] `OAUTH_SERVER_URL` - 已設置
- [ ] `VITE_OAUTH_PORTAL_URL` - 已設置
- [ ] `OWNER_OPEN_ID` - 已設置
- [ ] `OWNER_NAME` - 已設置
- [ ] `BUILT_IN_FORGE_API_URL` - 已設置
- [ ] `BUILT_IN_FORGE_API_KEY` - 已設置
- [ ] `VITE_FRONTEND_FORGE_API_KEY` - 已設置
- [ ] `VITE_FRONTEND_FORGE_API_URL` - 已設置

### 支付功能（可選）

- [ ] `VITE_STRIPE_PUBLISHABLE_KEY` - 已設置或留空
- [ ] `STRIPE_SECRET_KEY` - 已設置或留空

### 分析和郵件（可選）

- [ ] `VITE_GA_ID` - 已設置或留空
- [ ] `SENDGRID_API_KEY` 或 `MAILCHIMP_API_KEY` - 已設置或留空

---

## 常見問題

### Q：環境變數在本地工作，但在 Vercel 上不工作

**解決方案：**
1. 確保在 Vercel 儀表板中正確設置了環境變數
2. 重新部署（Vercel 不會自動應用環境變數更改）
3. 檢查環境變數名稱是否完全相同（區分大小寫）

### Q：我不小心洩露了密鑰怎麼辦？

**解決方案：**
1. 立即在相應的服務中重新生成密鑰
2. 在 Vercel 中更新環境變數
3. 重新部署
4. 監控帳戶是否有異常活動

### Q：如何在本地測試環境變數？

**解決方案：**
1. 在項目根目錄創建 `.env.local` 文件
2. 添加環境變數：
   ```
   DATABASE_URL=mysql://...
   JWT_SECRET=your-secret-key
   ```
3. 運行 `npm run dev`
4. 環境變數會自動加載

### Q：環境變數何時生效？

**解決方案：**
- **本地開發：** 重新啟動開發伺服器
- **Vercel：** 重新部署後生效

---

## 安全最佳實踐

1. **絕不提交 `.env` 文件到 Git**
   - 確保 `.gitignore` 包含 `.env*`

2. **使用強密鑰**
   - JWT_SECRET 應至少 32 字符
   - 使用隨機生成的密鑰

3. **分離開發和生產密鑰**
   - 使用 Stripe 測試密鑰進行開發
   - 使用 Stripe 生產密鑰用於生產

4. **定期輪換密鑰**
   - 每季度更新一次敏感密鑰
   - 如果懷疑洩露，立即更新

5. **限制密鑰權限**
   - 在服務中設置最小必要權限
   - 例如，Stripe 密鑰應只能執行必要的操作

---

## 相關資源

- [Vercel 環境變數文檔](https://vercel.com/docs/concepts/projects/environment-variables)
- [Manus 文檔](https://docs.manus.im)
- [Stripe API 文檔](https://stripe.com/docs/api)
- [Google Analytics 文檔](https://support.google.com/analytics)
- [SendGrid 文檔](https://sendgrid.com/docs)
- [Mailchimp 文檔](https://mailchimp.com/help)

---

**最後更新：2025 年 1 月 10 日**
