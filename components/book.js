import React, { PropTypes } from 'react';

const Book = ({ source }) => {
  const book = source;
   return (
     <li>
       <div className="card">
         <div className="cover">
           <img src={ book.cover }/>
         </div>
         <div className="description">
         </div>
         <div className="actions">
         </div>
      </div>
     </li>
   );
}

Book.propTypes = {
  source: PropTypes.object.isRequired
};

export default Book;
