import Lottie from "lottie-react";
import LoadingAni from "../assets/json/99297-loading-files.json";
import EmptyAni from "../assets/json/123723-search-empty.json";
import ErrPage from "../assets/json/65664-topset-error.json";

const Loading = () => {
  return (
    <Lottie
      style={{ marginTop: "auto", marginBottom: "auto" }}
      animationData={LoadingAni}
    />
  );
};

const SearchEmpty = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: "1rem",
      }}
    >
      <Lottie animationData={EmptyAni} loop={false} />
      <p>검색 결과가 없습니다.</p>
    </div>
  );
};

const Error = () => {
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
      <Lottie style={{ width: "33%", height: "33%" }} animationData={ErrPage} />
      <p style={{ fontSize: "2rem" }}>페이지를 찾을 수 없습니다</p>
    </div>
  );
};

export { Loading, SearchEmpty, Error };
