// PIXEL PORTAL CONFIGURATION GUIDE
// This file documents all the customization points for your portfolio

// ============================================
// 1. COLOR SCHEME (src/styles.css)
// ============================================
/*
:root {
  --primary-color: #ff006e;      // Hot pink - main buttons and borders
  --secondary-color: #8338ec;    // Purple - secondary elements
  --accent-color: #ffbe0b;       // Yellow - highlights and text
  --dark-bg: #0a0e27;            // Dark blue - background
  --light-text: #e0e0e0;         // Light gray - body text
}

SUGGESTED COLOR PALETTES TO TRY:
- Neon: #ff006e (pink), #8338ec (purple), #ffbe0b (yellow), #0a0e27 (dark)
- Cyberpunk: #00ff88 (lime), #ff00ff (magenta), #00ffff (cyan), #0d0221 (black)
- Retro: #ff0000 (red), #00ff00 (green), #0000ff (blue), #000000 (black)
- Sunset: #ff4500 (orange), #ff6347 (tomato), #ffd700 (gold), #2f4f4f (slate)
*/

// ============================================
// 2. PERSONAL INFORMATION (src/pages/*.js)
// ============================================
/*
HOME PAGE (src/pages/Home.js):
- Line ~12: "Welcome to My Pixel Portal" - Change title
- Line ~15: "Hello, I'm Elaine" - Change greeting
- Line ~17-22: Update introduction text
- Line ~24: Update "✦ Web Developer ✦ Photographer ✦ Music Enthusiast ✦"

ABOUT PAGE (src/pages/About.js):
- Line ~95: Email "your.email@example.com" - Update your actual email
- Line ~130-160: Skills section - Update your skills
- Line ~176-195: Experience section - Update your job history
- Line ~265-285: Social links - Update GitHub, LinkedIn, Twitter, Instagram URLs

PROJECTS PAGE (src/pages/Projects.js):
- Line ~5-36: Update projects array with your actual projects
  - title: Project name
  - description: What you built
  - tags: Technologies used
  - link: URL to live project or GitHub
*/

// ============================================
// 3. NAVIGATION LINKS (src/components/header.js)
// ============================================
/*
The header automatically links to:
- / (Home)
- /projects
- /photography
- /music
- /about
- /interactive

These routes are defined in src/App.js. Add new pages by:
1. Creating new file in src/pages/
2. Import in App.js
3. Add <Route> in the <Routes> component
*/

// ============================================
// 4. INTERACTIVE GAMES (src/pages/Interactive.js)
// ============================================
/*
Current games:
1. Pixel Canvas - src/components/interactive/DrawingCanvas.js
2. Memory Game - src/components/interactive/MemoryGame.js
3. Pixel Piano - src/components/interactive/PixelPiano.js
4. Quote Generator - src/components/interactive/QuoteGenerator.js
5. Click Counter - src/components/interactive/ClickCounter.js
6. Maze Game - src/components/interactive/MazeGame.js

To add new game:
1. Create new file in src/components/interactive/
2. Import in Interactive.js
3. Add to games array
4. Add case in handleSubmit
*/

// ============================================
// 5. PHOTOGRAPHY GALLERY (src/pages/Photography.js)
// ============================================
/*
Update photoGallery array:
- id: unique number
- title: Photo name
- description: What's in the photo
- color: gradient color (e.g., '#ff006e')

Replace emoji 📸 with actual image URLs in the JSX
*/

// ============================================
// 6. MUSIC & VIDEO (src/pages/Music.js)
// ============================================
/*
Update musicItems array:
- id: unique number
- title: Song/video name
- artist: Artist or creator
- type: 'music' or 'video'
- description: Brief description

Add actual player embeds:
- Spotify: Use Spotify embed codes
- YouTube: Use YouTube iframe embeds
- SoundCloud: Use SoundCloud embed codes
*/

// ============================================
// 7. PROJECTS SHOWCASE (src/pages/Projects.js)
// ============================================
/*
Update projects array with your work:
{
  title: 'Project Name',
  description: 'What you built',
  tags: ['React', 'CSS', 'API'],
  link: 'https://github.com/yourname/project'
}

The ProjectCard component in src/components/ProjectCard.js
handles the display.
*/

