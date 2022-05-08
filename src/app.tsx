import { ColorScheme } from "@craftdocs/craft-extension-api";
import React, { useEffect, useState } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import manifest from "../manifest.json";

const isDev = process.env.NODE_ENV !== "production";

export const App: React.FC<{}> = () => {
  const [colorSchema, setColorSchema] = useState<ColorScheme>("light");

  useEffect(() => {
    craft.env.setListener((event) => {
      setColorSchema(event.colorScheme);
    });
  }, []);

  useEffect(() => {
    if (colorSchema === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorSchema]);

  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center items-center h-[44px] text-craftHeading font-bold">
        {manifest.name}
        {isDev && (
          <button
            className="ml-2"
            onClick={() =>
              setColorSchema((p) => (p === "dark" ? "light" : "dark"))
            }
          >
            {colorSchema === "dark" ? "🌞" : "🌕"}
          </button>
        )}
      </h1>
      <div className="p-2">
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </div>
    </div>
  );
};
