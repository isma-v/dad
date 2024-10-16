import React from 'react';
import IsmaelVH from './IsmaelVH';

export default {
  title: 'Components/IsmaelVH',
  component: IsmaelVH,
  argTypes: {
    firstName: { control: 'text' },
    lastName: { control: 'text' },
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <IsmaelVH {...args} />;

export const Default = Template.bind({});
Default.args = {
  firstName: 'Ismael',
  lastName: 'Valeron',
  bgColor: 'blue',
  textColor: 'white',
  size: 'medium',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  firstName: 'Ismael',
  lastName: 'Valeron',
  bgColor: 'green',
  textColor: 'black',
  size: 'medium',
};

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
  firstName: 'Ismael',
  lastName: 'Valeron',
  bgColor: 'purple',
  textColor: 'white',
  size: 'large',
};

export const Clickable = Template.bind({});
Clickable.args = {
  firstName: 'Ismael',
  lastName: 'Valeron',
  bgColor: 'red',
  textColor: 'white',
  size: 'medium',
  onClick: () => alert('Avatar clicked!'),
};