import { Search as SearchIcon } from 'lucide-react';
import { DetailedHTMLProps, FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as S from './Search.styles';

export interface SearchProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Search: FC<SearchProps> = ({ ...rest }) => {
  const query = useSearchParams()[0].get('q');

  return (
    <S.SearchContainer className="search" action="/shop" method="get">
      <input type="search" name="q" defaultValue={query || ''} {...rest} />

      <SearchIcon size={18} />
    </S.SearchContainer>
  );
};
