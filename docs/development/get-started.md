## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

When working on UI components. To launch the storybook you will need to launch the script in another terminal:

```bash
npm run storybook
```

### npm scripts

| Script(s)         | Description                            |
| ----------------- | -------------------------------------- |
| `dev`             | Run server next.js mode development    |
| `build`           | Build project next.js                  |
| `lint`            | lint project next.js                   |
| `storybook`       | Launch storybook to run components UI. |
| `build:storybook` | Build storybook                        |

### Important files and folders

| Files(s)         | Description                                                                                                                                                                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `components/ui`  | Components atomic of Design System without logic business.                                                                                                                                                                                                                     |
| `components/cdk` | Components with logic business                                                                                                                                                                                                                                                 |
| `context`        | Functions to handle state application                                                                                                                                                                                                                                          |
| `lib`            | In this folder, you can place shared JavaScript code that isn't a page or component, such as utilities or helper functions.                                                                                                                                                    |
| `pages`          | This folder is essential in Next.js and contains the routes and pages of your application. Each JavaScript (or TypeScript) file within this folder becomes an accessible route in your application. For example, `/pages/index.tsx` corresponds to the main page of your site. |
| `styles`         | If you are using CSS to style your application, you can place style files (CSS, SCSS, etc.) in this folder. These styles can be imported into your components.                                                                                                                 |
| `queries`        | Queries to access literals sanity CMS                                                                                                                                                                                                                                          |
| `store`          | This folder handle data global app with Redux tools.                                                                                                                                                                                                                           |
| `stories`        | This folder handle examples storybook                                                                                                                                                                                                                                          |

### Storybook

Inside the stories directory, create a file for your story where you define how the component is displayed in Storybook. For example, you can create a file Component.stories.tsx

```jsx
// stories/Component.stories.tsx


import { ExampleComponent } from "@/components/ui/ExampleComponent";
import type { Meta, StoryObj } from "@storybook/react";


// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button"
  }
};

export const Warning: Story = {
  args: {
    primary: true,
    label: "Warning"
  }
};



```
