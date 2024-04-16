import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Krist',
    brandUrl: 'https://example.com',
    brandImage: '/logo.png',
    brandTarget: '_self',

    colorSecondary: '#000000',

    appBg: '#f0f0f0',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#333',
    appBorderRadius: 4,

    textColor: '#333',
    textInverseColor: '#ffffff',

    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barHoverColor: '#585C6D',
    barBg: '#f0f0f0',
  }),
});
