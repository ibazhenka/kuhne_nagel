import React, { useEffect, useState } from 'react';
import products from './products.json';
import { Card, Main, Divider } from './components';
import { Tabs } from './Tabs/Tabs';
import { Checkbox } from './Checkbox/Checkbox';
import { ProductInfo } from './ProductInfo/ProductInfo';
import { ResultItem } from './ResultItem/ResultItem';
import { Product } from './product';

const categoryList = Array.from(new Set(products.map((p) => p.category)))
  .map((category) => ({ value: category, active: false }));

interface FilterValuesProps {
  active: boolean,
  value: string,
}

async function loadProducts(searchText: string, categories: FilterValuesProps[]): Promise<Product[]> {
  await new Promise((r) => {
    setTimeout(r, 1000);
  });
  const normalizedSearchText = searchText.toLocaleLowerCase();
  const filteredByText = products.filter((p) => p.productName.toLocaleLowerCase().includes(normalizedSearchText));

  const filteredCategories = categories
    .filter((cat) => cat.active)
    .map((x) => x.value);
  if (filteredCategories.length === 0) {
    return filteredByText;
  }
  return filteredByText.filter((p) => filteredCategories.includes(p.category));
}

function App() {
  const [activeItem, setActiveItem] = useState<Product | undefined>(undefined);
  const [categories, setCategories] = useState<FilterValuesProps[]>(categoryList);
  const [search, setSearch] = useState('');
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleCheckboxChange = (category: string) => {
    const filteredByCategories = categories
      .map((cat) => cat.value === category ? { ...cat, active: !cat.active } : cat);
    setCategories(filteredByCategories);
  };

  useEffect(() => {
    setIsLoading(true);
    let isCanceled = false;
    loadProducts(search, categories).then((list) => {
      if (!isCanceled) {
        setActiveItem(undefined);
        setProductList(list);
        setIsLoading(false);
      }
    }).catch(() => {
        setActiveItem(undefined);
        setProductList([]);
        setIsLoading(false);
        alert('Error');
      }
    );
    return () => {
      isCanceled = true;
    };
  }, [search, categories]);

  const handlerScrollUp = () => {
    if (document.documentElement.scrollTop > 0) {
      window.scrollBy({
        top: -document.documentElement.scrollTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

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
                  ))}
                </div>
                <div className="Search-input-container">
                  <img src="./search.svg" alt="search" className="Search-icon" />
                  <input
                    onChange={(e) => {
                    setSearch(e.target.value.toLocaleLowerCase());
                  }}
                    type="search"
                    className="Search-input"
                  />
                </div>
              </div>
            </Card>
            <div className="ResultList-container" style={{ opacity: isLoading ? 0.5 : 1 }}>
              {productList.length > 0 ?
                productList.map((p) => (
                  <ResultItem
                    key={p.productName}
                    activeItem={activeItem?.productName}
                    setActiveItem={() => setActiveItem(p)}
                    product={p}
                  />
                ))
                : <Card className="FeedbackMessage Typography-body1">Sorry, we don't have any data matching your request :(</Card>}

            </div>
          </div>
          <aside className="ProductInfo-container">
            {productList.length > 0 && <ProductInfo product={activeItem} style={{ opacity: isLoading ? 0.5 : 1 }} />}
          </aside>
        </div>
      </section>
      <button
        type="button"
        className="Button-scrollToTop"
        onClick={handlerScrollUp}
      >
        <img src="./arrow-top.svg" alt="arrow" />
      </button>
    </Main>
  );
}

export default App;
