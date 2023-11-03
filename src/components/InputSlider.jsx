import React from "react";
import { Slider } from "antd";

const InputSlider = ({
  label,
  inputValue1,
  setInputValue1,
  marks,
  max,
  steps,
}) => {
  return (
    <div>
      <div>
        {" "}
        <div className="my-6">
          <span className="font-mono  font-medium	 text-blue-600">
            {label} :{" "}
          </span>
          <span>
            {" "}
            <input
              className="bg-gray-300 w-52 leading-8 rounded ml-2 pl-2"
              type="number"
              min={0}
              value={inputValue1}
              onChange={(e) => setInputValue1(Number(e.target.value))}
            />
          </span>
        </div>
        <div>
          <Slider
            min={0}
            max={max}
            marks={marks}
            step={steps}
            onChange={(value) => {
              setInputValue1(value);
            }}
            value={Number(inputValue1)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputSlider;
