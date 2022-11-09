import React, { useState, useEffect } from "react";
import "./theme/App.css";
import API_KEYS from "./api/API_KEYS";
import { BICYCLE_URL } from "./api/API_URLS";
import { fetchData } from "./api/APIUtils";
import KakaoMap from "./components/KakaoMap";
import useCoords from "./hook/useCoords";
import region from "./utils/region";
import years from "./utils/years";
import AppIcon from "./assets/icons/accident.png";
import locateIcon from "./assets/icons/location.png";
import Lottie from "lottie-react";
import LoadingAni from "./assets/json/99297-loading-files.json";
import EmptyAni from "./assets/json/123723-search-empty.json";
import ErrPage from "./assets/json/65664-topset-error.json";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = API_KEYS.BICYCLE_KEY;
  const [searchYearCd, setSearchYearCd] = useState(2020);
  const [siDo, setSiDo] = useState(11);
  const [guGuns, setGuGuns] = useState(region[0].guGuns);
  const [guGun, setGuGun] = useState(680);
  const [selGuGun, setSelGuGun] = useState(680);
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
    setListCount(0);
    fetchData(BICYCLE_URL(API_KEY, searchYearCd, siDo, guGun))
      .then((res) => {
        setData(res);
        setListCount(res.items.item.length);
        setPositons(
          res.items.item.map((item) => ({
            title: item.spot_nm,
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
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Lottie
          style={{ width: "33%", height: "33%" }}
          animationData={ErrPage}
        />
        <p style={{ fontSize: "2rem" }}>페이지를 찾을 수 없습니다</p>
      </div>
    );
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
                      "regionButton" + (siDo === item.siDo ? " active" : "")
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
                {/* {guGuns.map((item, index) => (
                  <button
                    className={
                      "regionButton" +
                      (selGuGun === index + item.guGun ? " active" : "") +
                      (item.guGunName.length > 4 ? " long" : "") +
                      (item.guGunName.length > 6 ? " tooLong" : "")
                    }
                    key={index}
                    onClick={() => {
                      setGuGun(item.guGun);
                      setSelGuGun(index + item.guGun);
                    }}
                  >
                    {item.guGunName}
                  </button>
                ))} */}
                <select
                  className="regionList"
                  onChange={(e) => setGuGun(e.target.value)}
                >
                  {guGuns.map((item, index) => (
                    <option value={item.guGun}>{item.guGunName}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="yearSelect">
              <p className="searchCount">검색건수 : {listCount}</p>
              <select
                className="yearlist"
                onChange={(e) => setSearchYearCd(e.target.value)}
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>{`${year}년`}</option>
                ))}
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
                    <p style={{ fontSize: "1rem" }}> {item.spot_nm} </p>
                    <p
                      style={{
                        marginTop: "5px",
                        color: "#9E3500",
                      }}
                    >
                      사고 발생 건수 : {item.occrrnc_cnt}
                    </p>
                  </a>
                </li>
              ))
            )}
          </div>
        </div>
        <div className="kakaomap">
          <KakaoMap positions={positions} center={center} />
          <div className="goMyLocation">
            <img
              alt="Move To My Location"
              onClick={() => goMyLocation()}
              src={locateIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
