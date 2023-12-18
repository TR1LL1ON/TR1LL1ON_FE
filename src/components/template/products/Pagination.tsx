import { StyledPageBtn, StyledPagination } from '@/style/products/reviewStyle';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <StyledPagination>
      {Array.from({ length: pageCount }, (_, i) => (
        <StyledPageBtn
          className={currentPage === i ? 'active' : ''}
          key={i}
          onClick={() => setCurrentPage(i)}
          style={{ margin: '10px 5px' }}>
          {i + 1}
        </StyledPageBtn>
      ))}
    </StyledPagination>
  );
};

export default Pagination;
