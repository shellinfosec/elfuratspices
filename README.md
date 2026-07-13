<div align="center">
  <img src="https://elfuratspices.com/assets/Multicolor%203x1%20Logo.png" alt="Elfurat Spices" width="400" />
</div>

<br />

# Elfurat Spices – Web Portal

Welcome to the Elfurat Spices official web portal repository. This project is a high-performance SSR (Server-Side Rendered) application built with **TanStack Start** and **Vite**.

## 🚀 cPanel Deployment Guide

This project uses **Phusion Passenger** via cPanel's Node.js Application manager to serve the application dynamically. Since the application outputs ES Modules, a CommonJS wrapper script is used to bridge the environment.

### 1. Prerequisites
- SSH access to your cPanel or a connection via the cPanel Git Version Control module.
- Node.js version 18 or 20 available in cPanel.

### 2. cPanel Git Version Control
1. In cPanel, navigate to **Git Version Control**.
2. Click **Create** and connect to your repository: `https://github.com/shellinfosec/elfuratspices`.
3. Set the repository path to something like `/home/elfuratspices/repositories/elfuratspices`.
4. The `.cpanel.yml` file is already configured. When you pull changes or push to cPanel, it will automatically sync the compiled `.output` directory and the `cpanel-start.cjs` file to `/home/elfuratspices/public_html`.

### 3. Setup Node.js Application
1. In cPanel, navigate to **Setup Node.js App**.
2. Click **Create Application**.
3. Configure the following fields:
   - **Node.js version:** `20.x` (or `18.x`)
   - **Application mode:** `Production`
   - **Application root:** `/home/elfuratspices/public_html`
   - **Application URL:** `elfuratspices.com`
   - **Application startup file:** `cpanel-start.cjs`
4. Click **Create** / **Save**.

### 4. Environment Variables
If the application needs environment variables in the future, add them directly into the **Setup Node.js App** interface under the "Environment variables" section. 

> ⚠️ **CRITICAL:** Never commit `.env` files to this repository. They are ignored by default in `.gitignore`.

### 5. Restarting the Server
Whenever you deploy a new version via Git, you must click the **Restart** button in the cPanel "Setup Node.js App" interface to apply the changes.

---

## 🛠️ Local Development

To run the project locally on your machine:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

*Built specifically for Elfurat Spices.*
