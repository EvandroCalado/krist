import { Meta, StoryFn } from '@storybook/react';

import { RatingsCarousel, RatingsCarouselProps } from '.';

export const ratings = [
  {
    id: 1,
    rating: 3,
    ratingDescription:
      'Esta camisa é de alta qualidade, com um tecido suave e durável. Seu design simples, mas elegante, a torna versátil para diversas ocasiões. O ajuste é confortável, permitindo liberdade de movimento, e a camisa mantém sua forma mesmo após várias lavagens. O preço é justo considerando sua qualidade e durabilidade. Em geral, é uma excelente escolha.',
    avatar:
      'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611762.jpg?w=826&t=st=1713491585~exp=1713492185~hmac=08ba90f79cafc9a795e191d5f3833a9f1f73184a0d936d5a6e0187a4c100d8fe',
    name: 'joão',
    profession: 'programador',
  },
  {
    id: 2,
    rating: 3,
    ratingDescription:
      'Esta camisa é de alta qualidade, com um tecido suave e durável. Seu design simples, mas elegante, a torna versátil para diversas ocasiões. O ajuste é confortável, permitindo liberdade de movimento, e a camisa mantém sua forma mesmo após várias lavagens. O preço é justo considerando sua qualidade e durabilidade. Em geral, é uma excelente escolha.',
    avatar:
      'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611762.jpg?w=826&t=st=1713491585~exp=1713492185~hmac=08ba90f79cafc9a795e191d5f3833a9f1f73184a0d936d5a6e0187a4c100d8fe',
    name: 'joão',
    profession: 'programador',
  },
  {
    id: 3,
    rating: 3,
    ratingDescription:
      'Esta camisa é de alta qualidade, com um tecido suave e durável. Seu design simples, mas elegante, a torna versátil para diversas ocasiões. O ajuste é confortável, permitindo liberdade de movimento, e a camisa mantém sua forma mesmo após várias lavagens. O preço é justo considerando sua qualidade e durabilidade. Em geral, é uma excelente escolha.',
    avatar:
      'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611762.jpg?w=826&t=st=1713491585~exp=1713492185~hmac=08ba90f79cafc9a795e191d5f3833a9f1f73184a0d936d5a6e0187a4c100d8fe',
    name: 'joão',
    profession: 'programador',
  },
  {
    id: 4,
    rating: 3,
    ratingDescription:
      'Esta camisa é de alta qualidade, com um tecido suave e durável. Seu design simples, mas elegante, a torna versátil para diversas ocasiões. O ajuste é confortável, permitindo liberdade de movimento, e a camisa mantém sua forma mesmo após várias lavagens. O preço é justo considerando sua qualidade e durabilidade. Em geral, é uma excelente escolha.',
    avatar:
      'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611762.jpg?w=826&t=st=1713491585~exp=1713492185~hmac=08ba90f79cafc9a795e191d5f3833a9f1f73184a0d936d5a6e0187a4c100d8fe',
    name: 'joão',
    profession: 'programador',
  },
];

export default {
  title: 'Components/RatingsCarousel',
  component: RatingsCarousel,
  args: {
    ratings,
  },
} as Meta;

export const Default: StoryFn<RatingsCarouselProps> = (args) => (
  <RatingsCarousel {...args} />
);
