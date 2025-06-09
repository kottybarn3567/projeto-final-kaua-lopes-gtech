import React from "react";
import ProductCard from "../components/ProductCard"; // seu card estilizado com styled-components

const ProductListingPage = () => {
  const products = [
    {
      id: 1,
      name: "K-Swiss V8 - Masculino",
      oldPrice: 200,
      price: 100,
      discount: "30% OFF",
      // image aqui não é usado no card estilizado, pode remover
    },
  ];

  return (
    <div className="w-full d-flex flex-col" style={{ padding: "2rem 6rem", backgroundColor: "#F9F8FE"}}>
      {/* Título */}
      <p className="font-16 bold-600">Resultados para “Tênis” – 389 produtos</p>

      <div className="d-flex gap1em" style={{ marginTop: "2rem" }}>
        {/* Filtros */}
        <aside className="bg-white" style={{ minWidth: "250px", padding: "30px", borderRadius: "4px" }}>
          <h3 className="font-16 bold-600" style={{ marginBottom: "1rem" }}>Filtrar por</h3>
          <FilterGroup title="Marka" options={["Adiddas", "Calenciaga", "K-Swiss", "Nike", "Puma"]} />
          <FilterGroup title="Categoria" options={["Esporte e lazer", "Casual", "Utilitário", "Corrida"]} />
          <FilterGroup title="Gênero" options={["Masculino", "Feminino", "Unisex"]} />
          <FilterGroup title="Estado" options={["Novo", "Usado"]} type="radio" />
        </aside>

        {/* Produtos */}
        <main className="w-full d-flex flex-col gap1em">
          <div className="w-full d-flex justi-cont-sp-between align-i-center">
            <span className="font-14">Ordenar por:</span>
            <select className="round10" style={{ padding: "0.5rem 1rem" }}>
              <option>mais relevantes</option>
              <option>maior preço</option>
              <option>menor preço</option>
            </select>
          </div>

          <div
            className="d-grid"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)", // fixo 4 colunas
              gap: "1.5rem",
            }}
          >
            {/* Só um card completo */}
              <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
            <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
            <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
              <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
            <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
            <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
              <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
            <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
            <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
              <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
            <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
            <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
              <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
            <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
            <ProductCard
              type={"Tênis"}
              name={"K-Swiss V8 - Masculino"}
              old_price={"$200"}
              new_price={"$100"}
              offer_num={"30% OFF"}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

const FilterGroup = ({ title, options, type = "checkbox" }) => (
  <div style={{ marginBottom: "1.5rem" }}>
    <strong className="font-14">{title}</strong>
    <div className="d-flex flex-col" style={{ marginTop: "0.5rem" }}>
      {options.map((opt) => (
        <label key={opt} className="d-flex align-i-center gap1em" style={{ marginBottom: "0.5rem" }}>
          <input type={type} name={title} value={opt} />
          <span className="font-14">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

export default ProductListingPage;
