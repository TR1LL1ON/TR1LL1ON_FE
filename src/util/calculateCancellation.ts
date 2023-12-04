import { formatDateToMonthDay } from '@/util/util';

interface CancellationInfo {
  cancellationFee: string;
  isCancelable: boolean;
}

const MILLISECONDS_PER_DAY: number = 1000 * 3600 * 24;
const DAY_NAMES: string[] = [
  '(일)',
  '(월)',
  '(화)',
  '(수)',
  '(목)',
  '(금)',
  '(토)',
];

// 지정된 일 수를 뺀 날짜를 반환(취소불가일자 지정)
export const subtractDays = (date: string, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};

// 요일 구하기(월,화...)
export const getDayName = (date: Date): string => {
  return DAY_NAMES[date.getDay()];
};

export const calculateCancellation = (
  checkInDate: string,
): CancellationInfo => {
  const today = new Date();
  const checkIn = new Date(checkInDate);

  const daysUntilCheckIn = Math.ceil(
    (checkIn.getTime() - today.getTime()) / MILLISECONDS_PER_DAY,
  ); // 체크인까지 남은날 계산

  const freeCancellationDate = formatDateToMonthDay(checkInDate, 1);
  const freeCancellationDayName = getDayName(subtractDays(checkInDate, 1));

  let cancellationFee: string = `무료취소 (${freeCancellationDate} ${freeCancellationDayName} 00:00전까지)`;
  let isCancelable: boolean = true;

  if (daysUntilCheckIn <= 1) {
    cancellationFee = '취소 및 환불불가';
    isCancelable = false;
  }

  return { cancellationFee, isCancelable };
};
