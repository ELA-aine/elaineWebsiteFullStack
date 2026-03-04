# 🎮 Pixel Portal - Elaine's Pixelated Portfolio

A beautiful, retro-inspired personal portfolio website built with React featuring a pixelated aesthetic, multiple showcase pages, and interactive mini-games.

## 🎨 Features

### Pages
1. **Home** - Welcome page with introduction and featured highlights
2. **Projects** - Showcase of 6 example projects with descriptions and tags
3. **Photography** - Interactive gallery with lightbox modal for viewing photos
4. **Music & Video** - Showcase of music playlists and video content
5. **About & Contact** - Bio, skills, experience, and contact form
6. **Interactive Fun Zone** - Hub for accessing all mini-games

### 🎮 Interactive Games & Features

1. **🎨 Pixel Canvas** - Draw on a grid canvas with customizable pixel size and colors
2. **🧠 Memory Game** - Classic card-matching memory game with emojis
3. **🎹 Pixel Piano** - Click or press keys (C-B) to play 8-bit synth sounds
4. **💭 Quote Generator** - Random inspirational quotes with typewriter animation
5. **🖱️ Click Counter** - Clicker game with upgrades (click power, auto-clicker, multiplier)
6. **🎯 Maze Game** - Navigate randomly generated mazes with arrow keys

## 🎨 Pixelated Aesthetic

- **Font**: "Press Start 2P" from Google Fonts for headings
- **Color Scheme**: Vibrant neon colors (pink, purple, blue, yellow) on dark background
- **Effects**: 
  - Pixelated image rendering
  - Text shadows for depth
  - Grid-based layout with 8px units
  - Glitch animations
  - Floating animations
  - Smooth transitions

### Color Palette
```
Primary:     #ff006e (Hot Pink)
Secondary:   #8338ec (Purple)
Accent:      #ffbe0b (Yellow)
Dark BG:     #0a0e27 (Dark Blue)
Light Text:  #e0e0e0 (Light Gray)
Success:     #33d39f (Mint Green)
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── App.js                          # Main app with React Router
│   ├── index.js                        # React render
│   ├── styles.css                      # Global pixelated styles
│   ├── components/
│   │   ├── header.js                   # Navigation header
│   │   ├── Footer.js                   # Footer component
│   │   ├── ProjectCard.js              # Reusable project card
│   │   └── interactive/                # Interactive games folder
│   │       ├── DrawingCanvas.js        # Pixel art drawing tool
│   │       ├── MemoryGame.js           # Card matching game
│   │       ├── PixelPiano.js           # 8-bit piano
│   │       ├── QuoteGenerator.js       # Quote display
│   │       ├── ClickCounter.js         # Clicker game
│   │       └── MazeGame.js             # Maze navigation
│   ├── pages/
│   │   ├── Home.js                     # Home/landing page
│   │   ├── Projects.js                 # Projects showcase
│   │   ├── Photography.js              # Photo gallery
│   │   ├── Music.js                    # Music & video page
│   │   ├── About.js                    # About & contact
│   │   └── Interactive.js              # Games hub
│   ├── api/
│   ├── assets/
│   └── pages/
├── public/
│   └── index.html                      # HTML entry point
└── package.json
```

## 🚀 Getting Started

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm start
```

This will start the development server at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🎯 Customization

### Update Personal Information

1. **Home Page** - Edit `/src/pages/Home.js` to update introduction
2. **About Page** - Edit `/src/pages/About.js` to update bio and skills
3. **Projects** - Modify the `projects` array in `/src/pages/Projects.js`
4. **Contact Email** - Update email links throughout the site

### Customize Colors

Edit the CSS variables in `/src/styles.css`:

```css
:root {
  --primary-color: #ff006e;    /* Change primary color */
  --secondary-color: #8338ec;  /* Change secondary color */
  --accent-color: #ffbe0b;     /* Change accent color */
  --dark-bg: #0a0e27;          /* Change background */
  --light-text: #e0e0e0;       /* Change text color */
}
```

### Add More Games

1. Create a new component in `src/components/interactive/`
2. Import it in `src/pages/Interactive.js`
3. Add it to the `games` array with id, title, and description
4. Add a route case in the Interactive page to render it

### Add Photography

Replace placeholder photos:
1. Update the `photoGallery` array in `src/pages/Photography.js`
2. Update the color gradients for each photo
3. Consider replacing the emoji placeholder with actual image URLs

### Add Music/Videos

1. Update the `musicItems` array in `src/pages/Music.js`
2. Add actual Spotify, YouTube, or SoundCloud embed URLs
3. Update button handlers to link to actual content

## 🎮 Game Features

### Pixel Canvas
- Draw with customizable pixel sizes (4px, 8px, 12px, 16px)
- Color picker for custom drawing colors
- Download your artwork as PNG
- Clear canvas to start fresh

### Memory Game
- 16 cards with emoji pairs
- Track number of moves
- Win condition when all pairs are matched
- New Game button to reset

### Pixel Piano
- 7 notes (C-B) with realistic frequencies
- Click buttons or press keyboard (C, D, E, F, G, A, B keys)
- Square wave synth sound (8-bit style)
- Visual feedback on active keys

### Quote Generator
- 15 pre-loaded inspirational quotes
- Typewriter effect animation
- Get next quote button
- Author attribution

### Click Counter (Clicker Game)
- Click the pixel character to earn points
- Level system based on total clicks
- Three upgrade types:
  - Click Power: Increase points per click
  - Auto-Clicker: Earn passive income
  - Multiplier: Multiply all earnings
- Reset game to start over

### Maze Game
- 10x10 randomly generated maze
- Arrow keys to navigate
- Reach the yellow square to win
- Move counter
- New Maze button to generate fresh maze

## 🔗 Navigation

The website uses React Router for seamless navigation:
- `/` - Home page
- `/projects` - Projects showcase
- `/photography` - Photo gallery
- `/music` - Music & videos
- `/about` - About & contact
- `/interactive` - Interactive games

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px)
- Mobile (480px)

All interactive elements scale appropriately while maintaining the pixel aesthetic.

## 🛠️ Technologies Used

- **React 18.2** - UI library
- **React Router v7** - Client-side routing
- **CSS3** - Styling with custom variables
- **Web Audio API** - Sound generation for piano
- **HTML5 Canvas** - Drawing and maze games
- **Google Fonts** - Press Start 2P font

## 📝 Notes

- The portfolio includes example content. Replace with your actual projects, photos, and information.
- Contact form doesn't send emails by default - integrate with a backend service (Firebase, Email.js, etc.) for functionality
- All games save scores locally using React state; consider adding localStorage or backend for persistence
- Images should be optimized and use the `image-rendering: pixelated` CSS for proper pixel art appearance

## 🎯 Future Enhancements

- Add localStorage to save game scores
- Integrate contact form with email service
- Add more interactive games
- Add dark/light mode toggle
- Add keyboard shortcuts guide
- Sound effects throughout the site
- Add animation loading states
- Add SEO meta tags per page
- Create admin panel for content management

## 💜 Credits

Built with love and pixels by Elaine

---

**Happy exploring your pixel portal! 🎮✨**

