# JTIKS Website - Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### 3. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
jtiks-web/
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/           # Dynamic content (services, gallery, masterclasses)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
├── public/             # Static assets (images, favicon)
└── astro.config.mjs    # Astro configuration
```

## 🎨 Brand Colors

- **Nude Beige**: `#E8DCD2`
- **Blush Pink**: `#E6B7C5`
- **Gold**: `#C8A96A`
- **Dark Brown**: `#3B2F2F`

## 📝 Before Deployment

Update these placeholders:

1. **Google Appointment Schedule** (`src/pages/booking.astro`)
2. **Paystack Payment Links** (`src/data/masterclasses.ts`, `src/pages/booking.astro`)
3. **Formspree Form ID** (`src/pages/contact.astro`)
4. **Site URL** (`astro.config.mjs`)
5. **Contact Information** (`src/pages/contact.astro`)
6. **Gallery Images** (add to `public/images/gallery/`)
7. **Social Media Links** (`src/components/Footer.astro`)

## 🖼️ Adding Gallery Images

1. Add your images to `public/images/gallery/`
2. Name them according to the pattern in `src/data/gallery.ts`
3. Or update the image paths in `src/data/gallery.ts` to match your file names

## 📱 Features

- ✅ All 7 pages (Home, About, Services, Gallery, Masterclasses, Booking, Contact)
- ✅ Dynamic content rendering from data files
- ✅ Framer Motion animations
- ✅ Mobile-responsive design
- ✅ SEO-optimized metadata
- ✅ Tailwind CSS with custom brand colors
- ✅ Reusable components

## 🛠️ Tech Stack

- **Astro** - Framework (SSR mode)
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React** - For interactive components
- **TypeScript** - Type safety

## 📚 Documentation

See `DEPLOYMENT.md` for detailed deployment instructions.

