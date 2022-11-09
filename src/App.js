import React, { useState, useEffect } from "react";
import "./theme/App.css";
import API_KEYS from "./api/API_KEYS";
import { BICYCLE_URL } from "./api/API_URLS";
import { fetchData } from "./api/APIUtils";
import KakaoMap from "./components/KakaoMap";
import useCoords from "./hook/useCoords";
import region from "./utils/region";
import AppIcon from "./assets/icons/accident.png";
import locateIcon from "./assets/icons/location.png";
import Lottie from "lottie-react";
import LoadingAni from "./assets/json/99297-loading-files.json";
import EmptyAni from "./assets/json/123723-search-empty.json";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = API_KEYS.BICYCLE_KEY;
  const [searchYearCd, setSearchYearCd] = useState(2020);
  const [siDo, setSiDo] = useState(11);
  const [guGuns, setGuGuns] = useState(region[0].guGuns);
  const [guGun, setGuGun] = useState(680);
  const { latitude, longitude, loaded } = useCoords();
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [listCount, setListCount] = useState(0);
  const [positions, setPositons] = useState([
    {
      title: "",
      latlng: { lat: null, lng: null },
    },
  ]);

  const goMyLocation = () => {
    loaded
      ? setCenter({ lat: latitude, lng: longitude })
      : setCenter((cur) => cur);
  };

  useEffect(() => {
    setLoading(false);
    fetchData(BICYCLE_URL(API_KEY, searchYearCd, siDo, guGun))
      .then((res) => {
        setData(res);
        setListCount(res.items.item.length);
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
      });
  }, [searchYearCd, guGun]);

  useEffect(() => {
    goMyLocation();
  }, [loaded]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) {
    return <p>데이터를 불러오지 못했습니다.</p>;
  }

  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="appTitle">
            <img className="appIcon" alt="bicycle app icon" src={AppIcon} />
            <h1>
              자전거 사고 <br />
              다발 지역 확인 서비스
            </h1>
          </div>
          <div className="topContainer">
            <div className="sidoContainer">
              <div className="selTitle">
                <h3>1. 시/도 선택</h3>
              </div>
              <div className="selContainer">
                {region.map((item, index) => (
                  <button
                    className={
                      "regionButton" + (siDo == item.siDo ? " active" : "")
                    }
                    key={index}
                    onClick={() => {
                      setGuGuns(item.guGuns);
                      setSiDo(item.siDo);
                    }}
                  >
                    {item.siDoName}
                  </button>
                ))}
              </div>
            </div>
            <div className="sidoContainer">
              <div className="selTitle">
                <h3>2. 시/군/구 선택</h3>
              </div>
              <div className="selContainer">
                {guGuns.map((item, index) => (
                  <button
                    className={
                      "regionButton" + (guGun == item.guGun ? " active" : "")
                    }
                    key={index}
                    onClick={() => {
                      setGuGun(item.guGun);
                    }}
                  >
                    {item.guGunName}
                  </button>
                ))}
              </div>
            </div>
            <div className="yearSelect">
              <p className="searchCount">{`검색건수 : ${listCount}`}</p>
              <select
                className="yearlist"
                onChange={(e) => setSearchYearCd(e.target.value)}
              >
                <option value={2020}>2020년</option>
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
          <div className="spotContainer">
            {!loading ? (
              <Lottie
                style={{ marginTop: "auto", marginBottom: "auto" }}
                animationData={LoadingAni}
              />
            ) : data.resultCode !== "00" ? (
              <div className="empty">
                <Lottie animationData={EmptyAni} loop={false} />
                <p>검색 결과가 없습니다.</p>
              </div>
            ) : (
              data.items.item.map((item, index) => (
                <li className="spotList" key={index}>
                  <a
                    className="spotText"
                    href="#"
                    onClick={() =>
                      setCenter({ lat: item.la_crd, lng: item.lo_crd })
                    }
                  >
                    {item.spot_nm}
                  </a>
                </li>
              ))
            )}
          </div>
        </div>
        <div className="kakaomap">
          <KakaoMap positions={positions} center={center} />
          <div className="goMyLocation">
            <img onClick={() => goMyLocation()} src={locateIcon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
