export const handleError = (msg: string, silent: boolean): string => {
  if (silent) {
    console.error(`%c${msg}`, 'color: #e74c3c');
    return msg;
  }
  throw new Error(msg);
};
