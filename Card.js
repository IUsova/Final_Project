import React from 'react';
import './Card.css'
import {Link} from "react-router-dom";

export default class Card extends React.Component {
    static defaultProps = {
        id: '',
        imageUrl: '',
        name: '',
        price: ''
    }
    render() {
        const { imageUrl, name, price } = this.props;
        return (
            <div className={'card'}>
                <div className="card__image">
                    <img src={imageUrl} alt="Pizza"/>
                </div>
                <h3 className={'card__title'}>{name}</h3>
                <div className={'card__price'}>{price} руб.</div>
                <button className={'button'}>
                    <Link to={'basket'} className={'link card__link'}>Добавить в корзину</Link>
                </button>
            </div>
        );
    }
}