export interface StrapiAddressesType {
  data: StrapiAddressType[];
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

export interface StrapiAddressType {
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
  user: User;
}

interface User {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}
