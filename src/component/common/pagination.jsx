import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';


const Pagination = (props) => {
    const {itemCount, pageSize, onPageChange, currentPage} = props;
    console.log(currentPage);
    const pageCount = Math.ceil(itemCount / pageSize); //or Math.ceil(itemCount / pageSize) which equals to integer number
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return ( 
        <React.Fragment>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {pages.map(page => (
                        <li key={page} class={ page === currentPage ? 'page-item active' : 'page-item'}>
                            <a class="page-link" style={{cursor: 'pointer'}}
                            onClick={() => onPageChange(page)}
                            currentPage={currentPage} href="#">{page}</a></li>

                    ))}
                </ul>
            </nav>
        </React.Fragment>
     );
}

//for type checking --- it checks the input type entering by user, whether it corresponds or not
Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired
};

export default Pagination;