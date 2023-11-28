import { createPortal } from 'react-dom';
import { StyledRegionContainer } from './Region.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { REGION_CODE } from '@/constants';
import { StyledButton } from '@/style/common/commonStyle';

const RegionList = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (region: number) => {
    const params = new URLSearchParams(location.search);
    params.set('areacode', region.toString());
    navigation(`/?${params.toString()}`, { replace: true });
  };

  return createPortal(
    <StyledRegionContainer>
      {Object.entries(REGION_CODE).map((code, index) => {
        const [name, rcode] = code;
        return (
          <StyledButton
            key={`${index}=${rcode}`}
            onClick={() => handleCategoryClick(rcode)}>
            {name}
          </StyledButton>
        );
      })}
    </StyledRegionContainer>,
    document.body,
  );
};

export default RegionList;
