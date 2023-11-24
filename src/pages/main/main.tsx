import MainContainer from '../../components/template/main';
import MainCategory from '../../components/template/main/category/MainCategory';
import { postLogin } from '../../api/service';

const Main = () => {
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await postLogin();
      console.log(res);
    } catch (e: any) {}
  };

  return (
    <div>
      <button onClick={handleLoginSubmit}>로그인</button>
      <MainCategory />
      <MainContainer></MainContainer>
    </div>
  );
};

export default Main;
