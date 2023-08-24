import { useRecoilValue, useResetRecoilState } from "recoil";
import { colorCollection } from "./App";

const Collection = () => {
  const collection = useRecoilValue(colorCollection);
  const onReset = useResetRecoilState(colorCollection);
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "1rem",
          border: "1px solid gray",
          gap: "4px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "4px" }}>
          {collection.map((backgroundColor) => (
            <div style={{ backgroundColor, width: "2vw", height: "7vh" }} />
          ))}
        </div>
        <button onClick={onReset}>reset</button>
      </div>
    </>
  );
};

export default Collection;
