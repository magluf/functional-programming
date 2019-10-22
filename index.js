console.clear();
const reviews = [
  'casa',
  'apartamento',
  'casa',
  'casa',
  'apartamento',
  'casa',
  'apartamento',
  'apartamento',
  'apartamento'
];

const groupBy = (acc, item) => {
  const count = acc[item] || 0;
  return { ...acc, [item]: count + 1 };
};

const count = reviews.reduce(groupBy, {});
console.log(count);
