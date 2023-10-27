import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Preview } from "@storybook/react";

// Custom viewports definition. Extends the MINIMAL_VIEWPORTS
const customViewports = {
  iphone7: {
    name: "iPhone 7",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  samsungGalaxyS21Ultra: {
    name: "Samsung Galaxy S21 Ultra",
    styles: {
      width: "384px",
      height: "854px",
    },
  },
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'gray',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'es',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fr', right: '🇫🇷', title: 'Français' },
          { value: 'es', right: '🇪🇸', title: 'Español' },
          { value: 'zh', right: '🇨🇳', title: '中文' },
          { value: 'kr', right: '🇰🇷', title: '한국어' },
        ],
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports
      }
    }
  }
};

export default preview;
