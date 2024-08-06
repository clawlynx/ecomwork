import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import MaterialSelectPage from "./MaterialSelectPage";

const materialType = [
  { id: 1, material: "cotton" },
  { id: 2, material: "polyster" },
  { id: 3, material: "Denim" },
  { id: 4, material: "corduroy" },
  { id: 5, material: "knitted fabric" },
  { id: 6, material: "lycra" },
  { id: 7, material: "hacob" },
  { id: 8, material: "linen" },
  { id: 9, material: "velvet" },
  { id: 10, material: "rayon" },
  { id: 11, material: "georgette" },
  { id: 12, material: "crepe" },
  { id: 13, material: "hacoba" },
  { id: 14, material: "spandes" },
  { id: 15, material: "satin" },
];

const buttonType = [
  { id: 1, color: "bg-white" },
  { id: 2, color: "bg-black" },
  { id: 3, color: "bg-red-700" },
  { id: 4, color: "bg-orange-600" },
  { id: 5, color: "bg-amber-400" },
  { id: 6, color: "bg-yellow-900" },
  { id: 7, color: "bg-lime-500" },
  { id: 8, color: "bg-green-800" },
  { id: 9, color: "bg-teal-300" },
  { id: 10, color: "bg-cyan-500" },
  { id: 11, color: "bg-sky-400" },
  { id: 12, color: "bg-rose-600" },
];

export const colorType = [
  { id: 1, color: "bg-white" },
  { id: 2, color: "bg-black" },
  { id: 3, color: "bg-blue-500" },
  { id: 4, color: "bg-zinc-500" },
];

export default function ProductScreen() {
  const [showMaterials, setShowMaterials] = useState(false);
  const [showButtonTypes, setShowButtonTypes] = useState(false);
  const [material, setMaterial] = useState("none");
  const [button, setButton] = useState("bg-black");
  const [color, setColor] = useState("bg-white");
  const [showcolor, setShowColor] = useState("");
  const [showMaterialBar, setShowMaterialBar] = useState(false);

  function handleButtonType() {
    if (showMaterials) {
      setShowMaterials(false);
    }
    setShowButtonTypes(!showButtonTypes);
  }
  function handleMaterials() {
    if (showButtonTypes) {
      setShowButtonTypes(false);
    }
    setShowMaterials(!showMaterials);
  }
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center mt-10 px-2 py-10 md:p-10">
      <div className="py-5 px-2 md:p-5 bg-white rounded-lg">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png"
          className="w-96 h-96"
        ></img>
      </div>
      {showMaterialBar ? (
        <MaterialSelectPage
          setMaterialShowBar={setShowMaterialBar}
          materialName={material}
          setMaterialColor={setColor}
        />
      ) : (
        <div className="bg-white w-full py-5 p-2 md:p-5 rounded-t-3xl ">
          <div className="flex flex-col md:flex-row gap-5 justify-between md:items-center">
            <div className="flex gap-3 md:ms-5">
              <button
                onClick={handleMaterials}
                className="flex justify-between items-center text-sm bg-black text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link"
              >
                <span>MATERIALS</span>
                <span className="md:text-xl">
                  <IoMdArrowDropdown />
                </span>
              </button>
              <button
                onClick={handleButtonType}
                className="flex justify-between items-center text-sm bg-black text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link"
              >
                <span>BUTTON TYPE</span>
                <span className="text-xl">
                  <IoMdArrowDropdown />
                </span>
              </button>
            </div>
            <div className="flex gap-3 me-5">
              <button className="bg-black text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link">
                PREVIOUS
              </button>
              <button className="bg-black text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link">
                BUY
              </button>
            </div>
          </div>
          {showMaterials && (
            <div className="p-5 grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {materialType.map((x) => (
                <div className="relative flex flex-col">
                  <button
                    key={x.id}
                    onClick={() => {
                      setShowMaterialBar(true);
                      setMaterial(x.material);
                    }}
                    className="w-full  bg-neutral-500 text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link"
                  >
                    <div className="flex justify-center item-center w-full">
                      <span>{x.material.toUpperCase()}</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          )}
          {showButtonTypes && (
            <div className="p-5 grid gap-2 grid-cols-3 md:grid-cols-6">
              {buttonType.map((x) => (
                <div
                  key={x.id}
                  onClick={() => {
                    setButton(x.color);
                    setShowButtonTypes(false);
                  }}
                  className={`${x.color} w-10 h-10 rounded-full m-3 border border-green-950 cursor-pointer hover:w-11`}
                ></div>
              ))}
            </div>
          )}

          <h1 className="p-5 text-black flex gap-2 items-center">
            Material Selected: {material}{" "}
            <div
              className={`w-5 h-5 rounded-full border border-green-950 ${color}`}
            ></div>
          </h1>
          <h1 className="px-5 text-black flex gap-2 items-center">
            Button :{" "}
            <div
              className={`w-5 h-5 rounded-full  border border-green-950  ${button}`}
            ></div>
          </h1>
        </div>
      )}
    </div>
  );
}
