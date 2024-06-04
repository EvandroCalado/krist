export interface StrapiUserType {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  phone: string;
  role: Role;
  addresses: Address[];
  orders: StrapiOrderType[];
  avatar: Avatar;
  ratings: Rating2[];
  wishlists: StrapiWishlistType[];
}

export interface StrapiWishlistType {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user: User4;
  product: Product3;
}

interface Product3 {
  id: number;
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
  categories: Brand[];
  variants: Variant2[];
}

interface Variant2 {
  id: number;
  name: string;
  price: number;
  discountPercentage: number;
  color: string;
}

interface User4 {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  phone: string;
  role: Role;
  avatar: Avatar;
}

interface Rating2 {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  rating: string;
  description: string;
  user: User3;
  product: Product2;
}

interface Product2 {
  id: number;
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
  categories: Brand[];
  variants: Variant[];
  wishlists: StrapiWishlistType[];
}

interface Variant {
  id: number;
  name: string;
  price: number;
  discountPercentage: null | number;
  color: string;
}

interface Brand {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Cover {
  id: number;
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

interface User3 {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  phone: string;
  role: Role;
  avatar: Avatar;
  wishlists: Wishlist[];
}

interface StrapiOrderType {
  id: number;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  amount: string;
  user: User2;
}

interface User2 {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  phone: string;
  role: Role;
  avatar: Avatar;
  ratings: Rating[];
  wishlists: Wishlist[];
}

interface Address {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  address: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
  user: User;
}

interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  phone: string;
  role: Role;
  orders: Order[];
  avatar: Avatar;
  ratings: Rating[];
  wishlists: Wishlist[];
}

interface Wishlist {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Rating {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  rating: string;
  description: string;
}

interface Avatar {
  id: number;
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

interface Order {
  id: number;
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

interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}
