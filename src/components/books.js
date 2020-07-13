import React from 'react';
import Card from 'react-bootstrap/Card';

const Books = ({ books }) => {

    return (
        <div>

            {books.map((book) => (
                <Card key={book.id}>
                    <Card.Body >
                        <h5 className="card-titl"><b>Title:</b>{book.book_title}</h5>
                        <h6 className=""><b>City:</b>{book.book_publication_city}</h6>
                        <p className=""><b>Country:</b>{book.book_publication_country}</p>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
};

export default Books