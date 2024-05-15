import { Heart, MapPin, Package, Settings, UserRound } from 'lucide-react';

export const linksProfileMenu = [
  {
    id: 1,
    label: 'informações pessoais',
    path: 'profile',
    icon: <UserRound />,
  },
  {
    id: 2,
    label: 'meus pedidos',
    path: 'orders',
    icon: <Package />,
  },
  {
    id: 3,
    label: 'lista de desejos',
    path: 'wishlist',
    icon: <Heart />,
  },
  {
    id: 4,
    label: 'meus endereços',
    path: 'addresses',
    icon: <MapPin />,
  },
  {
    id: 5,
    label: 'configurar',
    path: 'settings',
    icon: <Settings />,
  },
];
