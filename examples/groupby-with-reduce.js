const reviews = [
  4.0,
  1.5,
  2.5,
  3.0,
  2.5,
  1.0,
  2.5,
  1.5,
  1.5,
  1.5,
  3.0,
  5.0,
  4.5,
  4.0
];

const groupBy = (acc, item) => {
  const count = acc[item] || 0;
  return { ...acc, [item]: count + 1 };
};

const count = reviews.reduce(groupBy, {});
console.log(count);
