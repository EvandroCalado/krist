// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Splide } from '@splidejs/react-splide';
import { FC, useEffect, useRef } from 'react';

import '@splidejs/react-splide/css';
import * as S from './ProductImages.styles';

export interface ProductImagesProps {}

const test = [
  {
    src: '/hero1.png',
  },
  {
    src: '/hero2.png',
  },
  {
    src: '/hero1.png',
  },
];

export const ProductImages: FC<ProductImagesProps> = () => {
  const mainRef = useRef<Splide | undefined>(null);
  const thumbsRef = useRef<Splide | undefined>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderImages = (classCustom: string) => {
    return test.map((image) => (
      <S.SplideSlide className={classCustom} key={image.src}>
        <img src={image.src} alt="image" />
      </S.SplideSlide>
    ));
  };

  return (
    <S.Container>
      <S.Splide
        ref={mainRef}
        options={{
          type: 'fade',
          perPage: 1,
          perMove: 1,
          gap: '1rem',
          arrows: false,
          pagination: false,
        }}
      >
        {renderImages('product-image')}
      </S.Splide>

      <S.Splide
        ref={thumbsRef}
        options={{
          type: 'slide',
          rewind: true,
          gap: '1rem',
          pagination: false,
          fixedWidth: 120,
          fixedHeight: 90,
          cover: true,
          isNavigation: true,
          focus: 'center',
          arrows: false,
        }}
      >
        {renderImages('thumb-image')}
      </S.Splide>
    </S.Container>
  );
};
