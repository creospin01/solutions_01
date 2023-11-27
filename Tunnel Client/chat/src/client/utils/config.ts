export const getConfig = () => ({
  MAX_USER_NAME_SYMBOLS: Number(process.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS || 0) || 15,
  MAX_ROOM_NAME_SYMBOLS: Number(process.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS || 0) || 30,
  MAX_MESSAGE_SYMBOLS: Number(process.env.NEXT_PUBLIC_MAX_MESSAGE_SYMBOLS || 0) || 500,
  PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
});
