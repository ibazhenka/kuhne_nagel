import React, { CSSProperties } from 'react';
import { Card, Divider } from '../components';
import { Chip } from '../Chip/Chip';
import { RadioButton } from '../RadioButton/RadioButton';
import { Button } from '../Button/Button';
import { Product } from '../product';

export function ProductInfo({ product, style }: {product: Product | undefined, style: CSSProperties}) {
  return (
    <Card style={style}>
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
            <fieldset>
              <RadioButton label="Option 1" checked />
              <p className="Typography-body1 ProductInfo-text">
                {product.option1}
              </p>
              <RadioButton label="Option 2" />
              <p className="Typography-body1 ProductInfo-text">
                {product.option2}
              </p>
            </fieldset>
          </>
        ) : <p className="Typography-body1">Please choose a product for more info</p>}
      </div>
    </Card>
  );
}
