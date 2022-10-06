import React, { useState } from 'react';
import products from './products.json';
import { Card, Main, Subtitle, Divider } from './components';
import { Tabs } from './Tabs/Tabs';
import { Checkbox } from './Checkbox/Checkbox';
import { Chip } from './Chip/Chip';
import { Button } from './Button/Button';
import { RadioButton } from './RadioButton/RadioButton';

const categoryList = Array.from(new Set(products.map((p) => p.category)))
  .map((category) => ({ value: category, active: false }));

interface ProductProps {
  productName: string,
  tags: string[],
  category: string,
  manufacturerUrl: string,
  description: string[],
  option1: string | null,
  option2: string | null
}

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
            <div className="SearchingResult-container">
              {filteredProducts.map((p) => (
                <Card
                  role="button"
                  key={p.productName}
                  className="ResultItem-card"
                  onClick={() => {
                      setActiveItem(p);
                    }}
                >
                  <div>
                    <h2 className="Typography-h2">
                      {p.productName}
                    </h2>
                    <div className="Chip-container">
                      {p.tags.map((tag) => <Chip key={tag} label={tag} />)}
                    </div>
                  </div>
                  <Subtitle>{p.category}</Subtitle>
                </Card>
))}
            </div>
          </div>
          <aside className="ProductInfo-container">
            <Card>
              <h2 className="Typography-h2 Card-title">
                Product Details
              </h2>
              <Divider />
              <div className="ProductInfo-content">
                {activeItem ? (
                  <>
                    <h2 className="Typography-h2">
                      {activeItem.productName}
                    </h2>
                    <div className="Chip-container">
                      {activeItem.tags.map((tag) => <Chip key={tag} label={tag} />)}
                    </div>
                    <Button href={activeItem.manufacturerUrl} target="_blank">
                      Go to Manufacturer
                    </Button>
                    {activeItem.description.map((d) => (
                      <p key={d} className="Typography-body1 ProductInfo-text">
                        {d}
                      </p>
                      ))}
                    <RadioButton label="Option 1" />
                    <p className="Typography-body1 ProductInfo-text">
                      {activeItem.option1}
                    </p>
                    <RadioButton label="Option 2" />
                    <p className="Typography-body1 ProductInfo-text">
                      {activeItem.option2}
                    </p>
                  </>
) : 'Please, choose an item to get more info'}
              </div>
            </Card>
          </aside>
        </div>
      </section>
    </Main>
  );
}

export default App;
