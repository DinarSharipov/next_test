import { useState } from 'react';

export const useChangeObserver = (object: Object) => {
  const [isDirty, setIsDirty] = useState(false);

  const changePipe = (obj: Object, key: string | Symbol, value: unknown) => {
    setIsDirty(true);
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    obj[key] = value;
    return true;
  };

  const proxyObject = new Proxy(object, {
    set: changePipe,
  });

  return { isDirty, proxyObject };
};
