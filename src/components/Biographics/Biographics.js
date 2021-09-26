import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import List from '../List/List';
import './Biographics.css';
const Biographics = () => {
    const [authors, setAuthors] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setAuthors(data))
    }, [])

    // added author into the list
    const handleAddToList = author => {
        const newList = [...list, author];
        setList(newList);
    }
    return (
        <div className="biographics py-3">
            <div className="row">

                <div className="col-md-9">
                    <div className="author-container">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {authors.map(author => <Author
                                key={author.id}
                                author={author}
                                handleAddToList={handleAddToList}></Author>)}
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="list-container p-2 shadow-lg">
                        <List list={list}></List>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Biographics;