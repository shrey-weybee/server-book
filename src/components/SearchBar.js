import React from 'react';

function SearchBar({onChange,search}) {
  return (
    <div className="bg-light p-3 mt-3">
      <input type="text" className="form-control shadow-none" placeholder="Search" value={search} onChange={onChange} onKeyUp={onChange} />
    </div>
  );
}

export default SearchBar;
