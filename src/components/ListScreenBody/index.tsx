import "./styles.css";
import FilterCard from "../FilterCard";
import ListingCard from "../ListingCard";
import { useState } from "react";

type QueryParams = {
  minimumPrice: number;
  maximumPrice: number;
};

export default function ListScreenBody() {
  const [queryParams, setQueryParams] = useState<QueryParams>({
    minimumPrice: 0,
    maximumPrice: Number.MAX_VALUE,
  });

  function handleFilterValue(min: number, max: number) {
    setQueryParams({ minimumPrice: min, maximumPrice: max });
  }

  return (
    <main>
      <section id="list-screen-body-section">
        <div className="container">
          <div className="list-screen-body-items">
            <FilterCard onFilterPrice={handleFilterValue} />
          </div>
          <div className="list-screen-body-items">
            <ListingCard filterParams={queryParams} />
          </div>
        </div>
      </section>
    </main>
  );
}
