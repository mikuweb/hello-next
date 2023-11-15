import React from "react";

import Button from "./_component/Button";
import HitsNumber from "./_component/HitsNumber";

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{" "}
        <Button>
          <HitsNumber />
        </Button>
        .
      </p>
    </main>
  );
}

export default Home;
