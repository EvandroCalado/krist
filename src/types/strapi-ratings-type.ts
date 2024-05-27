export interface StrapiRatingsType {
  data: StrapiRatingType[];
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

export interface StrapiRatingType {
  id: number;
  attributes: Attributes10;
}

interface Attributes10 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  rating: string;
  description: string;
  user: User;
  product: Product2;
}

interface Product2 {
  data: Data6;
}

interface Data6 {
  id: number;
  attributes: Attributes9;
}

interface Attributes9 {
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
  wishlists: Wishlists2;
}

interface Wishlists2 {
  data: string[];
}

interface Variant {
  id: number;
  name: string;
  price: number;
  discountPercentage: null | number;
  color: string;
}

interface Categories {
  data: Data5[];
}

interface Brand {
  data: Data5;
}

interface Data5 {
  id: number;
  attributes: Attributes8;
}

interface Attributes8 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Cover {
  data: Data4;
}

interface Data4 {
  id: number;
  attributes: Attributes7;
}

interface Attributes7 {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats2;
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

interface Formats2 {
  large: Thumbnail;
  small: Thumbnail;
  medium: Thumbnail;
  thumbnail: Thumbnail;
}

interface User {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes6;
}

interface Attributes6 {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  phone: null | string;
  role: Role;
  addresses: Addresses;
  orders: Orders;
  avatar: Avatar;
  wishlists: Wishlists;
}

interface Wishlists {
  data: Datum3[];
}

interface Datum3 {
  id: number;
  attributes: Attributes5;
}

interface Attributes5 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Avatar {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
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
  thumbnail: Thumbnail;
  large?: Thumbnail;
  small?: Thumbnail;
  medium?: Thumbnail;
}

interface Thumbnail {
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

interface Orders {
  data: Datum2[];
}

interface Datum2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  products: Product[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  amount: string;
}

interface Product {
  size: string;
  color: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  cartId: string;
  quantity: number;
  productId: number;
}

interface Addresses {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  address: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
}

interface Role {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}
