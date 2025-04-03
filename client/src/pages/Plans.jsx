import React from 'react';
import Card from '../components/Card';

const plans = [
  { title: 'Plan Básico', price: '$5/mes', features: ['1 CPU', '512MB RAM', '20GB SSD'] },
  { title: 'Plan Intermedio', price: '$10/mes', features: ['2 CPU', '1GB RAM', '40GB SSD'] },
  { title: 'Plan Avanzado', price: '$20/mes', features: ['4 CPU', '2GB RAM', '80GB SSD'] },
];

const Plans = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestros Planes VPS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} title={plan.title} price={plan.price} features={plan.features} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
