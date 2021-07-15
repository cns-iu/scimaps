export const isHttp = (path: string) => {
  if (path.startsWith('http://') || path.startsWith('//https://')) {
    return true;
  } else {
    return false;
  }
};
