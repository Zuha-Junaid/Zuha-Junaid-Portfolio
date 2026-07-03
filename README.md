# Zuha Junaid | AI & Software Engineering Portfolio

A high-performance, crystal-clear interactive portfolio showcase built for modern web browsers. This portfolio features an ambient, responsive 3D particle landscape backdrop layered seamlessly behind architectural, blur-free user interface components.

## 🚀 Live Demo
* **GitHub Pages / Vercel / Netlify:** zuha-junaid-portfolio.netlify.app

---

## 🛠️ Core Technology Stack

* **Core UI Engine:** HTML5, CSS3, JavaScript (ES6+)
* **Styling Framework:** Tailwind CSS (via CDN configuration runtime compilation)
* **3D Interactive Simulation:** Three.js (r128 API runtime)
* **Iconography Asset Pipeline:** FontAwesome v6.4.0 Vector Suite
* **Typography:** Inter (via Google Fonts API integration)

---

## 🎯 Architecture & Performance Fixes

Unlike conventional hybrid 3D interfaces that suffer from modern web browser text-rendering issues, this repository features custom performance optimization adjustments:

### 1. Vector Clarity & Anti-Blur Stabilization
Browsers natively rasterize DOM sub-elements into pixelated, muddy textures whenever standard `perspective` or 3D coordinate spaces (`translateZ`) are applied to ancestor containers. 
* **The Fix:** We completely decoupled the interface components from 3D space and implemented a high-efficiency native `z-index` depth matrix. This ensures text vectors stay razor-sharp and clear across 4K displays and high-refresh-rate monitors.

### 2. Kinetic Text Scroll Animations
Dynamic background typography handles (`HOME`, `ABOUT`, `WORK`, `CONTACT`) adapt layout dimensions smoothly based on user viewport positions.
* **The Fix:** Computations have been shifted away from hardware-intensive properties over to isolated 2D transform metrics (`translateX` and `rotate`), reducing repaints and achieving a locked 60FPS fluid scroll interface.

### 3. Collision-Free Mobile Layout Overlaps
* **The Fix:** Background title components are anchored relative to the dynamic bottom baselines of content blocks (`word-bottom-right`, `word-bottom-left`). This allows expanding items—like project overview cards and your dynamic email links—to fluidly scale on mobile viewport viewports without layout overlaps.

---

## 📂 File System Layout

```text
├── index.html        # Entry viewport, UI components, and meta headers
├── style.css         # Structural depth indices and custom font styling
└── script.js        # Three.js animation loops and 2D translation logic
