export interface StrapiProductType {
  data: Data5;
  meta: Meta;
}

interface Meta {}

interface Data5 {
  id: number;
  attributes: Attributes8;
}

interface Attributes8 {
  title: string;
  subTitle: string;
  description: string;
  discountPercentage: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
  cover: Cover;
  brand: Brand;
  categories: Categories;
  variants: Variant[];
  ratings: Ratings;
  wishlists: Wishlists;
}

interface Wishlists {
  data: Datum3[];
}

interface Datum3 {
  id: number;
  attributes: Attributes7;
}

interface Attributes7 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user: User;
  product: Product;
}

interface Ratings {
  data: Datum2[];
}

interface Datum2 {
  id: number;
  attributes: Attributes6;
}

interface Attributes6 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  rating: string;
  description: string;
  user: User;
  product: Product;
}

interface Product {
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
  discountPercentage: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}

interface User {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  phone: string;
  avatar: Cover;
}

interface Variant {
  id: number;
  name: string;
  price: number;
  discountPercentage: null | number;
  color: string;
  images: Images;
  sizes: Size[];
}

interface Size {
  id: number;
  size: string;
  quantity: null | number;
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
