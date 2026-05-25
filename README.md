# Boomerang Navigation

A cinematic single-page website featuring a unique boomerang transition effect between sections. Built with vanilla HTML, CSS, and JavaScript.

<video controls src="boomerang navigation.mp4" title="Boomerang navigation"></video>

## Features

- **Boomerang Transition Animation**: A custom 3D boomerang SVG that sweeps across the screen during page transitions
- **Three Themed Sections**: Home, Work, and Contact pages with distinct color schemes and visual styles
- **Responsive Design**: Fully responsive layout with optimized animations for mobile devices
- **Shockwave Effects**: Air pressure shockwave animations on content and navbar during transitions
- **Custom Typography**: Uses Inter and Playfair Display fonts for editorial-style typography
- **Noise Texture Overlay**: Subtle radial gradient noise for added visual depth

## Project Structure

```
boomerang-navigation/
├── index.html      # Main HTML structure
├── app.js          # Navigation and transition logic
├── style.css       # Styling and animations
└── README.md       # Project documentation
```

## Sections

### Home
- Dark gradient background with cyan and magenta accent shadows
- White gradient text with "Drift" branding
- Subtitle: "Immersive Motion & Cinematic Direction"

### Work
- Clean white background with dark text
- Italicized editorial typography
- Subtitle: "Selected Case Studies • 2026 Edition"

### Contact
- Warm beige background (#eae3d2)
- Earthy brown text tones
- Subtitle: "Connect Designation • Transmit Signal"

## Technical Details

### Animations
- **cutScreen**: 2.4s cubic-bezier boomerang flight path across viewport
- **floatTilt**: 3D rotation animation for the boomerang element
- **spin**: Continuous rotation of the inner boomerang layer
- **airPressureShockwave**: Content distortion effect on section change
- **navbarShockwave**: Subtle navbar animation during transitions

### CSS Features
- CSS Custom Properties for theme-specific shadow colors
- 3D transforms with perspective for depth effects
- Complex keyframe animations with multiple transform properties
- Mobile-optimized animations (reduced 3D effects on smaller screens)
- Will-change optimization for smooth performance

### JavaScript Logic
- Event delegation for navigation buttons
- State management for current section and transition status
- Timed sequence for transition phases (reveal, content swap, cleanup)
- Dynamic class switching for theme changes

## Setup & Usage

### Local Development
1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process or dependencies required

### Deployment
The project is ready for static hosting platforms:
- Netlify
- Vercel
- GitHub Pages
- Any static file server

Simply upload the files to your hosting service.

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support
- CSS Custom Properties (CSS Variables)
- CSS 3D Transforms

## Customization

### Colors
Modify theme colors in the CSS variables:
```css
.theme-home {
    --distort-shadow-1: -1.5px 0.5px 0px rgba(0, 240, 255, 0.4);
    --distort-shadow-2: 1.5px -0.5px 0px rgba(255, 0, 128, 0.4);
}
```

### Typography
Change fonts by updating the Google Fonts import in `index.html` and the font-family declarations in `style.css`.

### Animation Timing
Adjust transition durations in `app.js`:
```javascript
setTimeout(() => { /* content swap */ }, 1200);
setTimeout(() => { /* cleanup */ }, 2400);
```

## License

Free to use for personal and commercial projects.

## Credits

- Fonts: Inter & Playfair Display (Google Fonts)
- Boomerang SVG: Custom gradient design with chrome, matte dark, and silver tip effects
