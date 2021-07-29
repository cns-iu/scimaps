export const isHttp = (path: string) => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return true;
  } else {
    return false;
  }
};

export const isExternal = (url: string): boolean => {
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto') || url.startsWith('tel')) {
    return true;
  } else {
    return false;
  }
};
