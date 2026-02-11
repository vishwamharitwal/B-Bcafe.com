# 🔗 Connect to Existing GitHub Repository

## Quick Commands (Copy-Paste Karo)

### Step 1: Remote Add Karo
```bash
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/B-BCafe.com.git
```

### Step 2: Push Karo
```bash
git push -u origin main
```

### If Error: "remote origin already exists"
```bash
# Pehle purana remote remove karo
git remote remove origin

# Phir naya add karo
git remote add origin https://github.com/YOUR-USERNAME/B-BCafe.com.git

# Push karo
git push -u origin main
```

### If Error: "Updates were rejected"
```bash
# Force push (⚠️ existing files replace ho jayengi)
git push -u origin main --force
```

---

## ⚠️ Important Notes:

1. **Repository name** GitHub par exactly `B-BCafe.com` hona chahiye
2. Agar different name hai, to `vite.config.js` me bhi update karo:
   ```javascript
   base: '/YOUR-ACTUAL-REPO-NAME/',
   ```

3. **Force push** sirf tab karo jab existing files important nahi hain

---

**Ready? Terminal me commands run karo!** 🚀
