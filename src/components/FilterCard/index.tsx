import "./styles.css";

export default function FilterCard() {
  return (
    <main>
      <section>
        <div className="card-filter container">
          <form className="card-filter-form">
            <input type="text" placeholder="Preço mínimo" />
            <input type="text" placeholder="Preço máximo" />
            <button className="form-buttom" type="submit">Filtrar</button>
          </form>
        </div>
      </section>
    </main>
  );
}
