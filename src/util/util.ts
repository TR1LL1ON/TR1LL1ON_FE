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
};

export const removeCookie = (): void => {
  try {
    document.cookie = 'accessToken=; max-age=0;path=/';
  } catch (err) {
    console.log(err);
  }
};
