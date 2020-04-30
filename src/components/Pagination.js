import React from 'react';

const Pagination = ({tracksPerPage, totalTracks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTracks / tracksPerPage); i++) {
    pageNumbers.push(i);
  }

  var numStyle = {
    'font-size': '10px'
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => {
          return (
            <li key={number} className='page-item' style={numStyle}>
              <a onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination;
