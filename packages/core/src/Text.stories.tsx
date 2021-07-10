
// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from './Text';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'packages/core',
  component: Text,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<TextProps> = (args) => <Text {...args}>Text</Text>

export const TextStory = Template.bind({});
TextStory.storyName = "Text"
TextStory.args = {
  /*👇 The args you need here will depend on your component */
};