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
      <section style={{ display: 'flex', gap: 16 }}>
        <aside style={{ width: 320, maxWidth: '100%' }} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          width: '100%',
          minWidth: 800,
        }}
        >
          <header style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <h1 className="Typography-h1">Create Demand</h1>
            <p className="Typography-subtitle" style={{ color: 'var(--secondary-text-color)' }}>Search the product you
              need here. Use tags to find any alternative.
            </p>
          </header>
          <Tabs />
          <div style={{
            display: 'flex',
            gap: 16,
            marginTop: 24,
          }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              flexGrow: 1,
            }}
            >
              <Card>
                <h2 className="Typography-h2 Card-title">
                  I’m looking for...
                </h2>
                <Divider />
                <div className="Card-content">
                  <div style={{ display: 'flex', gap: 32 }}>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
                      <div style={{ display: 'flex', marginTop: 24, gap: 8, flexWrap: 'wrap' }}>
                        {p.tags.map((tag) => <Chip key={tag} label={tag} />)}
                      </div>
                    </div>
                    <Subtitle style={{ minWidth: 100 }}>{p.category}</Subtitle>
                  </Card>
))}
              </div>
            </div>
            <aside style={{
              width: 320,
              flexShrink: 0
            }}
            >
              <Card>
                <h2 className="Typography-h2 Card-title">
                  Product Details
                </h2>
                <Divider />
                <div style={{ padding: '42px 24px 24px' }}>
                  {activeItem ? (
                    <>
                      <h2 className="Typography-h2">
                        {activeItem.productName}
                      </h2>
                      <div style={{ display: 'flex', marginTop: 24, gap: 8, flexWrap: 'wrap' }}>
                        {activeItem.tags.map((tag) => <Chip key={tag} label={tag} />)}
                      </div>
                      <Button href={activeItem.manufacturerUrl} target="_blank">
                        Go to Manufacturer
                      </Button>
                      {activeItem.description.map((d) => (
                        <p key={d} className="Typography-body1" style={{ marginTop: 8 }}>
                          {d}
                        </p>
                      ))}
                      <RadioButton label="Option 1" />
                      <p className="Typography-body1" style={{ marginTop: 8 }}>
                        {activeItem.option1}
                      </p>
                      <RadioButton label="Option 2" />
                      <p className="Typography-body1" style={{ marginTop: 8 }}>
                        {activeItem.option2}
                      </p>
                    </>
) : 'Please, choose an item to get more info'}
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </Main>
  );
}

export default App;
