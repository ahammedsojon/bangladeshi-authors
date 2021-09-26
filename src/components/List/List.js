import React from 'react';
import Li from '../Li/Li';
import './List.css';

const List = (props) => {
    const { list } = props;
    const uniq = list.reduce((previous, author) => {
        if (previous.indexOf(author) === -1) previous.push(author);
        return previous;
    }, []);
    const total = uniq.reduce((previous, author) => previous + author.property, 0);

    return (
        <div className="list">
            <h2 className="text-center">Authors List</h2>
            <h4 className="my-3 text-center"><i className="fas fa-user"></i> Authors Added: <span className="">{uniq.length}</span></h4>
            <h4 className="my-3 text-center">Total Property: <span className="">${total}</span></h4>
            {uniq.map(elem => <Li
                key={elem.id}
                name={elem.name}
                img={elem.img}></Li>)}
        </div>
    );
};

export default List;