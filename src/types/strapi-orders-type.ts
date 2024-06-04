export interface StrapiOrdersType {
  data: StrapiOrderType[];
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

export interface StrapiOrderType {
  id: number;
  attributes: Attributes7;
}

interface Attributes7 {
  products: Product[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  amount: string;
  user: User;
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
  phone: string;
  role: Role;
  addresses: Addresses;
  avatar: Avatar;
  ratings: Ratings;
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

interface Ratings {
  data: Datum2[];
}

interface Datum2 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  rating: string;
  description: string;
}

interface Avatar {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
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
