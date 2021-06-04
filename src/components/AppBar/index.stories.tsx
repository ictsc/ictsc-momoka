import React from 'react';
import { AppBar, AppBarProps } from '.';

export default {
  title: 'Components/AppBar',
  component: AppBar,
};

export const Default = (args: AppBarProps) => <AppBar {...args} />;

export const IsAdmin = Default.bind({
  isAdmin: true,
});
