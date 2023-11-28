import { LuCar, LuPartyPopper, LuSoup, LuUtensils } from 'react-icons/lu';
import { FaSwimmingPool } from 'react-icons/fa';

function ProductsFacilityList() {
  return (
    <>
      <p>
        <LuCar /> 주차 가능
      </p>
      <p>
        <LuUtensils /> 조식 제공
      </p>
      <p>
        <LuSoup /> 취사 가능
      </p>
      <p>
        <LuPartyPopper /> 파티
      </p>
      <p>
        <FaSwimmingPool /> 수영장
      </p>
    </>
  );
}

export default ProductsFacilityList;
