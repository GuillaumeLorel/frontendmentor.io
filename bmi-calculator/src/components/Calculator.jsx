import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Calculator = () => {
  const [system, setSystem] = useState("metric");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [heightFT, setHeightFT] = useState(0);
  const [heightIN, setHeightIN] = useState(0);
  const [weightST, setWeightST] = useState(0);
  const [weightLBS, setWeightLBS] = useState(0);
  const [bmi, setBMI] = useState(0);

  const handleSystemChange = (e) => {
    setSystem(e.target.value);
    setBMI(0);
    setHeight(0);
    setWeight(0);
    setHeightFT(0);
    setHeightIN(0);
    setWeightST(0);
    setWeightLBS(0);
  };

  const calculateBMI = () => {
    if (system === "metric") {
      return (weight / (height * height)) * 10000;
    } else {
      const totalHeightInches = parseInt(heightFT) * 12 + parseInt(heightIN);
      const totalWeightPounds = parseInt(weightST) * 14 + parseInt(weightLBS);
      return (
        (totalWeightPounds / (totalHeightInches * totalHeightInches)) * 703
      );
    }
  };

  const kgToStonesAndPounds = (kg) => {
    const totalPounds = kg * 2.20462; // Convert kg to pounds
    const stones = Math.floor(totalPounds / 14);
    const pounds = Math.round(totalPounds % 14);
    return `${stones}st ${pounds}lbs`;
  };

  const calculateHealthyWeightRange = () => {
    let minHeightM, maxHeightM;
    if (system === "metric") {
      minHeightM = height / 100; // convert cm to m
      maxHeightM = height / 100;
    } else {
      const totalHeightInches = parseInt(heightFT) * 12 + parseInt(heightIN);
      minHeightM = totalHeightInches * 0.0254; // convert inches to meters
      maxHeightM = totalHeightInches * 0.0254;
    }

    const minWeightKg = 18.5 * minHeightM * minHeightM;
    const maxWeightKg = 24.9 * maxHeightM * maxHeightM;
    if (system === "imperial") {
      const minWeightImperial = kgToStonesAndPounds(minWeightKg);
      const maxWeightImperial = kgToStonesAndPounds(maxWeightKg);
      return { minWeight: minWeightImperial, maxWeight: maxWeightImperial };
    }
    return { minWeight: minWeightKg, maxWeight: maxWeightKg };
  };

  useEffect(() => {
    setBMI(calculateBMI());
  }, [height, weight, heightFT, heightIN, weightST, weightLBS]);

  const { minWeight, maxWeight } = calculateHealthyWeightRange();

  return (
    <div className="bg-white shadow rounded-2xl flex flex-col p-6">
      <h2 className="heading-m text-gunmetal">Enter your details below</h2>
      <div className="flex justify-between items-center mt-6 md:mt-8">
        <div className="flex items-center cursor-pointer md:mr-auto">
          <input
            type="radio"
            id="metric"
            name="system"
            value="metric"
            checked={system == "metric"}
            onChange={handleSystemChange}
            className="cursor-pointer w-[31px] h-[31px] border-borders checked:accent-blue rounded-full"
          />
          <label
            htmlFor="metric"
            className="ml-4 font-semibold cursor-pointer text-gunmetal">
            Metric
          </label>
        </div>
        <div className="flex items-center cursor-pointer md:mr-auto">
          <input
            type="radio"
            name="system"
            value="imperial"
            id="imperial"
            checked={system == "imperial"}
            onChange={handleSystemChange}
            className="cursor-pointer w-[31px] h-[31px] border-borders checked:accent-blue rounded-full"
          />
          <label
            htmlFor="imperial"
            className="ml-4 font-semibold cursor-pointer text-gunmetal">
            Imperial
          </label>
        </div>
      </div>
      <div
        className={`mt-6 md:mt-8 flex-col md:flex-row md:items-start md:justify-between md:gap-6 ${
          system == "metric" ? "flex" : "hidden"
        }`}
        id="metric">
        <div className="flex flex-col md:w-full">
          <label htmlFor="height" className="text-xs mb-2">
            Height
          </label>
          <div className="border border-[#D8E2E7] hover:border-blue focus-within:border-blue px-6 py-5 rounded-xl flex items-center justify-between">
            <input
              type="number"
              name="height"
              id="height"
              className="w-full outline-none heading-m text-gunmetal max-w-[100px]"
              placeholder="0"
              value={height}
              onChange={(prevHeight) => {
                setHeight(prevHeight.target.value);
              }}
            />
            <span className="heading-m text-blue">cm</span>
          </div>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 md:w-full">
          <label htmlFor="weight" className="text-xs mb-2">
            Weight
          </label>
          <div className="border border-[#D8E2E7] hover:border-blue focus-within:border-blue px-6 py-5 rounded-xl flex items-center justify-between">
            <input
              type="number"
              name="weight"
              id="weight"
              className="w-full outline-none heading-m text-gunmetal max-w-[100px]"
              placeholder="0"
              value={weight}
              onChange={(prevWeight) => {
                setWeight(prevWeight.target.value);
              }}
            />
            <span className="heading-m text-blue">kg</span>
          </div>
        </div>
      </div>

      <div
        className={`mt-6 md:mt-8 flex-col ${
          system == "imperial" ? "flex" : "hidden"
        }`}
        id="imperial">
        <div className="flex flex-col">
          <label htmlFor="height" className="text-xs mb-2">
            Height
          </label>
          <div className="flex items-center justify-between gap-4 md:gap-6">
            <div className="border border-[#D8E2E7] hover:border-blue focus-within:border-blue px-6 py-5 rounded-xl flex items-center justify-between w-full">
              <input
                type="number"
                name="heightFT"
                id="heightft"
                className="w-full outline-none heading-m text-gunmetal max-w-[100px]"
                placeholder="0"
                value={heightFT}
                onChange={(prevHeightFT) => {
                  setHeightFT(prevHeightFT.target.value);
                }}
              />
              <span className="heading-m text-blue">ft</span>
            </div>
            <div className="border border-[#D8E2E7] hover:border-blue focus-within:border-blue px-6 py-5 rounded-xl flex items-center justify-between w-full">
              <input
                type="number"
                name="heightIN"
                id="heightIN"
                className="w-full outline-none heading-m text-gunmetal max-w-[100px]"
                placeholder="0"
                value={heightIN}
                onChange={(prevHeightIN) => {
                  setHeightIN(prevHeightIN.target.value);
                }}
              />
              <span className="heading-m text-blue">in</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="weight" className="text-xs mb-2">
            Weight
          </label>
          <div className="flex items-center justify-between gap-4 md:gap-6">
            <div className="border border-[#D8E2E7] hover:border-blue focus-within:border-blue px-6 py-5 rounded-xl flex items-center justify-between w-full">
              <input
                type="number"
                name="weightST"
                id="weightST"
                className="w-full outline-none heading-m text-gunmetal max-w-[100px]"
                placeholder="0"
                value={weightST}
                onChange={(prevWeightST) => {
                  setWeightST(prevWeightST.target.value);
                }}
              />
              <span className="heading-m text-blue">st</span>
            </div>
            <div className="border border-[#D8E2E7] hover:border-blue focus-within:border-blue px-6 py-5 rounded-xl flex items-center justify-between w-full">
              <input
                type="number"
                name="weightLBS"
                id="weighLBS"
                className="w-full outline-none heading-m text-gunmetal max-w-[100px]"
                placeholder="0"
                value={weightLBS}
                onChange={(prevWeightLBS) => {
                  setWeightLBS(prevWeightLBS.target.value);
                }}
              />
              <span className="heading-m text-blue">lbs</span>
            </div>
          </div>
        </div>
      </div>

      {bmi ? (
        <div className="bg-bmi-gradient p-8 rounded-2xl md:rounded-tr-full md:rounded-br-full md:rounded-tl-[100rem] md:rounded-bl-[100rem] mt-6 flex flex-col md:flex-row md:items-center md:justify-between xl:max-w-[518px]">
          <div className="flex flex-col mb-6 md:mb-0 md:flex-1">
            <span className="text-white mb-2">Your BMI is...</span>
            <span className="heading-xl text-white font-bold">
              {bmi.toFixed(1)}
            </span>
          </div>
          <p className="text-white md:flex-1">
            Your BMI suggests you’re a{" "}
            {bmi < 18.5
              ? "underweight."
              : bmi < 25
              ? "healthy weight"
              : bmi < 30
              ? "overweight"
              : "obese"}
            .{" "}
            {system === "metric" && (
              <span>
                Your ideal weight is between :{" "}
                <span className="font-bold">
                  {minWeight.toFixed(1)}kgs - {maxWeight.toFixed(1)}kgs{" "}
                </span>
              </span>
            )}
            {system === "imperial" && (
              <span>
                Your ideal weight is between :{" "}
                <span className="font-bold">
                  {minWeight} - {maxWeight}
                </span>
              </span>
            )}
          </p>
        </div>
      ) : (
        <div className="bg-bmi-gradient p-8 rounded-2xl md:rounded-tr-full md:rounded-br-full md:rounded-tl-[100rem] md:rounded-bl-[100rem] mt-6 flex flex-col">
          <div className="flex flex-col mb-4">
            <span className="text-white mb-2 heading-m">Welcome!</span>
          </div>
          <p className="text-white">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
