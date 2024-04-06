import "./styles.css";
import * as productService from "../../services/product-service.ts";
import { useContext, useEffect, useState } from "react";
import { ContextProductCount } from "../../utils/context-product.ts";
import { ProductDTO } from "../../models/product.ts";

type Props = {
  filterParams: {
    minimumPrice: number;
    maximumPrice: number;
  };
};

export default function ListingCard({ filterParams }: Props) {
  const [product, setProduct] = useState<ProductDTO[]>([]);
  const { setContextProductCount } = useContext(ContextProductCount);

  useEffect(() => {
    const filteredProducts = productService.findByPrice(
      filterParams.minimumPrice,
      filterParams.maximumPrice
    );
    setProduct(filteredProducts);
    setContextProductCount(filteredProducts.length);
  }, [filterParams.minimumPrice, filterParams.maximumPrice, setContextProductCount]);

  return (
    <main>
      <section className="container">
        <div className="card-listing">
          {product &&
            product.map((product) => (
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
