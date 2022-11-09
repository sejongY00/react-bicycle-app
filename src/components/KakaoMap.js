import { Map, MapMarker } from "react-kakao-maps-sdk";
import Marker from "../assets/icons/target.png";
const KakaoMap = ({ positions, center }) => {
  return (
    <Map // 지도를 표시할 Container
      center={center}
      isPanto={true}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100%",
      }}
      level={3} // 지도의 확대 레벨
    >
      {positions.map((position, index) => (
        <MapMarker
          key={index}
          position={position.latlng} // 마커를 표시할 위치
          image={{
            src: Marker, // 마커이미지의 주소입니다
            size: {
              width: 36,
              height: 36,
            }, // 마커이미지의 크기입니다
          }}
          title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />
      ))}
    </Map>
  );
};

export default KakaoMap;
