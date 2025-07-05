import React from 'react';

const Products = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <h1>Products {id}</h1>;
};

export default Products;
