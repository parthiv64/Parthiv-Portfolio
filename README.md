# Parthiv Kshirsagar - Full-Stack Developer Portfolio

## 📌 Overview
A modern, interactive portfolio website showcasing Parthiv Kshirsagar's skills, projects, and experience as a Full-Stack Developer. Features a 3D animated cube with Three.js, live GitHub repository integration, and direct WhatsApp communication.

## 🚀 Live Demo
[View Portfolio](https://your-portfolio-link.com) *(Replace with actual deployment link)*

## ✨ Features

### 🔷 Interactive 3D Cube
- **Technology**: Three.js
- **Dynamic Texturing**: Cube faces display "Parthiv Kshirsagar" with gradient styling
- **Real-time Animation**: Smooth rotation with lighting effects
- **Responsive Design**: Adapts to container size changes

### 🔷 GitHub Integration
- **Live Repository Fetching**: Automatically displays public repositories from GitHub
- **Real-time Data**: Shows stars, languages, and descriptions
- **Error Handling**: Graceful fallback for API failures

### 🔷 Contact System
- **Direct WhatsApp Integration**: Form submissions open WhatsApp chats
- **No Backend Required**: Client-side only contact handling
- **Floating WhatsApp Button**: Always-available chat access

### 🔷 Responsive Design
- **Mobile-First Approach**: Optimized for all devices
- **Flexible Grid Layouts**: Adapts content arrangement
- **Touch-Friendly Interface**: Easy navigation on mobile

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript**: ES6+, DOM manipulation, async/await
- **Three.js**: 3D graphics and animations

### APIs & Integration
- **GitHub API**: Repository data fetching
- **WhatsApp API**: Direct messaging integration

### Development Tools
- **VS Code**: Primary editor
- **Git**: Version control
- **Render**: Deployment platform

## 📁 Project Structure
```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # All JavaScript functionality
├── logo.png.jpeg       # Brand logo
├── logo1.png.jpeg      # Profile image
└── README.md           # This file
```

## 🔧 Key Functionalities

### 1. 3D Cube Component
- Self-contained IIFE module
- Dynamic canvas texture generation
- Responsive resize handling
- Smooth animation loop

### 2. GitHub Repo Loader
- Fetches up to 100 repositories
- Displays languages, stars, descriptions
- Automatic error state management
- Live sorting by update date

### 3. Contact Form
- Client-side validation
- WhatsApp message formatting
- Pre-filled introduction text
- Optional role/company field

### 4. Responsive Features
- Sticky navigation with blur effect
- Mobile hamburger menu (on smaller screens)
- Adaptive grid layouts
- Touch-optimized buttons

## 🎨 Design Highlights

### Color Scheme
- **Primary**: `#6366f1` (Indigo)
- **Accent**: `#22c55e` (Green)
- **Background**: `#020617` (Dark Navy)
- **Text**: `#e5e7eb` (Light Gray)

### Typography
- System UI font stack
- Responsive font sizes
- Gradient text effects
- Clear visual hierarchy

### Animations
- Floating profile image
- Hover effects on interactive elements
- Smooth transitions
- 3D cube rotation

## 📱 Responsive Breakpoints

### Desktop (≥900px)
- 3-column project grid
- Side-by-side hero layout
- Full navigation visible

### Tablet (720px-900px)
- 2-column project grid
- Stacked hero sections
- Simplified navigation

### Mobile (<720px)
- Single column layouts
- Hidden navigation menu
- Touch-optimized buttons
- Simplified grids

## 🚀 Deployment

### Local Development
1. Clone repository
2. Open `index.html` in browser
3. No build process required

### Production Deployment
1. Upload files to hosting service
2. Ensure CORS support for GitHub API
3. Verify image paths
4. Test WhatsApp links

## 🔗 External Links

### APIs Used
- **Three.js CDN**: `https://unpkg.com/three@0.160.0/build/three.min.js`
- **GitHub API**: `https://api.github.com/users/parthiv64/repos`

### Social Links
- **GitHub**: `https://github.com/parthiv64`
- **LinkedIn**: `https://in.linkedin.com/in/parthiv-kshirsagar-a8287a264`
- **Live Project**: `https://rid-bharat-main-1.onrender.com`

## 📝 Customization Guide

### Personal Information
1. Update `GITHUB_USERNAME` in script.js
2. Change WhatsApp number in all links
3. Modify text content in index.html
4. Replace images in HTML

### Styling
1. Edit CSS variables in `:root`
2. Modify color scheme in CSS
3. Adjust spacing and typography
4. Update animation durations

### 3D Cube
1. Modify `createTextTexture()` function
2. Change text, colors, and styling
3. Adjust cube rotation speed
4. Modify lighting parameters

## 🐛 Known Issues
- GitHub API rate limiting (60 requests/hour unauthenticated)
- Three.js requires WebGL support
- WhatsApp Web requires internet connection
- Form doesn't save submissions (intentional)

## ✅ Browser Support
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 📄 License
All rights reserved © Parthiv Kshirsagar

## 👨‍💻 Author
**Parthiv Kshirsagar**
- Full-Stack Developer @ RID Bharat
- Email: kshirsagarparthiv@gmail.com
- WhatsApp: +91 7067211314
- Location: India

---

*Built with HTML, CSS, JavaScript & Three.js*
