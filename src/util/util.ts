export const setCookie = (accessToken: string) => {
  try {
    document.cookie = `accessToken=${accessToken};max-age=3600;path=/;secure`;
  } catch (err) {
    console.log(err);
    alert('쿠키 설정에 실패했습니다.');
  }
};

export const getCookie = (name: string): string | undefined => {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];

  return cookieValue || undefined;
}

export const setCookie = async (accessToken: string) => {
  try {
    document.cookie = `accessToken=${accessToken};max-age=360000;path=/;secure`;
  } catch (e) {
    console.error(e);
    alert('쿠키설정에 실패했습니다.');
  }
};
