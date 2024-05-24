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

export interface StrapiOrderType {
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
}

interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}
