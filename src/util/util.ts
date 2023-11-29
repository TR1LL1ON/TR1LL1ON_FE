export const setCookie = (accessToken: string) => {
  try {
    document.cookie = `accessToken=${accessToken}`;
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
