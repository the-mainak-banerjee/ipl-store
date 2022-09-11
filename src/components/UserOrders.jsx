import React from 'react'
import { useOrder } from '../contexts'
import { CartItems } from './CartItems'
import { v4 as uuid } from 'uuid'

const UserOrders = () => {
    const { myOrders } = useOrder()
  

  return (
    <section>
        {myOrders?.map((item,idx) => {
            return(
                <div key={uuid()}>
                    <h3 className='m-4 font-lora text-2xl'>Order Number: {idx+1}</h3>
                    {item.product.products.map(item=> {
                        return(
                            <CartItems 
                              key={item._id}
                              id={item._id}
                              product={item}
                              src={item.src}
                              name={item.name}
                              description = {item.description}
                              price = {item.price}
                              discount={item.discount}
                              qty = {item.qty}
                              showActions={false}
                            />
                        )
                    })  
                    }
                </div>
            )
        })

        }
    </section>
  )
}

export default UserOrders
