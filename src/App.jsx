import { useState } from "react";
import "./App.css";
function App() {
  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const birthDateObject = new Date(years, months, days);
  const currentDate = new Date();
  const [result, setResult] = useState(["--", "--", "--"]);

  let ageYears = 0;
  let ageMonths = 0;
  let ageDays = 0;
  function calculateAge(years, months, days, e) {
    e.preventDefault();
    if (days == "" || months == "" || years == "") {
      setIsValid(false);
      console.log("invalid");
      return;
    }
    setIsValid(true);
    ageYears = currentDate.getFullYear() - birthDateObject.getFullYear();
    ageMonths = currentDate.getMonth() - birthDateObject.getMonth() + 1;
    ageDays = currentDate.getDate() - birthDateObject.getDate();

    if (ageDays < 0) {
      const lastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        0
      );
      ageDays += lastMonth.getDate();
      ageMonths--;
    }
    if (ageMonths == 12) {
      ageMonths = 0;
      ageYears++;
    }
    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears--;
    }
    setResult([ageYears, ageMonths, ageDays]);
  }
  // function inputInForm(e) {
  //   e.preventDefault();

  //   setInputValue(days);

  //   if (typeof inputValue !== "number") {
  //     setIsValid(false);
  //   } else {
  //   }
  // }

  return (
    <>
      <main className="box-border h-screen w-full bg-[#dbdbdb] flex items-center justify-center sm:max-2xl:min-w-[800px] ">
        <div className="flex flex-col items-center min-h-[400px] min-w-[350px] bg-white rounded-t-2xl rounded-br-[25%] rounded-bl-2xl gap-4 sm:max-2xl:min-h-[500px] sm:max-2xl:min-w-[650px]">
          <form onSubmit={(e) => calculateAge(years, months, days, e)}>
            <div className="flex max-w-[450px] gap-3 mt-[50px] sm:max-2xl:min-w-[500px] sm:max-2xl:gap-8">
              <div className="flex flex-col ">
                <label className=" text-xl text-[#716F6F] " htmlFor="days">
                  Day
                </label>
                <input
                  className={`w-[100px] text-[32px] border-[1.5px] rounded-md focus:border-[#854DFF] focus:ring-1 focus:ring-[#854DFF] focus:outline-none sm:max-2xl:w-[150px] ${
                    isValid ? "" : "border-red-400 placeholder:text-red-400"
                  }`}
                  type="number"
                  id="days"
                  max="31"
                  min="1"
                  placeholder="DD"
                  onChange={(e) => {
                    setDays(Number(e.target.value));
                  }}
                />
                <div className="h-[24px] text-[10px] text-red-400 font-thin">
                  {!isValid ? "this field is require" : ""}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xl text-[#716F6F]" htmlFor="months">
                  Month
                </label>

                <input
                  className={`w-[100px] text-[32px] border-[1.5px] rounded-md focus:border-[#854DFF] focus:ring-1 focus:ring-[#854DFF] focus:outline-none sm:max-2xl:w-[150px] ${
                    isValid ? "" : "border-red-400 placeholder:text-red-400"
                  }`}
                  type="number"
                  id="months"
                  min="1"
                  max="12"
                  placeholder="MM"
                  onChange={(e) => {
                    setMonths(Number(e.target.value));
                  }}
                />
                <div className="h-[24px] text-[10px] text-red-400 font-thin">
                  {!isValid ? "this field is require" : ""}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xl text-[#716F6F]" htmlFor="years">
                  Year
                </label>
                <input
                  className={`w-[100px] text-[32px] border-[1.5px] rounded-md focus:border-[#854DFF] focus:ring-1 focus:ring-[#854DFF] focus:outline-none sm:max-2xl:w-[150px] ${
                    isValid ? "" : "border-red-400 placeholder:text-red-400"
                  }`}
                  type="number"
                  id="years"
                  min="1"
                  placeholder="YYYY"
                  onChange={(e) => {
                    setYears(Number(e.target.value));
                  }}
                />
                <div className="h-[24px] text-[10px] text-red-400 font-[400]">
                  {!isValid ? "this field is require" : ""}
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-auto relative justify-center items-center ">
              <hr className="w-[85%] border-[ hsl(0, 0%, 86%)] border-[1px] absolute z-10 sm:max-2xl:w-[100%]" />
              <button
                className="active:grayscale z-20 sm:max-2xl:self-end"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="44"
                  viewBox="0 0 46 44"
                  className="svg z-20 rounded-full bg-[#854DFF] p-3 sm:max-2xl:w-[60px] sm:max-2xl:h-[60px]"
                >
                  <g fill="none" stroke="#FFF" strokeWidth="2">
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                  </g>
                </svg>
              </button>
            </div>
          </form>
          <div>
            <div className="flex text-5xl gap-2 bold-italic-poppins sm:max-2xl:text-7xl">
              <h1 className="text-[#854DFF]">{result[0]}</h1>
              <h1>Years</h1>
            </div>
            <div className="flex bold-italic-poppins gap-2 text-5xl sm:max-2xl:text-7xl">
              <h1 className="text-[#854DFF]">{result[1]}</h1>
              <h1>months</h1>
            </div>
            <div className="flex text-5xl gap-2 bold-italic-poppins sm:max-2xl:text-7xl">
              <h1 className="text-[#854DFF]">{result[2]}</h1>
              <h1>days</h1>
            </div>
          </div>
        </div>
      </main>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/scarecrow-404">scarecrow-404</a>.
      </div>
    </>
  );
}

export default App;
