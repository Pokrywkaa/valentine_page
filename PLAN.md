# Valentine's Day Page - Project Plan

## 🎯 Project Overview
Create an interactive Valentine's Day page hosted on GitHub Pages that asks "Czy bedziesz moja walentynka?" with a fun twist on the answer buttons.

## 📋 Features

### 1. Initial Screen
- **Question Display**: "Czy bedziesz moja walentynka?" prominently displayed
- **Romantic Image**: Display a Valentine-themed image from `media/img/`
- **Two Buttons**: 
  - "Tak" (Yes) button
  - "Nie" (No) button

### 2. User Interactions

#### When "Tak" is Clicked
- Transition to celebration screen
- Display multiple animated GIFs from `media/gif/` folder
- Show celebratory message (e.g., "Wiedziałem! 💕", "Yay! ❤️")
- Add confetti/hearts animation overlay
- Optional: Play romantic music or sound effect

#### When "Nie" is Clicked
- "Tak" button grows larger (progressive scaling)
- "Nie" button optionally:
  - Moves to random position on screen, OR
  - Shrinks slightly, OR
  - Changes text to convince them ("Jesteś pewna?", "Zastanów się jeszcze raz...")
- Each subsequent "Nie" click makes "Tak" progressively bigger
- Eventually "Tak" becomes impossible to avoid (fills most of screen)

### 3. Fun Elements
- Smooth animations and transitions
- Playful messages on repeated "Nie" clicks
- Heart particles or floating hearts background
- Responsive design for mobile and desktop
- Easter eggs (e.g., cursor trail, hover effects)

## 🛠️ Technical Stack

### Frontend
- **HTML5**: Structure
- **CSS3**: Styling and animations
  - CSS animations for button scaling
  - Transitions for smooth effects
  - Flexbox/Grid for layout
- **JavaScript**: Interactive logic
  - Button click handlers
  - Dynamic scaling calculations
  - GIF display logic
  - Random positioning (optional for "Nie" button)

### Hosting
- **GitHub Pages**: Free hosting from repository
- Custom domain option (optional)

## 📁 Project Structure

```
valentine_page/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Styles and animations
├── js/
│   └── script.js          # Interactive logic
├── media/
│   ├── img/               # Valentine images (initial screen)
│   └── gif/               # Celebration GIFs (success screen)
├── README.md              # Project documentation
└── PLAN.md               # This file
```

## 🎨 Design Considerations

### Color Scheme
- Primary: Reds, pinks, and white
- Accent: Gold or rose gold
- Background: Light pink gradient or hearts pattern

### Typography
- Romantic/playful font for main question
- Clear, readable fonts for buttons
- Consider Google Fonts: Pacifico, Dancing Script, or Montserrat

### Animations
- Smooth scale transitions for "Tak" button (0.3s ease)
- Bounce or pulse effects
- Fade-in effects for GIF gallery
- Optional: Floating hearts in background

## 🔧 Implementation Steps

### Phase 1: Setup (Day 1)
1. ✅ Create GitHub repository
2. ✅ Set up basic project structure
3. ✅ Add images to `media/img/`
4. ✅ Add GIFs to `media/gif/`
5. Initialize HTML boilerplate

### Phase 2: Initial Screen (Day 1-2)
1. Create HTML structure:
   - Header with question
   - Image container
   - Button container with "Tak" and "Nie"
2. Style the initial screen:
   - Center content
   - Style buttons with hover effects
   - Add background and romantic theme
3. Ensure responsive design

### Phase 3: Interactive Logic (Day 2-3)
1. Implement "Nie" button behavior:
   ```javascript
   let noPresses = 0;
   - Track number of "Nie" clicks
   - Calculate scale increase for "Tak" button
   - Optional: Move "Nie" button randomly
   - Add funny messages on repeated clicks
   ```

2. Implement "Tak" button behavior:
   ```javascript
   - Hide initial screen
   - Show celebration screen
   - Display all GIFs from media/gif/
   - Add confetti/hearts animation
   - Show success message
   ```

