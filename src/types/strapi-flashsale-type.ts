export interface StrapiFlashSaleType {
  data: Datum2[];
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

interface Datum2 {
  id: number;
  attributes: Attributes5;
}

interface Attributes5 {
  title: string;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  button: Button[];
  product: Product;
}

interface Product {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
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
  cover: Cover;
  brand: Brand;
  categories: Categories;
  sizes: Categories;
  colors: Colors;
  images: Image[];
}

interface Image {
  id: number;
  name: string;
}

interface Colors {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Categories {
  data: Data2[];
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

interface Button {
  id: number;
  label: string;
  variant: string;
  width: boolean;
  icon: boolean;
}
