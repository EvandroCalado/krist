export interface StrapiFeaturedType {
  data: StrapiProduct[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiProduct {
  id: number;
  attributes: Attributes11;
}

interface Attributes11 {
  title: string;
  subTitle: string;
  description: string;
  inStock: boolean;
  price: number;
  discountPercentage: null | number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
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
  data: (Datum3 | Data24)[];
}

interface Data24 {
  id: number;
  attributes: Attributes10;
}

interface Attributes10 {
  name: string;
  color: null | string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  product: Product2;
}

interface Datum3 {
  id: number;
  attributes: Attributes9;
}

interface Attributes9 {
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  product: Product;
}

interface Sizes {
  data: (Datum2 | Data23)[];
}

interface Data23 {
  id: number;
  attributes: Attributes8;
}

interface Attributes8 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  product: Product;
}

interface Datum2 {
  id: number;
  attributes: Attributes7;
}

interface Attributes7 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  product: Product2;
}

interface Categories {
  data: (Datum | Data22)[];
}

interface Data22 {
  id: number;
  attributes: Attributes6;
}

interface Attributes6 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  product: Product2;
  cover: Cover;
}

interface Product2 {
  data: Data4;
}

interface Data4 {
  id: number;
  attributes: Attributes5;
}

interface Attributes5 {
  title: string;
  subTitle: string;
  description: string;
  inStock: boolean;
  price: number;
  discountPercentage: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}

interface Datum {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  product: Product;
  cover: Cover;
}

interface Product {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  title: string;
  subTitle: string;
  description: string;
  inStock: boolean;
  price: number;
  discountPercentage: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
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
