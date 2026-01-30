// DOM Elements
const initialScreen = document.getElementById('initial-screen');
const celebrationScreen = document.getElementById('celebration-screen');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const restartBtn = document.getElementById('restart-btn');
const gifGallery = document.getElementById('gif-gallery');
const messagesDiv = document.getElementById('messages');
const heartsContainer = document.getElementById('hearts-container');
const confettiCanvas = document.getElementById('confetti-canvas');
const valentineImage = document.getElementById('valentine-image');

// State management
let noPresses = 0;
const maxNoClicks = 5;

// Funny messages for "Nie" button clicks
const funnyMessages = [
    "Jesteś pewna? 👀",
    "🥺",
    "😢",
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    createBackgroundHearts();
    loadGifs();
});

// Event Listeners
function setupEventListeners() {
    yesBtn.addEventListener('click', handleYesClick);
    noBtn.addEventListener('click', handleNoClick);
    restartBtn.addEventListener('click', handleRestart);
    
    // Mobile touch events
    noBtn.addEventListener('touchstart', preventNoHover);
    noBtn.addEventListener('touchend', handleTouchEnd);
    
    // Prevent "Nie" button from being clickable when it's scaled too small
    noBtn.addEventListener('mouseenter', preventNoHover);
    
    // Optimize for mobile viewport
    if (window.innerWidth <= 768) {
        optimizeForMobile();
    }
    
    // Handle orientation changes
    window.addEventListener('orientationchange', handleOrientationChange);
}

// Handle "Tak" (Yes) button click
function handleYesClick() {
    showCelebrationScreen();
}

// Handle "Nie" (No) button click
function handleNoClick() {
    noPresses++;
    
    // Scale the "Tak" button
    const newScale = 1 + (noPresses * 0.3);
    yesBtn.style.transform = `scale(${newScale})`;
    
    // Move "Nie" button to random position
    moveNoButtonRandomly();
    
    // Show funny messages
    showFunnyMessage();
    
    // Check if we've reached max clicks
    if (noPresses >= maxNoClicks) {
        makeNoButtonUnavoidable();
    }
}

// Move "Nie" button to random position
function moveNoButtonRandomly() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Mobile: keep button within viewport with safe bounds
        const buttonWidth = 80; // approximate button width in pixels
        const buttonHeight = 40;
        
        const maxX = window.innerWidth - buttonWidth - 10;
        const maxY = window.innerHeight - buttonHeight - 60; // Leave space at bottom
        
        const randomX = Math.random() * Math.max(buttonWidth, maxX - buttonWidth) + 10;
        const randomY = Math.random() * Math.max(buttonHeight, maxY - 100) + 50;
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.right = 'auto';
        noBtn.style.bottom = 'auto';
    } else {
        // Desktop: use percentage positioning
        const randomX = Math.random() * 80 + 10; // 10-90%
        const randomY = Math.random() * 80 + 10; // 10-90%
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + '%';
        noBtn.style.top = randomY + '%';
        noBtn.style.right = 'auto';
        noBtn.style.bottom = 'auto';
    }
}

// Show funny messages for repeated "Nie" clicks
function showFunnyMessage() {
    const messageIndex = Math.min(noPresses - 1, funnyMessages.length - 1);
    messagesDiv.textContent = funnyMessages[messageIndex];
    messagesDiv.style.animation = 'none';
    
    // Trigger animation by forcing reflow
    void messagesDiv.offsetWidth;
    messagesDiv.style.animation = 'fadeIn 0.5s ease-out';
}

// Make "Nie" button harder to click and enable "Tak" to become huge
function makeNoButtonUnavoidable() {
    noBtn.style.opacity = '0.3';
    noBtn.style.pointerEvents = 'none';
    
    // Make "Tak" button even larger
    yesBtn.style.transform = `scale(${2 + (noPresses * 0.2)})`;
}

// Prevent "Nie" button hover when it's trying to escape
function preventNoHover(e) {
    if (noPresses >= 3) {
        moveNoButtonRandomly();
    }
}

// Show celebration screen
function showCelebrationScreen() {
    initialScreen.classList.remove('active');
    celebrationScreen.classList.add('active');
    startConfetti();
    createHeartExplosion();
    playSuccessSound();
}

// Display GIFs in gallery
function loadGifs() {
    const gifFolder = 'media/gif/';
    
    // Load multiple happy cat GIFs
    const gifFiles = Array(12).fill('happy_cat.gif');
    
    gifGallery.innerHTML = ''; // Clear any placeholder content
    
    gifFiles.forEach((file) => {
        const gifItem = document.createElement('div');
        gifItem.className = 'gif-item';
        gifItem.innerHTML = `<img src="${gifFolder}${file}" alt="Celebration Plush">`;
        gifGallery.appendChild(gifItem);
    });
}

