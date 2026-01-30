# 💕 Czy bedziesz moja walentynka? (Valentine's Day Page)

An interactive Valentine's Day web page with a fun twist on the traditional "Will you be my Valentine?" question. This project features animated buttons, celebration screens, and romantic design elements.

## 🎯 Project Overview

This is a lighthearted Valentine's Day page hosted on GitHub Pages that asks the classic question "Czy bedziesz moja walentynka?" (Will you be my Valentine?) with playful button interactions and a celebration screen for when they say yes!

## ✨ Features

### 🎨 Initial Screen
- Beautiful romantic question display: "Czy bedziesz moja walentynka?"
- Valentine-themed images in `media/img/` folder
- Two interactive buttons: "Tak" (Yes) and "Nie" (No)
- Floating hearts background animation
- Pulsing animation on the main question

### 🎉 "Tak" (Yes) Button
- Smooth transition to celebration screen
- Displays animated GIFs from `media/gif/` folder
- Shows celebratory message: "Wiedziałem! 💕"
- Confetti animation with particles falling
- Heart explosion effect
- Success sound effect
- "Start over" button to restart

### 🎯 "Nie" (No) Button - Fun Mechanics
- **Progressive Scaling**: "Tak" button grows larger with each "Nie" click
- **Button Movement**: "Nie" button moves to random positions on screen
- **Funny Messages**: Shows persuasive messages after each click:
  - "Jesteś pewna? 👀"
  - "Zastanów się jeszcze raz... 💭"
  - "No chodź, daj szansę! 🥺"
  - "Nie bądź taka okrutna! 😢"
  - "OK, ostatnia szansa! ❤️"
- **Impossible to Avoid**: After 5 clicks, "Tak" button fills most of the screen
- **Hover Escape**: "Nie" button escapes on hover when pressured

### 🎊 Celebration Screen
- Grid layout gallery for GIFs
- Confetti falling animation
- Heart explosion particles
- Celebratory message display
- Option to start over
- Beautiful gradient background

### 🌟 Easter Eggs & Polish
- Cursor trail with sparkle particles (✨, 💫, ⭐)
- Smooth animations and transitions
- Responsive design for mobile and desktop
- Floating hearts in background
- Hover effects on gallery items
- Optimized performance

## 🛠️ Technical Stack

### Frontend
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with animations
  - Flexbox/Grid layout
  - CSS animations and transitions
  - Linear gradients
  - Responsive design
- **JavaScript**: Interactive logic
  - Event handling
  - DOM manipulation
  - Canvas-based confetti animation
  - Web Audio API for sounds
  - RequestAnimationFrame for smooth animations

