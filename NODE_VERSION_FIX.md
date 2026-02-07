# Node.js Version Compatibility Fix

## Issue
The app was using Vite 7.x which requires Node.js 20.19+ or 22.12+, but you have Node.js 18.18.0 installed.

## Solution
I've downgraded the following packages to versions compatible with Node.js 18:

### Changes Made:
1. **Vite**: `^7.1.7` → `^5.4.11` (compatible with Node 18+)
2. **@vitejs/plugin-react**: `^5.0.4` → `^4.3.1` (compatible with Vite 5)
3. **Tailwind CSS**: `^4.1.14` → `^3.4.1` (compatible with Node 18)
4. **CSS**: Updated from Tailwind 4 syntax to Tailwind 3 syntax
5. **Config Files**: Added `tailwind.config.js` and `postcss.config.js` for Tailwind 3

## What This Means
- ✅ The app will now run on Node.js 18.18.0
- ✅ All styling and functionality remains the same
- ✅ Visual appearance is identical
- ⚠️ Some npm warnings about other packages are normal and won't affect functionality

## To Run:
```bash
cd portfolio-react
npm install
npm run dev
```

## Optional: Upgrade Node.js (Future)
If you want to use the latest versions, you can upgrade Node.js to 20.19+ or 22.12+:
- Download from: https://nodejs.org/
- Or use nvm: `nvm install 20` or `nvm install 22`

But the current setup works perfectly fine with Node 18!
