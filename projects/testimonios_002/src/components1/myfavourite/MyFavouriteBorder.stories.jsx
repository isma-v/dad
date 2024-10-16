import React from 'react';
import MyFavouriteBorder from './MyFavouriteBorder';

export default {
  title: 'Components/MyFavouriteBorder',
  component: MyFavouriteBorder,
};

const Template = (args) => <MyFavouriteBorder {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconColor: 'default',
  disabled: false,
  onClick: () => alert('Clicked!'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  iconColor: 'default',
  disabled: true,
  onClick: () => alert('Clicked!'),
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  iconColor: 'blue',
  disabled: false,
  onClick: () => alert('Clicked!'),
};