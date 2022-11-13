import { useEffect } from 'react';

export const ClickoutsideHook = (ref: any, handler: any, tooltip: string) => {
  useEffect(() => {
    let maybeHandler = (e: any) => {
      if (!ref.current.contains(e.target)) {
        handler('close', tooltip);
      } else {
        handler('open', tooltip);
      }
    };
    document.addEventListener('mousedown', maybeHandler);
    return () => document.removeEventListener('mousedown', maybeHandler);
  }, [handler, ref, tooltip]);
};
