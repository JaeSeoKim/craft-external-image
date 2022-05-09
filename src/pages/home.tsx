import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <button
        className="flex"
        onClick={() => {
          console.log("test");
          console.warn("test");
          console.error("test");
        }}
      >
        <Card title="Test Console">
          Test `console.log`, `console.warn`, `console.error`
        </Card>
      </button>
      <Link to={"/test"}>
        <Card title="Test Routing">Test Routing</Card>
      </Link>
      <button
        className="flex"
        onClick={() => {
          throw new Error("hello error");
        }}
      >
        <Card title="Test ErrorBoundary">Test ErrorBoundary</Card>
      </button>
    </div>
  );
};

export default Home;
