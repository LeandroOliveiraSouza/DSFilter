import { useState } from "react";
import Header from "./components/Header";
import ListScreenBody from "./components/ListScreenBody";
import { ContextProductCount } from "./utils/context-product";

export default function App() {
  const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (
    <ContextProductCount.Provider value={{contextProductCount, setContextProductCount}}>
      <Header />
      <ListScreenBody />
    </ContextProductCount.Provider>
  );
}
