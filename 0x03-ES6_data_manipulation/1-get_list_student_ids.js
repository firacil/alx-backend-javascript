export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    const ids = list.map((obj) => obj.id);
    return (ids);
  }
  return [];
}
