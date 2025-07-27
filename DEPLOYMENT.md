# Deployment Guide

This guide covers how to deploy the Xray_OS website to various hosting platforms.

## Pre-Deployment Checklist

- [ ] Build CSS: `npm run build`
- [ ] Test locally: Open `index.html` in browser
- [ ] Verify responsive design on mobile/tablet
- [ ] Check all links work correctly
- [ ] Validate HTML and CSS
- [ ] Optimize images (if any added)

## Static Hosting Options

### GitHub Pages

1. **Create Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/xray-os-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to Pages section
   - Select source: Deploy from branch
   - Choose `main` branch, `/ (root)` folder
   - Save settings

3. **Custom Domain** (optional)
   - Add `CNAME` file with your domain
   - Configure DNS settings

### Netlify

1. **Drag and Drop**
   - Build project: `npm run build`
   - Zip project files
   - Drag to Netlify deploy area

2. **Git Integration**
   - Connect GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `/`

3. **Custom Domain**
   - Add domain in Site settings
   - Configure DNS records

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   # Follow prompts
   ```

3. **Git Integration**
   - Import project from GitHub
   - Auto-deploy on push

### Traditional Web Hosting

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   Upload these files via FTP/cPanel:
   - `index.html`
   - `dist/output.css`
   - `script.js`
   - Any additional assets

## Build Process

### Manual Build
```bash
# Install dependencies
npm install

# Build CSS
npm run build

# Files ready for deployment:
# - index.html
# - dist/output.css
# - script.js
```

### Automated Build (CI/CD)

#### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Website

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build CSS
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## Domain Configuration

### DNS Settings
For custom domain (example.com):
```
Type    Name    Value
A       @       192.30.252.153
A       @       192.30.252.154
CNAME   www     username.github.io
```

### SSL Certificate
Most hosting providers offer free SSL:
- GitHub Pages: Automatic with custom domains
- Netlify: Automatic Let's Encrypt
- Vercel: Automatic SSL

## Performance Optimization

### Before Deployment
```bash
# Minify CSS (optional)
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify

# Compress images (if any)
# Use tools like imagemin or online compressors
```

### CDN Configuration
For better performance, consider:
- Cloudflare (free tier available)
- AWS CloudFront
- Google Cloud CDN

## Monitoring

### Analytics
Add to `<head>` section of `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Uptime Monitoring
- UptimeRobot (free)
- Pingdom
- StatusCake

## Troubleshooting

### Common Issues

**CSS not loading**
- Check file paths in HTML
- Ensure `dist/output.css` exists
- Verify build process completed

**Fonts not loading**
- Check Google Fonts URL
- Verify internet connection
- Consider self-hosting fonts

**JavaScript errors**
- Check browser console
- Verify script.js path
- Test in different browsers

**Mobile display issues**
- Test responsive design
- Check viewport meta tag
- Verify Tailwind responsive classes

### Debug Commands
```bash
# Check if CSS built correctly
ls -la dist/

# Validate HTML
npx html-validate index.html

# Check for broken links
npx broken-link-checker http://localhost:8000
```

## Maintenance

### Regular Updates
- Update dependencies: `npm update`
- Rebuild CSS: `npm run build`
- Test functionality after updates
- Monitor site performance

### Content Updates
1. Edit `index.html`
2. Rebuild if needed: `npm run build`
3. Deploy changes
4. Test live site

---

*Choose the deployment method that best fits your needs and technical expertise.*