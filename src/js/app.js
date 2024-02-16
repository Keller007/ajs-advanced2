export default function orderByProps(obj, sort) {
  const clonedObj = { ...obj };

  const sortedProps = sort
    .filter((key) => clonedObj.hasOwnProperty(key))
    .map((key) => ({ key, value: clonedObj[key] }));
	
  const remainingProps = Object.keys(clonedObj)
    .filter((key) => !sort.includes(key))
    .map((key) => ({ key, value: clonedObj[key] }))
    .sort((a, b) => a.key.localeCompare(b.key));
  return [...sortedProps, ...remainingProps];
}
