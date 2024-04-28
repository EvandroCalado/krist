export interface StrapiProductType {
  data: Data3;
  meta: Meta;
}

interface Meta {}

interface Data3 {
  id: number;
  attributes: Attributes5;
}

interface Attributes5 {
  title: string;
  subTitle: string;
  description: string;
  inStock: boolean;
  price: number;
  discountPercentage: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Cover;
  brand: Brand;
  categories: Categories;
  sizes: Sizes;
  colors: Colors;
  images: Image[];
}

interface Image {
  id: number;
  name: string;
  assets: Assets;
}

interface Assets {
  data: Data[];
}

interface Colors {
  data: Datum2[];
}

interface Datum2 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Sizes {
  data: Data2[];
}

interface Categories {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Cover;
}

interface Brand {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Cover {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}
