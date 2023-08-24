import { useRecoilValue } from "recoil";
import { summary } from "./App";

const Summary = () => {
  return (
    <div style={{ color: "pink", padding: "1rem" }}>
      <div>{useRecoilValue(summary("회 색상을 클릭했습니다."))}</div>
      <div>{useRecoilValue(summary("is the len of collection"))}</div>
    </div>
  );
};

export default Summary;
