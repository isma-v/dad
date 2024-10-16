import React from 'react';
import MyFavourite from './MyFavourite';

export default {
  title: 'Components/MyFavourite',
  component: MyFavourite,
  argTypes: {
    iconColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <MyFavourite {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconColor: 'red',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  iconColor: 'gray',
  disabled: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  iconColor: 'blue',
  disabled: false,
};