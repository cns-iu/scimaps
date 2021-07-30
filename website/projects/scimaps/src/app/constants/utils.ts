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


export const getSegmentedDate = (dateString: string) => {
    const fullDate = new Date(new Date(dateString).toUTCString());
    const year = fullDate.getUTCFullYear();
    const date = ('0' + fullDate.getUTCDate()).slice(-2);
    const month = ('0' + (fullDate.getUTCMonth() + 1)).slice(-2);
    return [year, month, date];
};
