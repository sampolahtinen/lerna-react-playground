
// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import { View, ViewProps } from './View';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'packages/core',
  component: View,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ViewProps> = (args) => <View {...args} />

export const ViewStory = Template.bind({});
ViewStory.storyName = "View"
ViewStory.args = {
  /*👇 The args you need here will depend on your component */
};