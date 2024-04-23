export interface StrapiConfigType {
  data: Data3;
  meta: Meta;
}

interface Meta {}

interface Data3 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: Logo;
  navLinks: NavLink[];
  hero: Hero[];
}

interface Hero {
  id: number;
  title: string;
  subTitle: string;
  off: string;
  banner: Banner;
  button: Button;
}

interface Button {
  id: number;
  label: string;
  variant: string;
  width: boolean;
  icon: boolean;
}

interface Banner {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
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
  small: Small;
  medium: Small;
  thumbnail: Small;
  large?: Small;
}

interface Small {
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

interface NavLink {
  id: number;
  name: string;
  link: string;
}

interface Logo {
  id: number;
  isBlack: boolean;
  black: Black;
  white: Black;
}

interface Black {
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
  formats: null;
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

interface Providermetadata {
  public_id: string;
  resource_type: string;
}
