import React from 'react';
import { Card, Divider } from '../components';
import { Chip } from '../Chip/Chip';
import { RadioButton } from '../RadioButton/RadioButton';
import { Button } from '../Button/Button';
import { ProductProps } from '../product-props';

export function ProductInfo({ product }: {product: ProductProps | undefined}) {
  return (
    <Card>
      <h2 className="Typography-h2 Card-title">
        Product Details
      </h2>
      <Divider />
      <div className="ProductInfo-content">
        {product ? (
          <>
            <h2 className="Typography-h2">
              {product.productName}
            </h2>
            <div className="Chip-container">
              {product.tags.map((tag) => <Chip key={tag} label={tag} />)}
            </div>
            <Button href={product.manufacturerUrl} target="_blank">
              Go to Manufacturer
            </Button>
            {product.description.map((d) => (
              <p key={d} className="Typography-body1 ProductInfo-text">
                {d}
              </p>
            ))}
            <RadioButton label="Option 1" />
            <p className="Typography-body1 ProductInfo-text">
              {product.option1}
            </p>
            <RadioButton label="Option 2" />
            <p className="Typography-body1 ProductInfo-text">
              {product.option2}
            </p>
          </>
        ) : <p className="Typography-body1">Please choose a product for more info</p>}
      </div>
    </Card>
  );
}
