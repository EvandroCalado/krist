export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  return date.toLocaleString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
