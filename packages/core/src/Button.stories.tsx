
// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'packages/core',
  component: Button,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>

export const FirstStory = Template.bind({});
FirstStory.storyName = "Button"
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};