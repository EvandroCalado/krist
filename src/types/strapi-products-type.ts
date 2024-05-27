export interface StrapiProductsType {
  data: StrapiProductType[];
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

interface StrapiProductType {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  title: string;
  subTitle: string;
  description: string;
  discountPercentage: null | number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
  cover: Cover;
  brand: Brand;
  categories: Categories;
  variants: Variant[];
}

interface Variant {
  id: number;
  name: string;
  price: number;
  discountPercentage: null | number | number;
  color: string;
  images: Images;
  sizes: Size[];
}

interface Size {
  id: number;
  size: string;
  quantity: null | null | number | number | number | number;
}

interface Images {
  data: Data[];
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
