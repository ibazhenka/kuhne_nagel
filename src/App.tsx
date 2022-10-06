import React, { useState } from 'react';
import products from './products.json';
import { Card, Main, Divider } from './components';
import { Tabs } from './Tabs/Tabs';
import { Checkbox } from './Checkbox/Checkbox';
import { ProductInfo } from './ProductInfo/ProductInfo';
import { ResultItem } from './ResultItem/ResultItem';
import { ProductProps } from './product-props';

const categoryList = Array.from(new Set(products.map((p) => p.category)))
  .map((category) => ({ value: category, active: false }));

interface FilterValuesProps {
  active: boolean,
  value: string,
}

function App() {
  const [activeItem, setActiveItem] = useState<ProductProps | undefined>(undefined);
  const [categories, setCategories] = useState<FilterValuesProps[]>(categoryList);
  const [search, setSearch] = useState('');

  const handleCheckboxChange = (category: string) => {
    const filteredByCategories = categories
      .map((cat) => cat.value === category ? { ...cat, active: !cat.active } : cat);
    setCategories(filteredByCategories);
  };

  const filteredByText = products.filter((p) => p.productName.toLocaleLowerCase().includes(search));

  const filteredCategories = categories
    .filter((cat) => cat.active)
    .map((x) => x.value);
  const filteredProducts = filteredCategories.length > 0 ? filteredByText.filter((p) => filteredCategories.includes(p.category)) : filteredByText;

  return (
    <Main>
      <aside className="Plug" />
      <section className="General-container">
        <header className="Header">
          <h1 className="Typography-h1">Create Demand</h1>
          <p className="Typography-subtitle Header-subtitle">Search the product you
            need here. Use tags to find any alternative.
          </p>
        </header>
        <Tabs />
        <div className="Data-container">
          <div className="Searching-container">
            <Card>
              <h2 className="Typography-h2 Card-title">
                I’m looking for...
              </h2>
              <Divider />
              <div className="Card-content">
                <div className="Checkboxes-container">
                  {categories.map((category) => (
                    <Checkbox
                      key={category.value}
                      label={category.value}
                      checked={category.active}
                      onChange={() => handleCheckboxChange(category.value)}
                    />
)) }
                </div>
                <input
                  onChange={(e) => {
                      setSearch(e.target.value.toLocaleLowerCase());
                    }}
                  type="search"
                  className="Search-input"
                />
              </div>
            </Card>
            <div className="ResultList-container">
              {filteredProducts.map((p) => (
                <ResultItem
                  key={p.productName}
                  activeItem={activeItem?.productName}
                  setActiveItem={() => setActiveItem(p)}
                  product={p}
                />
))}
            </div>
          </div>
          <aside className="ProductInfo-container">
            <ProductInfo product={activeItem} />
          </aside>
        </div>
      </section>
    </Main>
  );
}

export default App;
