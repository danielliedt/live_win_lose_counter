# OBS Live Editable Counter

A lightweight, web-based counter for OBS Studio. Update your stats live via the OBS "Interact" window.

## Installation
1. Download `index.html`, `style.css`, and `script.js`.
2. In OBS, add a new Browser Source.
3. Check Local file and select `index.html`.
4. To update the count: Right-click the source in OBS and select Interact.

## 🛠️ Customization
You can easily customize the look by editing the `style.css` file:

### Change Colors
Look for the following IDs to change the neon green and red colors:
* `#wins { color: #39FF14; }`
* `#losses { color: #FF2400; }`
* `border: 4px solid #e5ff00;` (The main frame color)

### Add a Background Image
To use a custom image, uncomment the line in `#counter-container` and add your filename:
`background-image: url('your-image.jpg');`

### Adjust Size
Change `font-size: 85px;` in the `#counter-container` section to scale the text.

---
*Minimalistic tool for streamers.*
