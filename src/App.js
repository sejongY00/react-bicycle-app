import React, { useState, useEffect, useCallback } from "react";
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
import { Loading, SearchEmpty, Error } from "./components/Animations";
import Chart from "./components/Chart";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [position, setPositon] = useState(0); //하단 내비 용도
  const [fold, setFold] = useState(false); //주 내비 접기 용도
  const API_KEY = API_KEYS.BICYCLE_KEY;
  const [searchYearCd, setSearchYearCd] = useState(0);
  const [siDo, setSiDo] = useState(11);
  const [guGuns, setGuGuns] = useState(region[0].guGuns);
  const [guGun, setGuGun] = useState(0);
  const { latitude, longitude, loaded } = useCoords();
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 }); //맵 중앙 위치 변경
  const [listCount, setListCount] = useState(0);
  const [chartData, setChartData] = useState([
    {
      Year: null,
      YearNum: null,
      사고건수: null,
    },
  ]);
  const [chartLoad, setChartLoad] = useState(false);
  const [positions, setPositons] = useState([
    {
      title: "",
      latlng: { lat: null, lng: null },
    },
  ]); //맵 마커 용도

  const goMyLocation = useCallback(() => {
    loaded
      ? setCenter({ lat: latitude, lng: longitude })
      : setCenter((cur) => cur);
  }, [latitude, longitude, loaded]);
  const getData = useCallback(() => {
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
  }, [API_KEY, searchYearCd, siDo, guGun]);
  const getChartData = useCallback(async () => {
    setChartLoad(false);
    let data = [];
    for (let i = 2012; i <= 2020; i++) {
      await fetchData(BICYCLE_URL(API_KEY, i, siDo, guGun)).then((res) => {
        let sum = 0;
        if (res.items.item.length !== 0) {
          for (let j = 0; j < res.items.item.length; j++) {
            sum += res.items.item[j].occrrnc_cnt;
          }
        }
        data.push({ Year: `${i}년`, YearNum: i, 사고건수: sum });
      });
    }
    setChartData(data);
    setChartLoad(true);
  }, [API_KEY, siDo, guGun]);

  const onClickSiDo = (item) => {
    setGuGuns(item.guGuns);
    setSiDo(item.siDo);
    setGuGun(0);
    setSearchYearCd(0);
    setPositon(0);
  };

  const onChangeGuGun = (e) => {
    setGuGun(e.target.value);
  };

  const onChangeYear = (e) => {
    setSearchYearCd(e.target.value);
  };

  const onClickList = (e, item) => {
    e.preventDefault();
    setCenter({ lat: item.la_crd, lng: item.lo_crd });
  };

  const onClickBar = (e) => {
    setSearchYearCd(e.YearNum);
    setPositon(0);
  };

  const onClickSortYear = (e) => {
    e.preventDefault();
    setPositon(0);
  };

  const onClickChartView = (e) => {
    e.preventDefault();
    setPositon(1);
    setSearchYearCd(0);
  };

  const onClickFold = (e) => {
    e.preventDefault();
    setFold((cur) => !cur);
  };

  useEffect(() => {
    getData();
    getChartData();
  }, [getData, getChartData]);

  useEffect(() => {
    goMyLocation();
  }, [goMyLocation]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) {
    return <Error />;
  }

  return (
    <>
      <div className="container">
        <div
          className={
            "nav" +
            (position === 1 ? " nav-chart" : "") +
            (fold ? (position === 1 ? " fold-inChart" : " fold") : "")
          }
        >
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
                      onClickSiDo(item);
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
                <select
                  className="regionList"
                  value={guGun}
                  onChange={(e) => {
                    onChangeGuGun(e);
                  }}
                >
                  <option value={0}>------- 시/군/구 선택 -------</option>
                  {guGuns.map((item, index) => (
                    <option key={index} value={item.guGun}>
                      {item.guGunName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="yearSelect">
              <p className="searchCount">검색건수 : {listCount}</p>
              <select
                value={searchYearCd}
                className="yearlist"
                onChange={(e) => onChangeYear(e)}
              >
                <option value={0}>연도선택</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}년
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div
            className={
              "spotContainer" + (position === 1 ? " spotContainer-chart" : "")
            }
          >
            {position === 0 ? (
              !loading ? (
                <Loading />
              ) : data.resultCode !== "00" ? (
                <SearchEmpty />
              ) : (
                data.items.item.map((item, index) => (
                  <li className="spotList" key={index}>
                    <a
                      className="spotText"
                      href={`/${item.spot_nm}`}
                      onClick={(e) => onClickList(e, item)}
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
              )
            ) : chartLoad ? (
              guGun === 0 ? (
                <SearchEmpty />
              ) : (
                <Chart
                  data={chartData}
                  dataName="Year"
                  dataValue="사고건수"
                  onClick={(e) => {
                    onClickBar(e);
                  }}
                />
              )
            ) : (
              <Loading />
            )}
          </div>
          <div className="bottomNav">
            <a
              href="/viewList"
              className={"b-nav" + (position === 0 ? " active1" : "")}
              onClick={(e) => onClickSortYear(e)}
            >
              연도별 보기
            </a>
            <a
              href="/viewChart"
              className={"b-nav" + (position === 1 ? " active1" : "")}
              onClick={(e) => {
                onClickChartView(e);
              }}
            >
              차트 보기
            </a>
          </div>
          <div title="내 위치로 이동" className="goMyLocation">
            <img
              alt="Move To My Location"
              onClick={() => goMyLocation()}
              src={locateIcon}
            />
          </div>
          <a
            href="/fold"
            className="nav-fold-btn"
            onClick={(e) => {
              onClickFold(e);
            }}
          >
            {fold ? "더보기" : "접기"}
          </a>
        </div>
        <div className="kakaomap">
          <KakaoMap positions={positions} center={center} />
        </div>
      </div>
    </>
  );
}

export default App;
