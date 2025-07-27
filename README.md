# Xray_OS Website

Professional website for the Xray_OS Linux distribution built with modern web technologies.

## Tech Stack

- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Interactive functionality
- **Node.js** - Development tooling

## Project Structure

```
xray-technologies-page/
├── index.html              # Main website page
├── src/
│   └── input.css          # Tailwind CSS input file
├── dist/
│   └── output.css         # Compiled CSS output
├── script.js              # JavaScript functionality
├── tailwind.config.js     # Tailwind configuration
├── package.json           # Node.js dependencies
└── docs/                  # Project documentation
```

## Features

- **Responsive Design** - Works on all devices
- **Dark Theme** - Professional dark color scheme
- **Smooth Animations** - CSS transitions and keyframes
- **Modern UI** - Glass-morphism effects and gradients
- **Fast Loading** - Optimized assets and minimal dependencies
- **Accessibility** - Semantic HTML and proper contrast

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd xray-technologies-page

# Install dependencies
npm install

# Build CSS
npm run build

# Start development server
npm run dev
```

### Available Scripts
- `npm run build` - Compile Tailwind CSS
- `npm run watch` - Watch for changes and rebuild CSS
- `npm run dev` - Start local development server

## Customization

### Colors
The website uses a cyan/blue color scheme defined in Tailwind classes:
- Primary: `cyan-400` to `blue-500`
- Background: `black` and `gray-900`
- Text: `white` and `gray-300`

### Fonts
- Primary font: Inter (Google Fonts)
- Monospace: System default for terminal display

### Animations
Custom keyframes defined in `tailwind.config.js`:
- `slideInLeft` - Left slide entrance
- `slideInRight` - Right slide entrance  
- `float` - Floating terminal animation

## Content Sections

### Navigation
- Fixed top navigation with blur effect
- Smooth scroll to sections
- Hover animations on links

### Hero Section
- Large title with gradient text
- Call-to-action buttons
- Animated terminal mockup

### Features Section
- Grid layout with feature cards
- Hover effects and animations
- Icon-based feature highlights

### Download Section
- Prominent download card
- Version information
- Release details

### Footer
- Links and contact information
- Copyright notice
- Multi-column layout

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: < 100KB total

## Deployment

### Static Hosting
The website is static and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

### Build for Production
```bash
# Build optimized CSS
npm run build

# Upload files to hosting service
# - index.html
# - dist/output.css
# - script.js (if used)
```

## Maintenance

### Updating Content
- Edit `index.html` for content changes
- Modify Tailwind classes for styling updates
- Update `package.json` for dependency changes

### Adding Features
1. Add HTML structure
2. Apply Tailwind utility classes
3. Add JavaScript if needed
4. Test responsiveness
5. Build and deploy

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test on multiple devices
5. Submit pull request

## License

This website code is open source. Content and branding belong to Xray_OS project.

---

*Built with ❤️ for the Xray_OS community*