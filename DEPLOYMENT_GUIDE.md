# 🚀 GitHub Pages Deployment Guide

## ⚠️ Problem: HTML Not Showing After Deploy

Agar tumhara site deploy ho gaya hai lekin blank page ya 404 error dikha raha hai, to ye steps follow karo:

---

## ✅ Solution Steps

### 1️⃣ **Update `vite.config.js`**

File already created hai, bas **repository name update karo**:

```javascript
base: '/YOUR-REPO-NAME/',  // ⚠️ Replace with actual repo name
```

**Example:**
- Agar repo name hai `my-portfolio`, to: `base: '/my-portfolio/',`
- Agar repo name hai `bnb-landing`, to: `base: '/bnb-landing/',`

---

### 2️⃣ **GitHub Repository Settings**

1. **GitHub.com** par apni repository me jao
2. **Settings** → **Pages** section me jao
3. **Source** me select karo: **GitHub Actions**
4. Save karo

---

### 3️⃣ **Push Updated Files to GitHub**

```bash
# Terminal me ye commands run karo:
cd "C:\Users\USER\OneDrive\Desktop\first landing page"

git add .
git commit -m "Add GitHub Pages deployment config"
git push origin main
```

---

### 4️⃣ **Check Deployment Status**

1. GitHub repository me **Actions** tab par jao
2. Latest workflow run check karo
3. Green checkmark dikhe to deployment successful hai
4. Live link milega: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

## 🔧 Alternative: Manual Build & Deploy

Agar GitHub Actions use nahi karna chahte:

### Step 1: Build Locally
```bash
npm run build
```

### Step 2: Deploy `dist` folder
1. GitHub Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: Select `main` and folder `/dist`
4. Save

### Step 3: Push `dist` folder
⚠️ **Important**: `.gitignore` se `dist` remove karo temporarily:

```bash
# .gitignore me se 'dist' line comment karo ya delete karo
git add dist
git commit -m "Add build files"
git push origin main
```

---

## 🐛 Common Issues & Fixes

### Issue 1: Blank Page
**Cause**: Wrong base path in `vite.config.js`
**Fix**: Update `base: '/YOUR-REPO-NAME/'` with correct repo name

### Issue 2: 404 Error
**Cause**: Files not in correct location
**Fix**: Ensure GitHub Pages source is set to `/dist` folder or use GitHub Actions

### Issue 3: CSS/JS Not Loading
**Cause**: Asset paths incorrect
**Fix**: Check browser console (F12) for errors, verify `base` path in config

### Issue 4: Images Not Showing
**Cause**: Image paths in HTML might be wrong
**Fix**: Use relative paths like `/animation/image.jpg` (not `./animation/`)

---

## ✅ Verification Checklist

- [ ] `vite.config.js` created with correct repo name
- [ ] `.github/workflows/deploy.yml` created
- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] All files committed and pushed
- [ ] GitHub Actions workflow completed successfully
- [ ] Live site accessible at GitHub Pages URL

---

## 📞 Still Not Working?

**Share these details:**
1. Repository URL
2. GitHub Pages settings screenshot
3. Browser console errors (F12 → Console tab)
4. GitHub Actions workflow status

---

**Last Updated**: February 10, 2026