### Design
- **Google Fonts**: "Dancing Script" (heading), "Montserrat" (body)
- **Color Scheme**:
  - Primary: Hot Pink (#ff69b4)
  - Secondary: Deep Pink (#ff1493)
  - Accent: Gold (#ffd700)
  - Light Background: Misty Rose (#ffe4e1)

## 📁 Project Structure

```
valentine_page/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Styles and animations
├── js/
│   └── script.js          # Interactive logic
├── media/
│   ├── img/               # Valentine images (add your own)
│   │   └── valentine.jpg  # Main image (add your own)
│   └── gif/               # Celebration GIFs (add your own)
│       ├── celebration.gif
│       ├── hearts.gif
│       └── confetti.gif
├── README.md              # This file
├── PLAN.md               # Project planning document
└── .gitignore            # Git configuration (optional)
```

## 🚀 Getting Started

### Local Development

1. Clone the repository (or download the files):
```bash
git clone https://github.com/yourusername/valentine_page.git
cd valentine_page
```

2. Add your media files:
   - Place Valentine images in `media/img/` folder (e.g., valentine.jpg)
   - Place celebration GIFs in `media/gif/` folder (e.g., celebration.gif, hearts.gif)

3. Open in a local server (recommended):
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
```

4. Open browser and navigate to: `http://localhost:8000`

### Alternatively
You can simply open `index.html` directly in a browser, but local assets may not load properly due to CORS restrictions.

## 📸 Media Setup

### Images (media/img/)
- Add your favorite Valentine-themed images
- Recommended size: 300x300px or larger
- Supported formats: JPG, PNG, WebP
- The page will display a fallback if images aren't found

### GIFs (media/gif/)
The celebration screen will look for these GIFs:
- `celebration.gif` - Main celebration animation
- `hearts.gif` - Heart animation
- `confetti.gif` - Confetti animation

If GIFs aren't found, the page displays emoji placeholders (💕, ❤️, 💖, 🎉, etc.)

## 🎨 Customization

### Change Messages
Edit the `funnyMessages` array in `js/script.js`:
```javascript
const funnyMessages = [
    "Your message here",
    "Another message",
    // ... more messages
];
```

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #ff69b4;
    --secondary-color: #ff1493;
    --accent-color: #ffd700;
    --light-bg: #ffe4e1;
    --text-color: #333;
}
```

### Adjust Button Scaling
In `js/script.js`, change the scaling factor:
```javascript
const newScale = 1 + (noPresses * 0.3); // Change 0.3 for faster/slower growth
```

### Change Emoji Characters
Replace emoji in various functions like `createBackgroundHearts()` and confetti colors.

## 📱 Responsive Design

The page is fully responsive with breakpoints for:
- **Desktop** (>1024px): Full layout with large fonts
- **Tablet** (768px-1024px): Adjusted spacing and sizing
- **Mobile** (<768px): Single column, larger buttons, optimized touch targets

## 🌐 GitHub Pages Deployment

### Setup Instructions

1. Create a GitHub repository (if you haven't already):
   - Go to https://github.com/new
   - Name it `valentine_page` (or any name)
   - Make it **public**
   - Click "Create repository"

2. Push your code:
```bash
cd valentine_page
git init
git add .
git commit -m "Initial commit: Valentine's Day page"
git remote add origin https://github.com/yourusername/valentine_page.git
git branch -M main
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Select "Deploy from a branch"
   - Branch: Select "main" / "/(root)"
   - Click "Save"

4. Wait 1-2 minutes for deployment, then access:
   - `https://yourusername.github.io/valentine_page/`

### Custom Domain (Optional)
1. In GitHub Pages settings, add your custom domain
2. Update your domain registrar's DNS settings
3. Point to GitHub Pages servers

## ✅ Features Checklist

- [x] Question display with animation
- [x] Initial image display
- [x] "Tak" button click handling
- [x] "Nie" button progressive scaling
- [x] "Nie" button random movement
- [x] Funny messages on repeated clicks
- [x] Celebration screen transition
- [x] GIF gallery display
- [x] Confetti animation
- [x] Heart explosion effect
- [x] Background floating hearts
- [x] Responsive design
- [x] Mobile-friendly
- [x] Easter egg (cursor trail)
- [x] Sound effect on success
- [x] Restart functionality

## 🎯 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support
- IE 11: Limited support (no confetti animation)

## 📝 Code Examples

### Adding Custom Images
```html
<!-- In index.html -->
<img id="valentine-image" src="media/img/your-image.jpg" alt="Valentine">
```

### Adding Custom GIFs
```javascript
// In js/script.js, modify the gifFiles array
const gifFiles = ['your-celebration.gif', 'your-hearts.gif'];
```

### Adding Custom Fonts
```html
<!-- In index.html head -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

Then update CSS:
```css
.question {
    font-family: 'YourFont', cursive;
}
```

## 🎁 Advanced Customization

### Add Background Music
```javascript
const audio = new Audio('media/music.mp3');
audio.loop = true;
audio.volume = 0.3;

// Play on page load or after first interaction
document.addEventListener('click', () => {
    audio.play();
}, { once: true });
```

### Add Social Sharing
```javascript
function shareToSocial() {
    const text = "Czy bedziesz moja walentynka? 💕";
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
}
```

### Add Analytics
```html
<!-- Add Google Analytics in head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

## 🐛 Troubleshooting

### Images/GIFs not loading
- Ensure files are in the correct folders (`media/img/`, `media/gif/`)
- Check file extensions match (e.g., `.jpg`, `.gif`)
- Use relative paths only
- On GitHub, wait a few minutes for cache to clear

### Buttons not working
- Check browser console for JavaScript errors (F12)
- Ensure `js/script.js` is loaded
- Try clearing browser cache

### Mobile layout issues
- Check viewport meta tag in HTML head
- Test with browser DevTools (F12 → Toggle device toolbar)
- Ensure CSS media queries are applied

### Confetti not showing
- Check that canvas element exists in HTML
- Verify JavaScript runs without errors
- Some browsers may have reduced animations for performance

## 📚 Resources

- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [JavaScript Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Google Fonts](https://fonts.google.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 💡 Ideas for Enhancement

- Add countdown timer to Valentine's Day
- Multiple language support
- Dark/light mode toggle
- Particle.js for advanced effects
- Custom cursor shape
- Save responses to backend
- Photo carousel in celebration
- Disable "Nie" after N clicks
- Add form to collect responses
- Send email notification on "Tak"

## 🤝 Contributing

Feel free to fork and improve! You can:
- Add new animations
- Improve responsive design
- Add more languages
- Create new color themes
- Optimize performance

## 📄 License

This project is provided as-is for personal use. Feel free to modify and share!

## 💬 Contact

Created for Valentine's Day 2026. Good luck! ❤️

---

**Remember**: The most important part is the thought and effort you put into this page. Make it personal and meaningful! 💕

✨ **Good luck with your Valentine's page!** ✨
