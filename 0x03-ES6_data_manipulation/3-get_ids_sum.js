/* eslint-disable consistent-return */
export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) {
    const ids = list.map((obj) => obj.id);

    const sum = ids.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (sum);
  }
}
