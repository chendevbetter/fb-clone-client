export const stringFunctionGuard = (
  str: string
): boolean | { error: string } => {
  if (typeof str !== 'string') {
    return { error: 'not a string' };
  }

  if (str.length === 0) {
    return { error: 'string is empty' };
  }

  return true;
};
