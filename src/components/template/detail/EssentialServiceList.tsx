import { LuTv, LuSiren, LuWifi } from 'react-icons/lu';
import { PiHandSoapBold, PiFireExtinguisherBold } from 'react-icons/pi';
import { LiaFireExtinguisherSolid } from 'react-icons/lia';

const EssentialServiceList = () => {
  return (
    <>
      <p>
        <LuTv /> TV
      </p>
      <p>
        <LuWifi /> 무선인터넷
      </p>
      <p>
        <PiHandSoapBold /> 세면도구
      </p>
      <p>
        <PiFireExtinguisherBold /> 소화기
      </p>
      <p>
        <LuSiren /> 화재경보기
      </p>
    </>
  );
};

export default EssentialServiceList;
