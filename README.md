# Portfolio Website

A modern, fully functional React-based personal portfolio website with smooth animations and responsive design.

## Features

- 🎨 Modern and beautiful UI/UX design
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations using Framer Motion
- 🚀 Fast performance with Vite
- 🎯 All essential portfolio sections:
  - Hero section with introduction
  - About me
  - Work experience
  - Projects showcase
  - Skills and technologies
  - Education
  - Contact form

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

All portfolio data is stored in `src/data/portfolioData.js`. Simply edit this file to customize:

- Personal information (name, title, bio, contact info)
- Social media links
- Work experience
- Projects
- Skills
- Education

### Adding Your Image

Replace the placeholder image URL in `portfolioData.js` with your own image:
- Add your image to `public/` folder
- Update the `image` field: `image: "/your-image.jpg"`

### Styling

- Global styles: `src/index.css`
- Component styles: Each component has its own CSS file in `src/components/`
- Color scheme: Edit CSS variables in `src/index.css`

## Project Structure

```
Portfolio-Website/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- React 18
- Vite
- Framer Motion (animations)
- React Icons
- CSS3 (custom styling)

## License

This project is open source and available for personal use.

## Support

For issues or questions, please open an issue on GitHub.
