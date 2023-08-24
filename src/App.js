import "./App.css";
import {
  atom,
  useRecoilValue,
  useSetRecoilState,
  selector,
  selectorFamily,
  useRecoilState,
} from "recoil";
import Collection from "./Collection";
import Summary from "./Summary";

const rainbow = atom({
  key: "rainbow",
  default: ["pink", "orange", "purple", "blue", "green", "yellow"],
});

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, oldValue, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const colorCollection = atom({
  key: "colorCollection",
  default: [],
  effects: [localStorageEffect("colorCollection")],
});

export const summary = selectorFamily({
  key: "summary",
  get:
    (description) =>
    ({ get }) => {
      const collection = get(colorCollection);
      return `${collection.length} ${description}`;
    },
});

function App() {
  const rainbowColors = useRecoilValue(rainbow);
  const [collection, setCollection] = useRecoilState(colorCollection);
  const addCollection = useSetRecoilState(colorCollection);
  return (
    <>
      <h1>Recoil로 컬러팔레트 구현</h1>
      <Collection />
      <Summary />
      {rainbowColors.map((bgColor) => (
        <div
          style={{
            backgroundColor: `${bgColor}`,
            width: "100%",
            height: "7vh",
          }}
          onClick={() => {
            addCollection((prev) => [...prev, bgColor]);
          }}
        />
      ))}
    </>
  );
}

export default App;
