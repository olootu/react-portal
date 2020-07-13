import React from 'react';
import Button from 'react-bootstrap/Button';

const Pagination = ({ count, itemsPerPage, page, paginateRequestCall }) => {

    let renderPaginationNumbers;

    const pageNumbers = [];

    if (count !== null) {
        for (let i = 1; i <= Math.ceil(count / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        renderPaginationNumbers = pageNumbers.map(number => {
            let classes = page === number ? 'active' : 'paging';

            return (
                <Button variant="light" key={number}
                    onClick={() => paginateRequestCall(number)}
                    className={classes}>{number}</Button>

            );
        });
    }
    return (
        <div>
            {renderPaginationNumbers}
        </div>

    )
};

export default Pagination