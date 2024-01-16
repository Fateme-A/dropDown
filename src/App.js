import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";
import "./App.css";
import "./fonts/font.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("هیچ!");
  const [defaultValue, setDefaultValue] = useState(1);
  const handleSelect = (selectedItem) => {
    setResult(selectedItem.name);
    setDefaultValue(selectedItem.key);
  };
  const list = [
    {
      key: 1,
      name: "کامارو",
    },
    {
      key: 2,
      name: "پاترول",
    },
  ];
  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown
            onSelect={handleSelect}
            options={list}
            value={defaultValue}
            placeholder="یک مورد را انتخاب کنید"
          />
        </div>
        <div className="result">{result}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
