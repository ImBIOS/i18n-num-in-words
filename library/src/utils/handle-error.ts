export const handleError = (msg: string, silent: boolean): string => {
  if (silent) {
    console.error(msg);
    return msg;
  }
  throw new Error(msg);
};
