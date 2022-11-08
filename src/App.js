import React, { useState, useEffect } from "react";
import "./App.css";
import API_KEYS from "./api/API_KEYS";
import { BICYCLE_URL } from "./api/API_URLS";
import { fetchData } from "./api/APIUtils";
import KakaoMap from "./components/KakaoMap";
import useCoords from "./hook/useCoords";
import region from "./utils/region";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = API_KEYS.BICYCLE_KEY;
  const [searchYearCd, setSearchYearCd] = useState(2020);
  const [siDo, setSiDo] = useState(11);
  const [selSiDo, setSelSiDo] = useState("서울특별시");
  const [selGuGun, setSelGuGun] = useState("강남구");
  const [guGuns, setGuGuns] = useState(region[0].guGuns);
  const [guGun, setGuGun] = useState(680);
  const { latitude, longitude, loaded } = useCoords();
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [positions, setPositons] = useState([
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
  ]);
  const [listLoading, setListLoading] = useState(false);

  const goMyLocation = () => {
    loaded
      ? setCenter({ lat: latitude, lng: longitude })
      : setCenter((cur) => cur);
  };
  const onClickBtn = (changeYear) => {
    setSearchYearCd(searchYearCd + changeYear);
    setCenter({
      lat: data.items.item[0].la_crd,
      lng: data.items.item[0].lo_crd,
    });
  };

  useEffect(() => {
    setListLoading(false);
    fetchData(BICYCLE_URL(API_KEY, searchYearCd, siDo, guGun))
      .then((res) => {
        setData(res);
        setPositons(
          res.items.item.map((item) => ({
            title: item.sido_sgg_nm,
            latlng: { lat: item.la_crd, lng: item.lo_crd },
          }))
        );
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(true);
        setListLoading(true);
      });
  }, [searchYearCd, guGun]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) {
    return <p>데이터를 불러오지 못했습니다.</p>;
  }
  if (!loading) {
    return <p>loading...</p>;
  }
  return (
    <>
      <div className="container">
        <div className="nav">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "1rem",
              fontSize: "1.2rem",
            }}
          >
            <span>자전거</span>
            <span>교통사고 다발 지역 안내 어플</span>
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <button
              style={{ width: "4rem", height: "4rem", borderRadius: "2rem" }}
              onClick={() => goMyLocation()}
            >
              내 위치
            </button>
          </div>
          <div style={{ width: "100%" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h3>1. 시/도 선택</h3>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {region.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setGuGuns(item.guGuns);
                    setSiDo(item.siDo);
                    setSelSiDo(item.siDoName);
                    setSelGuGun("");
                  }}
                >
                  {item.siDoName}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h3>2. 시/군/구 선택</h3>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            {guGuns.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setGuGun(item.guGun);
                  setSelGuGun(item.guGunName);
                }}
              >
                {item.guGunName}
              </button>
            ))}
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h4>
              선택된 지역 : <span>{selSiDo}</span>
              <span> {selGuGun}</span>
            </h4>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <select onChange={(e) => setSearchYearCd(e.target.value)}>
                <option value={2020} selected>
                  2020년
                </option>
                <option value={2019}>2019년</option>
                <option value={2018}>2018년</option>
                <option value={2017}>2017년</option>
                <option value={2016}>2016년</option>
                <option value={2015}>2015년</option>
                <option value={2014}>2014년</option>
                <option value={2013}>2013년</option>
                <option value={2012}>2012년</option>
              </select>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              maxHeight: "40%",
              overflow: "scroll",
            }}
          >
            {listLoading ? (
              data.resultCode !== "00" ? (
                <p>결과가 없습니다</p>
              ) : (
                data.items.item.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                    <a
                      href="#"
                      onClick={() =>
                        setCenter({ lat: item.la_crd, lng: item.lo_crd })
                      }
                    >
                      {item.spot_nm}
                    </a>
                  </li>
                ))
              )
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div className="kakaomap">
          <KakaoMap positions={positions} center={center} />
        </div>
      </div>
    </>
  );
}

export default App;
