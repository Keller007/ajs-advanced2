export default function destructuring(obj) {
  return obj.special.map(
    ({ id, name, description = "Описание недоступно", icon }) => ({
      id,
      name,
      description,
      icon,
    })
  );
}
