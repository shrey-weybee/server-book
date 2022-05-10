import React from 'react';
import Card from './Card';

function CategoryCard({ category, params }) {
    if(!category.commands || !category.commands.length) {
        return <></>
    }
  return (
    <div className="my-3 p-3 bg-body rounded shadow-lg">
      <h6 className="border-bottom pb-2 mb-0">{category.name}</h6>
      { category.commands &&
        category.commands.map((command) => <Card key={command.command} command={command} params={params} />)}
    </div>
  );
}

export default CategoryCard;
