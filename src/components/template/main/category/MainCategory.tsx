import { useState } from 'react';
import {
  StyledCategoryButton,
  StyledCategoryContainer,
  StyledCategoryText,
} from '@/style/main/mainCategory';
import { categoryList, iconMap } from './categoryList';
import { useLocation, useNavigate } from 'react-router-dom';

const MainCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigation = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);

    const params = new URLSearchParams(location.search);
    params.set('category', category);
    navigation(`/?${params.toString()}`, { replace: true });
  };

  // console.log(categoryList);

  return (
    <StyledCategoryContainer>
      {categoryList?.map((category) => {
        const CategoryIcon = iconMap[category.code];

        return (
          <StyledCategoryButton
            key={category.code}
            onClick={() => handleCategoryClick(category.code)}
            data-selected={selectedCategory === category.code}>
            <CategoryIcon size={24} />
            <StyledCategoryText>{category.name}</StyledCategoryText>
          </StyledCategoryButton>
        );
      })}
    </StyledCategoryContainer>
  );
};

export default MainCategory;
