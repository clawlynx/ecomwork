import React from "react";
import { colorType } from "./ProductScreen";

export default function MaterialSelectPage({
  setMaterialShowBar,
  materialName,
  setMaterialColor,
}) {
  return (
    <div className="bg-white w-full py-5 p-2 md:p-5 rounded-t-3xl ">
      <div className="flex flex-col md:flex-row gap-5 justify-between md:items-center">
        <div className="flex gap-3 md:ms-5">
          <button className="text-sm bg-black text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link">
            {materialName.toUpperCase()}
          </button>
        </div>
        <div className="flex gap-3 me-5">
          <button
            onClick={() => setMaterialShowBar(false)}
            className="bg-black text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link"
          >
            Back
          </button>
        </div>
      </div>
      <div className="p-5 grid gap-3 grid-cols-2 md:grid-cols-4">
        {colorType.map((x) => (
          <div
            key={x.id}
            className={`${x.color} w-32 h-32 shadow-xl cursor-pointer`}
            onClick={() => {
              setMaterialColor(x.color);
              setMaterialShowBar(false);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
