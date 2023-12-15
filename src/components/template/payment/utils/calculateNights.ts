export const calculateNights = (checkIn: string, checkOut: string) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diff = checkOutDate.getTime() - checkInDate.getTime();
  const nights = diff / (1000 * 60 * 60 * 24);
  return nights;
};
