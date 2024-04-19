import { Box, CircleDollarSign, CreditCard, Headphones } from 'lucide-react';

import * as S from './Services.styles';

const services = [
  {
    id: 1,
    icon: <Box />,
    title: 'frete grátis',
    description: 'frete gratis para compras acima de R$ 100,00',
  },
  {
    id: 2,
    icon: <CircleDollarSign />,
    title: 'garantia',
    description: 'trinta dias para reembolso',
  },
  {
    id: 3,
    icon: <Headphones />,
    title: 'suporte online',
    description: '24 horas por dia, 7 dias por semana',
  },
  {
    id: 4,
    icon: <CreditCard />,
    title: 'pagamento flexível',
    description: 'multiplas opções de pagamento',
  },
];

export const Services = () => {
  return (
    <S.Container>
      {services.map((service) => (
        <S.Card key={service.id}>
          {service.icon}
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </S.Card>
      ))}
    </S.Container>
  );
};
