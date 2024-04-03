import "./styles.css";
import * as productService from "../../services/product-service.ts";

type Props = {
  filterParams: {
    minimumPrice: number;
    maximumPrice: number;
  };
};

export default function ListingCard({ filterParams }: Props) {
  return (
    <main>
      <section className="container">
        <div className="card-listing">
          {productService.findByPrice(filterParams.minimumPrice, filterParams.maximumPrice).map((product) => (
            <div key={product.id} className="card-listing-items">
              <p className="listing-items-title">{product.name}</p>
              <p className="listing-items-price">
                R$ {product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