// ============================================
// 8. CONTACT FORM (src/pages/About.js)
// ============================================
/*
Form currently stores data in state. To actually send emails:

Option A: Email.js (easiest)
1. npm install @emailjs/browser
2. Get free account at https://www.emailjs.com
3. Update handleSubmit to call emailjs

Option B: Firebase
1. npm install firebase
2. Set up Firebase project
3. Update handleSubmit to save to Firestore

Option C: Custom Backend
1. Create API endpoint on your backend
2. Send form data to your server
3. Server handles email sending
*/

// ============================================
// 9. FONTS
// ============================================
/*
Heading Font: "Press Start 2P" from Google Fonts
Body Font: "Courier New" monospace

To change:
1. Update @import in src/styles.css
2. Change font-family in --pixel-font variable
3. Update all font-family properties

Alternatives:
- Pixelify Sans
- Minecraft
- JetBrains Mono
- Courier Prime
*/

// ============================================
// 10. RESPONSIVE DESIGN BREAKPOINTS
// ============================================
/*
Tablet: @media (max-width: 768px)
Mobile: @media (max-width: 480px)

Located at bottom of src/styles.css
Adjust pixel sizes and layout for different screens
*/

// ============================================
// 11. DEPLOYMENT CHECKLIST
// ============================================
/*
Before deploying:
☐ Update all personal information
☐ Add real project links
☐ Add actual photos
☐ Update contact email
☐ Add social media links
☐ Set up contact form email
☐ Test all links work
☐ Test all games work
☐ Run npm build
☐ Test mobile responsiveness

Deploy to:
- Netlify (easiest for React)
- Vercel (also great for React)
- GitHub Pages (with homepage config)
- Traditional hosting with build folder
*/

// ============================================
// 12. USEFUL FILES REFERENCE
// ============================================
/*
Main Files:
- src/App.js - Routes and main structure
- src/styles.css - All styling and animations
- src/index.js - React entry point
- public/index.html - HTML template

Pages:
- src/pages/Home.js - Landing page
- src/pages/Projects.js - Projects showcase
- src/pages/Photography.js - Photo gallery
- src/pages/Music.js - Music & videos
- src/pages/About.js - About & contact
- src/pages/Interactive.js - Games hub

Components:
- src/components/header.js - Navigation
- src/components/Footer.js - Footer
- src/components/ProjectCard.js - Project display
- src/components/interactive/* - Games

Configuration:
- package.json - Dependencies & scripts
- README.md - Full documentation
- QUICK_START.md - Quick reference guide
*/

// ============================================
// 13. KEYBOARD SHORTCUTS FOR GAMES
// ============================================
/*
Pixel Piano: C, D, E, F, G, A, B keys
Maze Game: Arrow keys (↑ ↓ ← →)
Canvas: Click to draw
Memory: Click to flip
Quote: Click button
Clicker: Click character
*/

// ============================================
// 14. ANIMATION NAMES (CSS)
// ============================================
/*
.bounce - Floating up/down
.pulse - Opacity fade
.glitch - Text color glitch effect
.float - Smooth floating animation
.pixelBounce - Bouncy jump animation

Use in className:
<h1 className="bounce">Title</h1>
*/

// ============================================
// 15. COMMON TASKS
// ============================================
/*
Change a color everywhere:
1. Update src/styles.css :root variable
2. Or use find & replace in all files

Add new page:
1. Create src/pages/NewPage.js
2. Import in src/App.js
3. Add <Route path="/newpage" element={<NewPage />} />
4. Add link in src/components/header.js

Modify game settings:
1. Open src/components/interactive/[GameName].js
2. Change variables at top of component
3. Save and refresh browser

Change fonts:
1. Update @import url in src/styles.css
2. Update --pixel-font variable
3. Update font-family in relevant selectors

Add images:
1. Put images in src/assets/
2. Import or use URL in components
3. Add image-rendering: pixelated; in CSS
*/

// ============================================
// QUICK COMMANDS
// ============================================
/*
npm start         - Start development server
npm build         - Build for production
npm test          - Run tests
npm run eject     - Eject from create-react-app (irreversible!)
*/

export default "CONFIGURATION_GUIDE";

