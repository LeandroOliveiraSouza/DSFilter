import "./styles.css";
import FilterCard from "../FilterCard";
import ListingCard from "../ListingCard";

export default function ListScreenBody() {
  return (
    <main>
      <section id="list-screen-body-section">
        <div className="container">
          <div className="list-screen-body-items">
            <FilterCard />
          </div>
          <div className="list-screen-body-items">
            <ListingCard />
          </div>
        </div>
      </section>
    </main>
  );
}
