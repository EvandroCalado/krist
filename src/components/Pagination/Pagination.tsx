import { MoveLeft, MoveRight } from 'lucide-react';
import { FC } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import { Button } from 'components';
import { StrapiProductsType } from 'types';

import * as S from './Pagination.styles';

export interface PaginationProps {}

export const Pagination: FC<PaginationProps> = () => {
  const { meta } = useLoaderData() as {
    meta: StrapiProductsType['meta'];
  };

  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (currentPage: number) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', currentPage.toString());

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <S.PaginationContainer className="pagination">
      <Button
        onClick={() => {
          let prevPage = page - 1;
          if (prevPage < 1) prevPage = 1;
          handlePageChange(prevPage);
        }}
        disabled={page === 1}
        variant="secondary"
      >
        <MoveLeft size={16} />
      </Button>

      <S.PaginationPages>
        {pages.map((currentPage) => (
          <Button
            key={currentPage}
            variant="secondary"
            className={currentPage === page ? 'active' : ''}
            onClick={() => handlePageChange(currentPage)}
          >
            {currentPage}
          </Button>
        ))}
      </S.PaginationPages>

      <Button
        onClick={() => {
          let nextPage = page + 1;
          if (nextPage > pageCount) nextPage = pageCount;
          handlePageChange(nextPage);
        }}
        disabled={page === pageCount}
        variant="secondary"
      >
        <MoveRight size={16} />
      </Button>
    </S.PaginationContainer>
  );
};
