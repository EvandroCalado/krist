export interface StrapiColorsType {
  data: Datum[];
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

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  color: null | string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
