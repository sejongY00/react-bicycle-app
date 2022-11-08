const BICYCLE_URL = (serviceKey, searchYearCd, siDo, guGun) => {
  return `https://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?serviceKey=${serviceKey}&searchYearCd=${searchYearCd}&siDo=${siDo}&guGun=${guGun}&type=json&numOfRows=10&pageNo=1`;
};

export { BICYCLE_URL };