// Create floating hearts background
function createBackgroundHearts() {
    const heartCount = 15;
    const hearts = ['💕', '❤️', '💖'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 6 + Math.random() * 4;
        
        heart.style.left = randomLeft + '%';
        heart.style.top = '-50px';
        heart.style.animationDelay = randomDelay + 's';
        heart.style.animationDuration = randomDuration + 's';
        
        heartsContainer.appendChild(heart);
    }
}

// Create heart explosion on "Tak" click
function createHeartExplosion() {
    const explosionCount = 30;
    const hearts = ['💕', '❤️', '💖'];
    
    for (let i = 0; i < explosionCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const angle = (i / explosionCount) * Math.PI * 2;
        const velocity = 5 + Math.random() * 10;
        
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.position = 'fixed';
        heart.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
        heart.style.pointerEvents = 'none';
        
        heartsContainer.appendChild(heart);
        
        animateHeartExplosion(heart, angle, velocity);
    }
}

// Animate heart explosion particles
function animateHeartExplosion(element, angle, velocity) {
    let x = 0;
    let y = 0;
    let vx = Math.cos(angle) * velocity;
    let vy = Math.sin(angle) * velocity;
    
    const animate = () => {
        x += vx;
        y += vy;
        vy += 0.2; // Gravity
        
        element.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        element.style.opacity = Math.max(0, 1 - x / 500);
        
        if (x < 500 && element.parentNode) {
            requestAnimationFrame(animate);
        } else if (element.parentNode) {
            element.remove();
        }
    };
    
    animate();
}

// Confetti animation
function startConfetti() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * 5 + 5,
            size: Math.random() * 3 + 2,
            color: ['#ff69b4', '#ff1493', '#ffd700', '#ff6b9d', '#c71585'][Math.floor(Math.random() * 5)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.2
        });
    }
    
    const animate = () => {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        
        let allFallen = true;
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.2; // Gravity
            p.rotation += p.rotationSpeed;
            
            if (p.y < confettiCanvas.height) {
                allFallen = false;
                
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
                ctx.restore();
            }
        });
        
        if (!allFallen) {
            requestAnimationFrame(animate);
        }
    };
    
    animate();
}

// Handle window resize for confetti canvas
window.addEventListener('resize', () => {
    if (celebrationScreen.classList.contains('active')) {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }
});

// Play success sound (optional)
function playSuccessSound() {
    // Create a simple beep using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 523.25; // C5 note
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        // Audio not available, skip
    }
}

// Handle restart button
function handleRestart() {
    // Reset state
    noPresses = 0;
    messagesDiv.textContent = '';
    
    // Reset button styles
    yesBtn.style.transform = 'scale(1)';
    noBtn.style.position = 'relative';
    noBtn.style.left = 'auto';
    noBtn.style.top = 'auto';
    noBtn.style.opacity = '1';
    noBtn.style.pointerEvents = 'auto';
    
    // Clear confetti canvas
    const ctx = confettiCanvas.getContext('2d');
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    // Switch screens
    celebrationScreen.classList.remove('active');
    initialScreen.classList.add('active');
}

// Easter egg: cursor trail
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createCursorTrailParticle(e.clientX, e.clientY);
    }
});

function createCursorTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        font-size: 1.2rem;
        animation: fadeOut 1s ease-out forwards;
        z-index: 99;
    `;
    particle.textContent = ['✨', '💫', '⭐'][Math.floor(Math.random() * 3)];
    
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000);
}

// Add fadeOut keyframe if not present
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Mobile Optimization Functions
// ============================================

function optimizeForMobile() {
    // Disable hover effects on touch devices
    document.documentElement.classList.add('touch-device');
    
    // Reduce animation complexity on low-end devices
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition', '0s');
    }
}

function handleTouchEnd(e) {
    e.preventDefault();
    // Re-trigger hover effect for next interaction
    if (noPresses >= 3) {
        moveNoButtonRandomly();
    }
}

function handleOrientationChange() {
    // Adjust layout on orientation change
    setTimeout(() => {
        window.scrollTo(0, 0);
        // Recalculate button positions
        if (noPresses > 0) {
            noBtn.style.position = 'fixed';
        }
    }, 100);
}

// Detect if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth <= 768;
}

// Enhance touch interactions
function enhanceTouchInteractions() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        // Add active state on touch
        btn.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        
        btn.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

// Optimize confetti for mobile
function optimizeConfettiForMobile() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        // Reduce particle count on mobile
        return 50; // instead of 100
    }
    return 100;
}

// Call mobile enhancements when script loads
if (isMobileDevice()) {
    document.addEventListener('DOMContentLoaded', () => {
        enhanceTouchInteractions();
    });
}

// Handle window resize to adapt layout
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Adjust UI on resize
        if (noPresses > 0 && noBtn.style.position === 'fixed') {
            // Keep "Nie" button in viewport
            const rect = noBtn.getBoundingClientRect();
            if (rect.left < 0 || rect.right > window.innerWidth) {
                moveNoButtonRandomly();
            }
        }
    }, 250);
});
