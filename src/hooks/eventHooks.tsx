import { useEffect } from 'react';

export const ClickoutsideHook = (ref: any, handler: any, tooltip: string) => {
  useEffect(() => {
    let maybeHander = (e: any) => {
      if (!ref.current.contains(e.target)) {
        handler('close', tooltip);
      } else {
        handler('open', tooltip);
      }
    };
    document.addEventListener('mousedown', maybeHander);
    return () => document.removeEventListener('mousedown', maybeHander);
  }, []);
};
