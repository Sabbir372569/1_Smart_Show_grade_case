/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
				center: true,
				padding: "1.25rem",
			},
      colors:{
        clifford: "#da373d",
        customColor:{
          100:'#3ed2e5',
          500:'#3ed2e5',
          900:'#3ed2e5',
        }
      },
      fontFamily:{
        custom: ['Inter', 'Lato','sans-serif']
      },
      spacing:{
        'smallar': "1.2rem",
          'larger': "2.5rem",
          'extraLarger': "3.5rem"
      },
      screens:{
        'tablet' : '700px',
        'desktop' : '1080px',
        'larger-desktop' : '1380px'
      }
    },
  },
  plugins: [
    
  ],
}

