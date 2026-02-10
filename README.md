# B&B - Brew and Brunch Landing Page

A luxury culinary experience landing page blending artisanal coffee with gourmet dining.

## 🌟 Features

- **Cinematic Hero Animation** - Smooth 75-frame image sequence animation
- **Modern Design** - Premium fonts (Cormorant Garamond, Manrope, Playfair Display)
- **Responsive Layout** - Mobile-friendly design
- **Smooth Scrolling** - Enhanced user experience
- **Interactive Elements** - Custom cursor, hover effects, and animations

## 🚀 Live Demo

[View Live Site](#) *(Add your GitHub Pages link here)*

## 📁 Project Structure

```
first landing page/
├── index.html          # Main HTML file
├── src/
│   ├── main.js        # JavaScript logic
│   └── style.css      # Styling
├── public/
│   ├── animation/     # Hero section animation frames (75 images)
│   └── vite.svg       # Favicon
├── package.json       # Dependencies
├── netlify.toml       # Deployment config
└── .gitignore         # Git ignore rules
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📦 Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains the production files

3. Deploy to GitHub Pages:
   - Go to repository Settings → Pages
   - Select source: `GitHub Actions` or `Deploy from a branch`
   - Select branch: `main` and folder: `/dist` (or use GitHub Actions)

### Netlify

This project includes `netlify.toml` for easy Netlify deployment:
- Connect your GitHub repository to Netlify
- Netlify will automatically detect settings from `netlify.toml`
- Deploy!

## 🎨 Customization

### Update Content
- Edit `index.html` to change text, links, and structure
- Modify `src/style.css` for styling changes
- Update `src/main.js` for JavaScript functionality

### Replace Animation
- Add your image sequence to `public/animation/`
- Update the animation script in `index.html` (line 111-190)

## 📝 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Interactivity
- **Vite** - Build tool and dev server
- **Google Fonts** - Premium typography

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your Name](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- Design inspiration from modern luxury café websites
- Animation technique using canvas and image sequences
- Premium fonts from Google Fonts

---

**Note**: Update the placeholder links and information with your actual details before deploying.
