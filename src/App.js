import React, { useState } from "react";
import { message } from "antd";
import EmiPieChart from "./EmiPieChart";
import InputSlider from "./components/InputSlider";

const App = () => {
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [inputValue3, setInputValue3] = useState(0);
  const [pieData, setPieData] = useState([]);
  const [totalIntrset, setTotalIntrset] = useState(0);
  const [totalEMi, setTotalEmi] = useState(0);
  // Calculating interest per month
  const calcInterest = (amount, rate, months) => {
    if (amount > 0 && rate > 0 && months > 0) {
      const interest = (amount * (rate * 0.01)) / months;
      const result = interest.toFixed(2);

      return result;
    } else {
      return 0;
    }
  };
  // Calculating total payment
  const calcTotal = (amount, rate, months) => {
    const interest = (amount * (rate * 0.01)) / months;
    const result = interest.toFixed(2);
    const totalResult = (
      Number(amount) / Number(months) +
      Number(result)
    ).toFixed(2);
    const makePieData = [
      {
        name: "interest",
        value: Number(result),
      },
      { name: "total", value: Number(totalResult) },
    ];
    setPieData(makePieData);
    return totalResult;
  };
  const handleCalculate = () => {
    if (inputValue1 !== 0 && inputValue2 !== 0 && inputValue3 !== 0) {
      setTotalIntrset(calcInterest(inputValue1, inputValue2, inputValue3));
      setTotalEmi(calcTotal(inputValue1, inputValue2, inputValue3));
    } else {
      message.warning("Please fill all the field", 2);
    }
  };
  const marks = {
    0: "0",
    100000: "100000L",
    200000: "200000L",
    300000: "300000L",
    400000: "400000L",
    500000: "500000L",
    600000: "600000L",
    700000: "700000L",
    800000: "800000L",
    900000: "900000L",
    1000000: {
      style: {
        color: "#f50",
      },
      label: <strong>1000000L</strong>,
    },
  };
  const percentage = {
    0: "0",
    1: "1%",
    2: "2%",
    3: "3%",
    4: "4%",
    5: "5%",
    6: "6%",
    7: "7%",
    8: "8%",
    9: "9%",
    10: {
      style: {
        color: "#f50",
      },
      label: <strong>10%</strong>,
    },
  };
  const loan = {
    0: "0",
    5: "5",
    10: "10",
    15: "15",
    20: "20",
    25: "25",

    30: {
      style: {
        color: "#f50",
      },
      label: <strong>30</strong>,
    },
  };
  return (
    <>
      <div className="text-center my-4 text-3xl italic font-serif font-medium">
        EMI calculator
      </div>
      <div className="border h-full min-h-screen	 rounded-md bg-slate-100  my-4 mx-16 py-10 px-20">
        <InputSlider
          label="Loan Amount"
          inputValue1={inputValue1}
          setInputValue1={setInputValue1}
          marks={marks}
          max={1000000}
          steps={100000}
        />
        <InputSlider
          label="Interest Rate"
          inputValue1={inputValue2}
          setInputValue1={setInputValue2}
          marks={percentage}
          max={10}
          steps={0.1}
        />
        <InputSlider
          label=" Loan Tenure"
          inputValue1={inputValue3}
          setInputValue1={setInputValue3}
          marks={loan}
          max={30}
          steps={1}
        />

        <div>
          <div>
            <button
              type="button"
              onClick={() => handleCalculate()}
              className="block bg-blue-500 text-white px-4 py-2  my-4 rounded-md hover:bg-blue-600 float-right	"
            >
              Calculate EMI
            </button>
            <div>
              {inputValue1 !== 0 && inputValue2 !== 0 && inputValue3 !== 0 ? (
                <div className="grid grid-cols-3 gap-4 justify-center items-center">
                  <div className="flex flex-col items-center justify-center text-2xl font-medium font-mono">
                    EMI
                    <div className="text-xl font-semibold	 text-green-600">
                      INR {totalIntrset}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-2xl font-medium font-mono">
                    Total
                    <div className="text-xl font-semibold	 text-green-600">
                      INR {totalEMi}
                    </div>
                  </div>
                  <div>
                    {pieData.length > 0 ? (
                      <>
                        <EmiPieChart pieData={pieData} />
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
