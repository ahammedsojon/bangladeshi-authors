import React from 'react';
import './Author.css';
const Author = (props) => {
    // console.log(props.author)
    const { name, img, born, district, books, property } = props.author;
    return (
        <div className="col">
            <div className="card h-100 author">
                <img src={img} className="m-auto" alt="..." />
                <div className="card-body">
                    <h5><span className="fw-bold">Name:</span> {name}</h5>
                    <p><span className="fw-bold">Born:</span> {born}</p>
                    <p><span className="fw-bold">Home Town:</span> {district}</p>
                    <p><span className="fw-bold">Books</span> <small>{books}</small></p>
                    <p><span className="fw-bold">Property:</span> ${property}</p>
                    <div className="text-center">
                        <button
                            onClick={() => props.handleAddToList(props.author)}
                            className="btn btn-lg btn-regular"><i className="fas fa-list-ul"></i> add to list</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Author;