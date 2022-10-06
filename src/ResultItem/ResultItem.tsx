import React from 'react';
import clsx from 'clsx';
import { Card, Subtitle } from '../components';
import { Chip } from '../Chip/Chip';
import { ProductProps } from '../product-props';

export function ResultItem({ product, activeItem, setActiveItem }:
                             {
                               product: ProductProps,
                               activeItem: string | undefined,
                               setActiveItem: () => void
                             }) {
  return (
    <Card
      role="button"
      key={product.productName}
      className={clsx('ResultItem-card', { 'ResultItem-active': activeItem === product.productName })}
      onClick={() => setActiveItem()}
    >
      <div>
        <h2 className="Typography-h2">
          {product.productName}
        </h2>
        <div className="Chip-container">
          {product.tags.map((tag) => <Chip key={tag} label={tag} />)}
        </div>
      </div>
      <Subtitle>{product.category}</Subtitle>
    </Card>
  );
}