### Phase 4: Celebration Screen (Day 3)
1. Create GIF gallery layout (grid or masonry)
2. Add celebratory message
3. Implement confetti or particle effects
4. Optional: Add sound effects or music
5. Add "Start over" or "Share" button (optional)

### Phase 5: Polish & Testing (Day 4)
1. Test on different screen sizes
2. Test on mobile devices
3. Optimize image/GIF sizes
4. Add loading states if needed
5. Cross-browser testing
6. Add meta tags for social sharing

### Phase 6: Deployment (Day 4)
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Test live URL
4. Optional: Set up custom domain
5. Share the link! 💕

## 📝 Code Snippets Preview

### HTML Structure
```html
<div id="initial-screen">
  <h1>Czy bedziesz moja walentynka?</h1>
  <img src="media/img/valentine.jpg" alt="Valentine">
  <div class="button-container">
    <button id="yes-btn">Tak</button>
    <button id="no-btn">Nie</button>
  </div>
</div>

<div id="celebration-screen" class="hidden">
  <h2>Wiedziałem! 💕</h2>
  <div id="gif-gallery"></div>
</div>
```

### JavaScript Logic (Simplified)
```javascript
let noPresses = 0;

noBtn.addEventListener('click', () => {
  noPresses++;
  const newScale = 1 + (noPresses * 0.3);
  yesBtn.style.transform = `scale(${newScale})`;
  
  // Optional: Move "Nie" button
  noBtn.style.position = 'absolute';
  noBtn.style.left = Math.random() * 80 + '%';
  noBtn.style.top = Math.random() * 80 + '%';
});

yesBtn.addEventListener('click', () => {
  showCelebration();
});
```

### CSS Animation
```css
.yes-btn {
  transition: transform 0.3s ease;
}

.yes-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
}
```

## 🚀 GitHub Pages Deployment

### Steps:
1. Create repository: `valentine-page` or `username.github.io`
2. Push all code to `main` branch
3. Go to Settings → Pages
4. Select source: `main` branch, `/ (root)` folder
5. Save and wait for deployment
6. Access at: `https://username.github.io/valentine-page/`

### Requirements:
- Repository must be public (for free GitHub Pages)
- `index.html` must be in root directory
- All assets use relative paths

## 🎁 Optional Enhancements

### Advanced Features
- [ ] Background music toggle
- [ ] Particle.js for heart effects
- [ ] Countdown timer to Valentine's Day
- [ ] Photo gallery/carousel
- [ ] Custom cursor (heart pointer)
- [ ] Share to social media buttons
- [ ] Multiple language support
- [ ] Dark/light mode toggle
- [ ] Save response to localStorage
- [ ] Analytics to track responses (Google Analytics)

### Fun Variations for "Nie" Button
1. **Shrinking**: "Nie" gets smaller with each click
2. **Running away**: Button moves on hover (before click)
3. **Changing text**: Shows different pleas with each click
4. **Disable**: After 3 clicks, "Nie" becomes disabled
5. **Fake button**: "Nie" triggers "Tak" action anyway

## 📱 Responsive Breakpoints
- Mobile: < 768px (single column, larger buttons)
- Tablet: 768px - 1024px (adjusted spacing)
- Desktop: > 1024px (full layout)

## ✅ Testing Checklist
- [ ] All images load correctly
- [ ] All GIFs load and animate
- [ ] Buttons work on all devices
- [ ] Scaling animation is smooth
- [ ] Page is responsive
- [ ] No console errors
- [ ] Fast loading time
- [ ] Works without internet (after first load)
- [ ] Social media preview looks good

## 📅 Timeline
- **Total estimated time**: 2-4 days (depending on complexity)
- **Quick version**: Can be done in 4-6 hours for basic functionality
- **Launch target**: Before February 14, 2026

## 💡 Success Metrics
- Page loads successfully
- Buttons are functional
- Animation is smooth and fun
- Mobile-friendly
- Your special someone says "Tak"! ❤️

---

**Good luck with your Valentine's page! 💕**
