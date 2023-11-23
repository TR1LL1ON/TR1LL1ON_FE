import { useState } from 'react';
import {
  StyledCategoryButton,
  StyledCategoryContainer,
  StyledCategoryText,
} from '../../../../style/main/mainCategory';
import { categoryList, iconMap } from './categoryList';

const MainCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('관광호텔');

  return (
    <StyledCategoryContainer>
      {categoryList.map((category) => {
        const CategoryIcon = iconMap[category.code];

        return (
          <StyledCategoryButton
            key={category.code}
            onClick={() => setSelectedCategory(category.name)}
            data-selected={selectedCategory === category.name}>
            <CategoryIcon size={24} />
            <StyledCategoryText>{category.name}</StyledCategoryText>
          </StyledCategoryButton>
        );
      })}
    </StyledCategoryContainer>
  );
};

export default MainCategory;
