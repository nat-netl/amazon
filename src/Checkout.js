import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useTransition, animated } from "react-spring";

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  console.log (basket )

  const transition = useTransition(basket, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 }
  });

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''></img>

        <div>
          <h2 className='checkout__title'>
            Your shopping basket
          </h2>
          {transition((props, item) => {
            return (
              <animated.div style={props}>
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                />
              </animated.div>
            );
          })}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout