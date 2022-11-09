const createYears = () => {
  let years = [];
  for (var i = 2020; i >= 2012; i--) {
    years.push(i);
  }
  return years;
};
const years = createYears();

export default years;
