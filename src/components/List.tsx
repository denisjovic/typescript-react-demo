import React from 'react';
import '../App.css'
import {InitState as initProps} from '../App'

const List: React.FC<initProps> = ({person}) => {
    const renderList = (): JSX.Element[] => {
        return person.map(p => (
            <li className="list">
                <div className="list-header">
                    <img className="list-image" src={p.url} alt=""/>
                    <h2>{p.name}</h2>
                </div>
                <p>{p.age} years old</p>
                <p className="list-note">{p.note}</p>
            </li>
        ))
    }
    return <ul>
        {renderList()}
    </ul>
}

export default List