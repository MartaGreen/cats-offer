const idGenerator = (): string => {
  return `c_${Math.floor(Math.random() * 100)}`;
};

export default idGenerator;
