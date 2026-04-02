# cPanel Deployment Guide for Addword Agency

Since this is a React application built with Vite, follow these steps to deploy it to a Hostinger or cPanel shared hosting environment.

## 1. Build the Project
Run the following command in your local terminal:
```bash
npm run build
```
This will generate a `dist` folder containing all the static assets (HTML, CSS, JS, images).

## 2. Upload to cPanel
1. Log in to your cPanel or Hostinger hPanel.
2. Open the **File Manager**.
3. Navigate to the `public_html` directory (or your subdomain folder).
4. Upload all files and folders from the `dist` directory into `public_html`.

## 3. Configure .htaccess (Crucial for Routing)
Since this is a Single Page Application (SPA), you need to redirect all requests to `index.html` so that React Router can handle them.

Create a file named `.htaccess` in your `public_html` folder with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 4. Admin Panel & Database
This demo uses a mock admin panel. For a production-ready dynamic system on cPanel without Node.js:
1. **Firebase (Recommended):** Use the Firebase integration provided in the code. It works perfectly on static hosting.
2. **PHP Backend:** If you prefer a MySQL database, you would need to rewrite the admin API endpoints in PHP.

## 5. SSL Configuration
Ensure that **Force HTTPS** is enabled in your cPanel/Hostinger settings to ensure the glassmorphism and modern features load securely.
