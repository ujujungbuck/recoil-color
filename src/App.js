import "./App.css";
import {
  atom,
  // useRecoilState,
  useRecoilValue,
  // useSetRecoilState,
  // selector,
  // selectorFamily,
} from "recoil";

const rainbow = atom({
  key: "rainbow",
  default: ["pink", "orange", "purple", "blue", "green", "yellow"],
});

function App() {
  const rainbowColors = useRecoilValue(rainbow);
  return (
    <>
      <h1>Recoil로 컬러팔레트 구현</h1>
      {rainbowColors.map((bgColor) => (
        <div
          style={{
            backgroundColor: `${bgColor}`,
            width: "100%",
            height: "7vh",
          }}
        />
      ))}
    </>
  );
}

export default App;
