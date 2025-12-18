# Deployment Guide for JTIKS Website

## Prerequisites

1. Node.js 18+ installed
2. Hostinger shared hosting account
3. Access to cPanel or FTP

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment to Hostinger

### Option 1: Using Node.js (Recommended if available)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Upload the `dist/` folder contents to your hosting root directory
   - Ensure Node.js is enabled in your Hostinger cPanel

3. **Configure server:**
   - Set up a Node.js application in cPanel
   - Point it to your `dist/` folder
   - Set the start command (if needed)

### Option 2: Static Export (If SSR is not needed)

1. **Update astro.config.mjs:**
   ```js
   export default defineConfig({
     output: 'static', // Change from 'server' to 'static'
     // ... rest of config
   });
   ```

2. **Build and upload:**
   ```bash
   npm run build
   ```
   - Upload contents of `dist/` to your hosting root

### Option 3: Using FTP

1. Build the project locally
2. Upload `dist/` folder contents via FTP to your hosting root
3. Ensure `.htaccess` is configured (if needed)

## Configuration Updates Needed

Before deploying, update these placeholders:

1. **Google Appointment Schedule:**
   - File: `src/pages/booking.astro`
   - Replace `YOUR_SCHEDULE_ID` with your actual Google Appointment Schedule ID

2. **Paystack Payment Links:**
   - File: `src/data/masterclasses.ts`
   - Replace placeholder Paystack links with your actual payment links
   - File: `src/pages/booking.astro`
   - Update deposit payment links

3. **Formspree Form ID:**
   - File: `src/pages/contact.astro`
   - Replace `YOUR_FORMSPREE_FORM_ID` with your actual Formspree form ID

4. **Site URL:**
   - File: `astro.config.mjs`
   - Update `site: 'https://jtiks.com'` with your actual domain

5. **Contact Information:**
   - File: `src/pages/contact.astro`
   - Update email, phone, and WhatsApp numbers

6. **Gallery Images:**
   - Add your actual gallery images to `public/images/gallery/`
   - Update image paths in `src/data/gallery.ts` if needed

7. **Social Media Links:**
   - File: `src/components/Footer.astro`
   - Update Instagram and Facebook links

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify booking calendar loads
- [ ] Test contact form submission
- [ ] Check payment links work
- [ ] Verify mobile responsiveness
- [ ] Test gallery images load
- [ ] Check SEO metadata
- [ ] Verify all internal links work

## Troubleshooting

### Images not loading
- Ensure images are in `public/images/gallery/`
- Check image paths in `src/data/gallery.ts`

### Animations not working
- Ensure Framer Motion is properly installed
- Check browser console for errors

### Build errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)

