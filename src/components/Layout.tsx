import { ColorScheme } from "@craftdocs/craft-extension-api";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import manifest from "../../manifest.json";
import icon from "../icon.svg";

const isDev = process.env.NODE_ENV !== "production";

const Layout: React.FC<{}> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
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
    <div className="relative flex flex-col">
      {isHome ? (
        <div className="flex flex-col justify-center items-center gap-2 p-2">
          <img
            src={icon}
            alt="craft external image logo"
            className={"w-16 h-16"}
          />
          <div
            className={`flex justify-center items-center ${
              isHome ? "text-craftHeading" : "text-craftBody"
            } font-bold`}
          >
            <h1>{manifest.name}</h1>
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
          </div>
        </div>
      ) : (
        <div className="sticky top-0 flex items-center gap-2 p-2 text-craftHeading h-[44px]">
          <button className="w-6 select-none" onClick={() => navigate(-1)}>
            ←
          </button>
          {isDev && (
            <button
              onClick={() =>
                setColorSchema((p) => (p === "dark" ? "light" : "dark"))
              }
            >
              {colorSchema === "dark" ? "🌞" : "🌕"}
            </button>
          )}
        </div>
      )}
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
