import React from 'react';
import BrandPageTemplate from '../components/BrandPageTemplate';
import { canoBondBrandData } from '../mockData';

const CanoBondPage = () => {
  return <BrandPageTemplate brandData={canoBondBrandData} />;
};

export default CanoBondPage;