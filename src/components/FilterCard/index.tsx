import "./styles.css";
import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  onFilterPrice: (min: number, max: number) => void;
};

type FormData = {
  minimumPrice?: number;
  maximumPrice?: number;
};

export default function FilterCard({ onFilterPrice }: Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value});
  }

  function handleFormClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const minPrice = formData.minimumPrice !== undefined ? formData.minimumPrice : 0;
    const maxPrice = formData.maximumPrice !== undefined ? formData.maximumPrice : Number.MAX_VALUE;
    onFilterPrice(minPrice, maxPrice);
  }

  return (
    <main>
      <section>
        <div className="card-filter container">
          <form onSubmit={handleFormClick} className="card-filter-form">
            <input
              name="minimumPrice"
              value={formData.minimumPrice || ""}
              type="text"
              placeholder="Preço mínimo"
              onChange={handleInputChange}
            />
            <input
              name="maximumPrice"
              value={formData.maximumPrice || ""}
              type="text"
              placeholder="Preço máximo"
              onChange={handleInputChange}
            />
            <button className="form-buttom" type="submit">
              Filtrar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
