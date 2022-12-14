const region = [
  {
    siDoName: "서울",
    siDoFull: "서울특별시",
    siDo: 11,
    guGuns: [
      { guGunName: "강남구", guGun: 680 },
      { guGunName: "강동구", guGun: 740 },
      { guGunName: "강북구", guGun: 305 },
      { guGunName: "강서구", guGun: 500 },
      { guGunName: "관악구", guGun: 620 },
      { guGunName: "광진구", guGun: 215 },
      { guGunName: "구로구", guGun: 530 },
      { guGunName: "금천구", guGun: 545 },
      { guGunName: "노원구", guGun: 350 },
      { guGunName: "도봉구", guGun: 320 },
      { guGunName: "동대문구", guGun: 230 },
      { guGunName: "동작구", guGun: 590 },
      { guGunName: "마포구", guGun: 440 },
      { guGunName: "서대문구", guGun: 410 },
      { guGunName: "서초구", guGun: 650 },
      { guGunName: "성동구", guGun: 200 },
      { guGunName: "성북구", guGun: 290 },
      { guGunName: "송파구", guGun: 710 },
      { guGunName: "양천구", guGun: 470 },
      { guGunName: "영등포구", guGun: 560 },
      { guGunName: "용산구", guGun: 170 },
      { guGunName: "은평구", guGun: 380 },
      { guGunName: "종로구", guGun: 110 },
      { guGunName: "중구", guGun: 140 },
      { guGunName: "중랑구", guGun: 260 },
    ],
  },
  {
    siDoName: "부산",
    siDoFull: "부산광역시",
    siDo: 26,
    guGuns: [
      { guGunName: "강서구", guGun: 440 },
      { guGunName: "금정구", guGun: 410 },
      { guGunName: "기장군", guGun: 710 },
      { guGunName: "남구", guGun: 290 },
      { guGunName: "동구", guGun: 170 },
      { guGunName: "동래구", guGun: 260 },
      { guGunName: "부산진구", guGun: 230 },
      { guGunName: "북구", guGun: 320 },
      { guGunName: "사상구", guGun: 530 },
      { guGunName: "사하구", guGun: 380 },
      { guGunName: "서구", guGun: 140 },
      { guGunName: "수영구", guGun: 500 },
      { guGunName: "연제구", guGun: 470 },
      { guGunName: "영도구", guGun: 200 },
      { guGunName: "중구", guGun: 110 },
      { guGunName: "해운대구", guGun: 350 },
    ],
  },
  {
    siDoName: "대구",
    siDoFull: "대구광역시",
    siDo: 27,
    guGuns: [
      { guGunName: "남구", guGun: 200 },
      { guGunName: "달서구", guGun: 290 },
      { guGunName: "달성군", guGun: 710 },
      { guGunName: "동구", guGun: 140 },
      { guGunName: "북구", guGun: 230 },
      { guGunName: "서구", guGun: 170 },
      { guGunName: "수성구", guGun: 260 },
      { guGunName: "중구", guGun: 110 },
    ],
  },
  {
    siDoName: "인천",
    siDoFull: "인천광역시",
    siDo: 28,
    guGuns: [
      { guGunName: "강화군", guGun: 710 },
      { guGunName: "계양구", guGun: 245 },
      { guGunName: "남구", guGun: 170 },
      { guGunName: "남동구", guGun: 200 },
      { guGunName: "동구", guGun: 140 },
      { guGunName: "부평구", guGun: 237 },
      { guGunName: "서구", guGun: 260 },
      { guGunName: "연수구", guGun: 185 },
      { guGunName: "옹진군", guGun: 720 },
      { guGunName: "중구", guGun: 110 },
    ],
  },
  {
    siDoName: "광주",
    siDoFull: "광주광역시",
    siDo: 29,
    guGuns: [
      { guGunName: "광산구", guGun: 200 },
      { guGunName: "남구", guGun: 115 },
      { guGunName: "동구", guGun: 110 },
      { guGunName: "북구", guGun: 170 },
      { guGunName: "서구", guGun: 140 },
    ],
  },
  {
    siDoName: "대전",
    siDoFull: "대전광역시",
    siDo: 30,
    guGuns: [
      { guGunName: "대덕구", guGun: 230 },
      { guGunName: "동구", guGun: 110 },
      { guGunName: "서구", guGun: 170 },
      { guGunName: "유성구", guGun: 200 },
      { guGunName: "중구", guGun: 140 },
    ],
  },
  {
    siDoName: "울산",
    siDoFull: "울산광역시",
    siDo: 31,
    guGuns: [
      { guGunName: "남구", guGun: 140 },
      { guGunName: "동구", guGun: 170 },
      { guGunName: "북구", guGun: 200 },
      { guGunName: "울주군", guGun: 710 },
      { guGunName: "중구", guGun: 110 },
    ],
  },
  {
    siDoName: "세종",
    siDoFull: "세종특별자치시",
    siDo: 36,
    guGuns: [{ guGunName: "세종특별자치시", guGun: 110 }],
  },
  {
    siDoName: "경기도",
    siDoFull: "경기도",
    siDo: 41,
    guGuns: [
      { guGunName: "가평군", guGun: 820 },
      { guGunName: "고양시 덕양구", guGun: 281 },
      { guGunName: "고양시 일산구", guGun: 283 },
      { guGunName: "고양시 일산동구", guGun: 285 },
      { guGunName: "고양시 일산서구", guGun: 287 },
      { guGunName: "과천시", guGun: 290 },
      { guGunName: "광명시", guGun: 210 },
      { guGunName: "광주시", guGun: 610 },
      { guGunName: "구리시", guGun: 310 },
      { guGunName: "군포시", guGun: 410 },
      { guGunName: "김포시", guGun: 570 },
      { guGunName: "남양주시", guGun: 360 },
      { guGunName: "동두천시", guGun: 250 },
      { guGunName: "부천시 소사구", guGun: 197 },
      { guGunName: "부천시 오정구", guGun: 199 },
      { guGunName: "부천시 원미구", guGun: 195 },
      { guGunName: "성남시 분당구", guGun: 135 },
      { guGunName: "성남시 수정구", guGun: 131 },
      { guGunName: "성남시 중원구", guGun: 133 },
      { guGunName: "수원시 권선구", guGun: 113 },
      { guGunName: "수원시 영통구", guGun: 117 },
      { guGunName: "수원시 장안구", guGun: 111 },
      { guGunName: "수원시 팔달구", guGun: 115 },
      { guGunName: "시흥시", guGun: 390 },
      { guGunName: "안산시", guGun: 270 },
      { guGunName: "안산시 단원구", guGun: 273 },
      { guGunName: "안산시 상록구", guGun: 271 },
      { guGunName: "안성시", guGun: 550 },
      { guGunName: "안양시 동안구", guGun: 173 },
      { guGunName: "안양시 만안구", guGun: 171 },
      { guGunName: "양주시", guGun: 630 },
      { guGunName: "양평군", guGun: 830 },
      { guGunName: "여주군", guGun: 730 },
      { guGunName: "여주시", guGun: 670 },
      { guGunName: "연천군", guGun: 800 },
      { guGunName: "오산시", guGun: 370 },
      { guGunName: "용인시", guGun: 460 },
      { guGunName: "용인시 기흥구", guGun: 463 },
      { guGunName: "용인시 수지구", guGun: 465 },
      { guGunName: "용인시 처인구", guGun: 461 },
      { guGunName: "의왕시", guGun: 430 },
      { guGunName: "의정부시", guGun: 150 },
      { guGunName: "이천시", guGun: 500 },
      { guGunName: "파주시", guGun: 480 },
      { guGunName: "평택시", guGun: 220 },
      { guGunName: "포천군", guGun: 810 },
      { guGunName: "포천시", guGun: 650 },
      { guGunName: "하남시", guGun: 450 },
      { guGunName: "화성시", guGun: 590 },
    ],
  },
  {
    siDoName: "강원도",
    siDoFull: "강원도",
    siDo: 42,
    guGuns: [
      { guGunName: "강릉시", guGun: 150 },
      { guGunName: "고성군", guGun: 820 },
      { guGunName: "동해시", guGun: 170 },
      { guGunName: "삼척시", guGun: 230 },
      { guGunName: "속초시", guGun: 210 },
      { guGunName: "양구군", guGun: 800 },
      { guGunName: "양양군", guGun: 830 },
      { guGunName: "영월군", guGun: 750 },
      { guGunName: "원주시", guGun: 130 },
      { guGunName: "인제군", guGun: 810 },
      { guGunName: "정선군", guGun: 770 },
      { guGunName: "철원군", guGun: 780 },
      { guGunName: "춘천시", guGun: 110 },
      { guGunName: "태백시", guGun: 190 },
      { guGunName: "평창군", guGun: 760 },
      { guGunName: "홍천군", guGun: 720 },
      { guGunName: "화천군", guGun: 790 },
      { guGunName: "횡성군", guGun: 730 },
    ],
  },
  {
    siDoName: "충청북도",
    siDoFull: "충청북도",
    siDo: 43,
    guGuns: [
      { guGunName: "괴산군", guGun: 760 },
      { guGunName: "단양군", guGun: 800 },
      { guGunName: "보은군", guGun: 720 },
      { guGunName: "영동군", guGun: 740 },
      { guGunName: "옥천군", guGun: 730 },
      { guGunName: "음성군", guGun: 770 },
      { guGunName: "제천시", guGun: 150 },
      { guGunName: "증평군", guGun: 745 },
      { guGunName: "진천군", guGun: 750 },
      { guGunName: "청원군", guGun: 710 },
      { guGunName: "청주시 상당구", guGun: 111 },
      { guGunName: "청주시 서원구", guGun: 112 },
      { guGunName: "청주시 청원구", guGun: 114 },
      { guGunName: "청주시 흥덕구", guGun: 113 },
      { guGunName: "충주시", guGun: 130 },
    ],
  },
  {
    siDoName: "충청남도",
    siDoFull: "충청남도",
    siDo: 44,
    guGuns: [
      { guGunName: "계룡시", guGun: 250 },
      { guGunName: "공주시", guGun: 150 },
      { guGunName: "금산군", guGun: 710 },
      { guGunName: "논산시", guGun: 230 },
      { guGunName: "당진군", guGun: 830 },
      { guGunName: "당진시", guGun: 270 },
      { guGunName: "보령시", guGun: 180 },
      { guGunName: "부여군", guGun: 760 },
      { guGunName: "서산시", guGun: 210 },
      { guGunName: "서천군", guGun: 770 },
      { guGunName: "아산시", guGun: 200 },
      { guGunName: "연기군", guGun: 730 },
      { guGunName: "예산군", guGun: 810 },
      { guGunName: "천안시", guGun: 130 },
      { guGunName: "천안시 동남구", guGun: 131 },
      { guGunName: "천안시 서북구", guGun: 133 },
      { guGunName: "청양군", guGun: 790 },
      { guGunName: "태안군", guGun: 825 },
      { guGunName: "홍성군", guGun: 800 },
    ],
  },
  {
    siDoName: "전라북도",
    siDoFull: "전라북도",
    siDo: 45,
    guGuns: [
      { guGunName: "고창군", guGun: 790 },
      { guGunName: "군산시", guGun: 130 },
      { guGunName: "김제시", guGun: 210 },
      { guGunName: "남원시", guGun: 190 },
      { guGunName: "무주군", guGun: 730 },
      { guGunName: "부안군", guGun: 800 },
      { guGunName: "순창군", guGun: 770 },
      { guGunName: "완주군", guGun: 710 },
      { guGunName: "익산시", guGun: 140 },
      { guGunName: "임실군", guGun: 750 },
      { guGunName: "장수군", guGun: 740 },
      { guGunName: "전주시 덕진구", guGun: 113 },
      { guGunName: "전주시 완산구", guGun: 111 },
      { guGunName: "정읍시", guGun: 180 },
      { guGunName: "진안군", guGun: 180 },
    ],
  },
  {
    siDoName: "전라남도",
    siDoFull: "전라남도",
    siDo: 46,
    guGuns: [
      { guGunName: "강진군", guGun: 810 },
      { guGunName: "고흥군", guGun: 770 },
      { guGunName: "곡성군", guGun: 720 },
      { guGunName: "광양시", guGun: 230 },
      { guGunName: "구례군", guGun: 730 },
      { guGunName: "나주시", guGun: 170 },
      { guGunName: "담양군", guGun: 710 },
      { guGunName: "목포시", guGun: 110 },
      { guGunName: "무안군", guGun: 840 },
      { guGunName: "보성군", guGun: 780 },
      { guGunName: "순천시", guGun: 150 },
      { guGunName: "신안군", guGun: 910 },
      { guGunName: "여수시", guGun: 130 },
      { guGunName: "영광군", guGun: 870 },
      { guGunName: "영암군", guGun: 830 },
      { guGunName: "완도군", guGun: 890 },
      { guGunName: "장성군", guGun: 880 },
      { guGunName: "장흥군", guGun: 800 },
      { guGunName: "진도군", guGun: 900 },
      { guGunName: "함평군", guGun: 860 },
      { guGunName: "해남군", guGun: 820 },
      { guGunName: "화순군", guGun: 790 },
    ],
  },
  {
    siDoName: "경상북도",
    siDoFull: "경상북도",
    siDo: 47,
    guGuns: [
      { guGunName: "경산시", guGun: 290 },
      { guGunName: "경주시", guGun: 130 },
      { guGunName: "고령군", guGun: 830 },
      { guGunName: "구미시", guGun: 190 },
      { guGunName: "군위군", guGun: 720 },
      { guGunName: "김천시", guGun: 150 },
      { guGunName: "문경시", guGun: 280 },
      { guGunName: "봉화군", guGun: 920 },
      { guGunName: "상주시", guGun: 250 },
      { guGunName: "성주군", guGun: 840 },
      { guGunName: "안동시", guGun: 170 },
      { guGunName: "영덕군", guGun: 770 },
      { guGunName: "양양군", guGun: 760 },
      { guGunName: "영주시", guGun: 210 },
      { guGunName: "영천시", guGun: 230 },
      { guGunName: "예천군", guGun: 900 },
      { guGunName: "울릉군", guGun: 940 },
      { guGunName: "울진군", guGun: 930 },
      { guGunName: "의성군", guGun: 730 },
      { guGunName: "청도군", guGun: 820 },
      { guGunName: "칠곡군", guGun: 850 },
      { guGunName: "포항시 남구", guGun: 111 },
      { guGunName: "포항시 북구", guGun: 113 },
    ],
  },
  {
    siDoName: "경상남도",
    siDoFull: "경상남도",
    siDo: 48,
    guGuns: [
      { guGunName: "거제시", guGun: 310 },
      { guGunName: "거창군", guGun: 880 },
      { guGunName: "고성군", guGun: 820 },
      { guGunName: "김해시", guGun: 250 },
      { guGunName: "남해군", guGun: 840 },
      { guGunName: "마산시", guGun: 160 },
      { guGunName: "밀양시", guGun: 270 },
      { guGunName: "사천시", guGun: 240 },
      { guGunName: "산청군", guGun: 860 },
      { guGunName: "양산시", guGun: 330 },
      { guGunName: "의령군", guGun: 720 },
      { guGunName: "진주시", guGun: 170 },
      { guGunName: "진해시", guGun: 190 },
      { guGunName: "창녕군", guGun: 740 },
      { guGunName: "창원시", guGun: 110 },
      { guGunName: "창원시 마산합포구", guGun: 125 },
      { guGunName: "창원시 마산회원구", guGun: 127 },
      { guGunName: "창원시 성산구", guGun: 123 },
      { guGunName: "창원시 의창구", guGun: 121 },
      { guGunName: "창원시 진해구", guGun: 129 },
      { guGunName: "통영시", guGun: 220 },
      { guGunName: "하동군", guGun: 850 },
      { guGunName: "함안군", guGun: 730 },
      { guGunName: "함양군", guGun: 870 },
      { guGunName: "합천군", guGun: 890 },
    ],
  },
  {
    siDoName: "제주시",
    siDoFull: "제주특별자치도",
    siDo: 50,
    guGuns: [
      { guGunName: "서귀포시", guGun: 130 },
      { guGunName: "제주시", guGun: 110 },
    ],
  },
];

export default region;
