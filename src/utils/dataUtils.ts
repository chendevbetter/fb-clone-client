export const returnObjWithRandomKey = (
  key: string | number,
  value: string | number
) => {
  const iteratedKey = Math.random();
  return { key: value, iteratedKey };
};

export const returnValOfPropInObjInArr = (
  arr: any[],
  key: string,
  prop: string,
  valToReturn: string
) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === prop) {
      return arr[i][valToReturn];
    }
  }
  return "not found";
};
