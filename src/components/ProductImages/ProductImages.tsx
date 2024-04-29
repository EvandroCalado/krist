// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FC, useEffect, useRef } from 'react';

import '@splidejs/react-splide/css';
import { StrapiProductImage } from 'types';

import * as S from './ProductImages.styles';

export interface ProductImagesProps {
  currentImagesData: StrapiProductImage;
}

export const ProductImages: FC<ProductImagesProps> = ({
  currentImagesData,
}) => {
  const mainRef = useRef<Splide | undefined>(null);
  const thumbsRef = useRef<Splide | undefined>(null);

  const { assets, name } = currentImagesData;

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderImages = (classCustom: string) => {
    return assets.data.map((image) => (
      <SplideSlide className={classCustom} key={image.id}>
        <img src={image.attributes.formats.small.url} alt={name} />
      </SplideSlide>
    ));
  };

  return (
    <S.Container>
      <Splide
        ref={mainRef}
        options={{
          type: 'slide',
          perPage: 1,
          perMove: 1,
          gap: '1rem',
          arrows: false,
          pagination: false,
        }}
      >
        {renderImages('product-image')}
      </Splide>

      <Splide
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
          focus: 'left',
          arrows: false,
        }}
      >
        {renderImages('thumb-image')}
      </Splide>
    </S.Container>
  );
};
