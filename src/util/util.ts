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

export const formatDate = (date: Date): string => {
  const year: number = date.getFullYear();
  const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
  const day: string = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatDateToMonthDay = (
  dateString: string | undefined,
  daysToSubtract?: number,
): string => {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString);
  date.setDate(date.getDate() - (daysToSubtract || 0)); // 지정된 일 수를 뺌, 값이 없으면 0으로 처리

  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
  const day = date.getDate();

  // 'MM.DD' 형식으로 반환. 월과 일이 한 자리 수일 경우 앞에 '0'을 붙임
  return `${month.toString().padStart(2, '0')}.${day
    .toString()
    .padStart(2, '0')}`;
};

