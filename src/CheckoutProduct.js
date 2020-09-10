import React from 'react'
import './CheckoutProduct.css'
import FlipMove from "react-flip-move"
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ }, dispatch] = useStateValue();

    // const customLeaveAnimation = {
    //     from: { transform: 'scale(1, 1)' },
    //     to: { transform: 'scale(0.5, 1) translateY(-20px)' }
    // };

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })

    }

    return (


        <div className='checkoutProduct'>

            <img className='checkoutProduct__image' src={image} alt="" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>
                    {title}
                </p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    <p>{Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span className="star" role="img" aria-label="star">⭐</span>
                        ))}
                    </p>
                </div>

                <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>

    )
}

export default CheckoutProduct
