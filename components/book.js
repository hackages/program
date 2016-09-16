import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Book = ({ source }) => {
  const book = source;
   return (
     <li>
       <Link to={`courses/${source.title}`} className="card">
         <div className="cover">
           <img src={ book.cover }/>
         </div>
         <div className="description">
         </div>
         <div className="actions">
         </div>
      </Link>
     </li>
   );
}

Book.propTypes = {
  source: PropTypes.object.isRequired
};

export default Book;
