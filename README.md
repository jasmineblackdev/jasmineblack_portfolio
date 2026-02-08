# Jasmine Black - UX & Product Designer Portfolio

A clean, professional portfolio website built with vanilla HTML, CSS, and JavaScript. No build tools, frameworks, or dependencies required.

## Features

- ✅ **No Dependencies** - Pure HTML, CSS, and JavaScript
- ✅ **Mobile Responsive** - Works perfectly on all devices
- ✅ **Fast Loading** - Optimized performance with no framework overhead
- ✅ **SEO Friendly** - Semantic HTML and proper meta tags
- ✅ **Dark Mode Support** - Automatically adapts to user's system preferences
- ✅ **Smooth Animations** - CSS-based animations for professional feel
- ✅ **Case Studies** - Dynamic case study detail pages
- ✅ **Easy to Deploy** - Upload to any web server or GitHub Pages

## File Structure

```
portfolio-vanilla/
│
├── index.html                 # Homepage
├── README.md                  # This file
│
├── assets/
│   └── images/               # All portfolio images
│       ├── hero-mockups.jpg
│       ├── formiq-mockup.jpg
│       ├── macrocore-mockup.jpg
│       ├── balanceiq-mockup.jpg
│       ├── spotter-mockup.jpg
│       ├── artifex-mockup.jpg
│       ├── megaflex-mockup.jpg
│       └── metabolic-mockup.jpg
│
├── css/
│   ├── styles.css            # Main stylesheet with design system
│   └── pages.css             # Page-specific styles
│
├── js/
│   ├── main.js               # Main JavaScript for navigation & interactions
│   └── case-studies-data.js  # Case study content data
│
└── pages/
    ├── case-studies.html     # Case studies listing page
    ├── case-study.html       # Dynamic case study detail page
    ├── other-work.html       # Other work page
    ├── about.html            # About page
    └── contact.html          # Contact page
```

## How to Use

### Local Development

1. **Open the folder** in your code editor
2. **Open `index.html`** in your web browser
3. **Edit files** as needed - changes will reflect on page refresh

### Deployment Options

#### Option 1: GitHub Pages (Recommended)
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select the branch (usually `main`) and root folder
5. Your site will be live at `https://yourusername.github.io/repo-name`

#### Option 2: Netlify
1. Drag and drop the entire folder to Netlify
2. Your site will be deployed instantly with a free URL

#### Option 3: Traditional Web Hosting
1. Upload all files via FTP to your web server
2. Ensure `index.html` is in the root directory

## Customization Guide

### Update Your Information

1. **Email & Contact Info**
   - Find and replace `jasmineblack@yourdomain.com` with your email
   - Update GitHub link: `https://github.com/jasmineblackdev`
   - Update Figma link in `pages/contact.html`

2. **Resume Download**
   - Add your resume PDF to `assets/` folder
   - Update the link in `pages/about.html`

3. **Case Studies**
   - Edit `js/case-studies-data.js` to update project details
   - Replace images in `assets/images/` with your own

4. **Colors & Branding**
   - Edit CSS custom properties in `css/styles.css` (lines 11-36)
   - Change accent color, fonts, spacing, etc.

### Adding New Case Studies

Edit `js/case-studies-data.js` and add a new object to the `caseStudies` array:

```javascript
{
  slug: 'project-name',
  title: 'Project Name',
  subtitle: 'Short description',
  role: 'Your Role',
  platform: 'Platform',
  image: 'assets/images/project-mockup.jpg',
  tagline: 'Catchy tagline',
  problem: 'Problem statement...',
  goal: 'Project goal...',
  solution: 'Your solution...',
  process: [
    'Step 1',
    'Step 2',
    'Step 3'
  ],
  decisions: [
    'Decision 1',
    'Decision 2'
  ],
  outcome: 'Project outcome...'
}
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Design System

### Typography
- **Display Font**: Space Grotesk
- **Body Font**: DM Sans

### Color Palette
- **Primary**: Dark charcoal
- **Accent**: Warm orange (#E67E50)
- **Background**: Warm cream (light mode) / Dark navy (dark mode)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Performance

- No external JavaScript frameworks
- Optimized images (use WebP if needed)
- Minimal CSS (no unused styles)
- Fast page loads (~1-2 seconds)

## Tips

1. **Optimize Images**: Use tools like TinyPNG or Squoosh to compress images
2. **Test Responsiveness**: Check on mobile, tablet, and desktop
3. **Update Meta Tags**: Edit description and title tags for SEO
4. **Add Analytics**: Insert Google Analytics code before `</body>` if needed

## Support

For questions or issues, please check:
- HTML/CSS validation at https://validator.w3.org/
- Browser console for JavaScript errors

## License

This portfolio template is free to use for your personal portfolio. Please update all content with your own information.

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript
