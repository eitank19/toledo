import plugin from 'tailwindcss/plugin';

export const theme = plugin(() => {}, {
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px',
        '2xl': '1200px',
      },
    },
    extend: {
      height: {
        'carousel-active': '414px',
        'carousel-inactive': '336px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
});
