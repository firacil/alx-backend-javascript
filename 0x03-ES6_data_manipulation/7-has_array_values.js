/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let verd = true;
  list.map((x) => {
    if (!set.has(x)) {
      verd = false;
    }
  });

  return verd;
}
