import React from "react";
import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <div>
      <Card title="Test Console">
        Test `console.log`, `console.warn`, `console.error`
      </Card>
    </div>
  );
};

export default Home;
