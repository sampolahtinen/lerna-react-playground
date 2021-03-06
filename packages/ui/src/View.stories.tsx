
// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import { View, ViewProps } from './View';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'packages/ui',
  component: View,
} as Meta;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ViewProps> = (args) => <View {...args} />

export const ViewStory = Template.bind({});
ViewStory.storyName = "View"
ViewStory.args = {
  /*๐ The args you need here will depend on your component */
};