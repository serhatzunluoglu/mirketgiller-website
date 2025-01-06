/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      fontSize: {
        // Body Styles
        'body-xs-medium': ['12px', { lineHeight: '20px', fontWeight: '500' }],
        'body-xs-regular': ['12px', { lineHeight: '20px', fontWeight: '400' }],
        'body-sm-medium': ['14px', { lineHeight: '22px', fontWeight: '500' }],
        'body-sm-regular': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'body-md-bold': ['16px', { lineHeight: '24px', fontWeight: '700' }],
        'body-md-semibold': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'body-md-medium': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'body-md-regular': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-lg-bold': ['18px', { lineHeight: '26px', fontWeight: '700' }],
        'body-lg-semibold': ['18px', { lineHeight: '26px', fontWeight: '600' }],
        'body-lg-medium': ['18px', { lineHeight: '26px', fontWeight: '500' }],
        'body-lg-regular': ['18px', { lineHeight: '26px', fontWeight: '400' }],

        // Heading Styles
        'heading-6': ['24px', { lineHeight: '30px', fontWeight: '600' }],
        'heading-5': ['28px', { lineHeight: '40px', fontWeight: '600' }],
        'heading-4': ['30px', { lineHeight: '38px', fontWeight: '700' }],
        'heading-3': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'heading-2': ['48px', { lineHeight: '58px', fontWeight: '700' }],
        'heading-1': ['60px', { lineHeight: '72px', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
};
