import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal"
import { useStateValue } from './StateProvider';
import FlipMove from "react-flip-move";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }] = useStateValue();

    const ticketNotVisibleState = {
        transform: "translateX(-100%)",
        opacity: 0.1
    };

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad"
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>

                    {basket.map(item => (
                        <FlipMove
                            enterAnimation={{
                                from: ticketNotVisibleState,
                                to: {}
                            }}
                            leaveAnimation={{
                                from: {},
                                to: ticketNotVisibleState
                            }}
                        >
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        </FlipMove>
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
