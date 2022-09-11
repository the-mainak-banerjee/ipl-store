import React, { useEffect, useState } from 'react'
import { CartItems, CartSummary, PrimaryButton, SubNavbar, UserAddressCard } from '../../components'
import { useAddress, useCart, useOrder  } from '../../contexts'
import { v4 as uuid} from 'uuid'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { usePageTitle } from '../../hooks'

export const OrderSummary = () => { 

    usePageTitle('IPLStores-Order')
    const [deliveryAddress,setDeliveryAddress] = useState({})
    const { myCart } = useCart()
    const { currentUserAddress } = useAddress()
    const navigate = useNavigate()
    const { placeOrder, orderProcessing, setOrderProcessing } = useOrder()
    

    useEffect(() => {
        if(orderProcessing === false){
            navigate('/profile?type=orders')
            setOrderProcessing(null)
        }
    // eslint-disable-next-line
    },[orderProcessing])

    const handleNewAddress = () => {
        navigate('/profile?type=address')
    }

    const handleDeliveryAddress = (id) => {
        setDeliveryAddress(currentUserAddress?.find(item => item.id === id))
    }

    
    const handlePlaceOrder = async (finalPrice) => {
        if(Object.keys(deliveryAddress).length > 0){
            const options = {
                key: 'rzp_test_Or46zqiarMuRlz', // Enter the Key ID generated from the Dashboard
                amount: finalPrice * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "IPL Store",
                description: "An E-commerce Store For IPL Teams Accessories.",
                image: "../../assets/logo/logo.png",
                // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: function (response){
                    
                    const order = {
                        razorpay_payment_id: response.razorpay_payment_id,
                        products: [...myCart],
                        totalAmount: finalPrice
                    }
                    placeOrder(order)
                },
                prefill: {
                    name: deliveryAddress.fname,
                    email: deliveryAddress.email,
                    contact:  deliveryAddress.mobile,
                    method: "netbanking"
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open()
        }else{
            toast('Please Select An Address First')
        }
    }

    const displayCartItems = myCart?.map(item => {
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

    let showAddressDetails = currentUserAddress?.map((item) => {
        return (
            // <div className='m-4 p-4 z-50 relative' key={uuid()}>
            //     <div className='mx-auto bg-ternary rounded-xl shadow-lg shadow-primaryHover'>
            //     <div className='mx-auto py-4 flex flex-col items-center justify-center font-poppins'>
            //         <p className='my-4'>Name: {item?.fName}</p>   
            //         <p className='my-4'>Mobile: {item?.mobile}</p>   
            //         <p className='my-4'>Pin: {item?.pin}</p>   
            //         <p className='my-4'>Address: {item?.address}</p>   
            //         <p className='my-4'>City/Town: {item?.town}</p>   
            //         <p className='my-4'>State: {item?.state}</p>
            //     </div>
            //     </div>
            // </div>
            <UserAddressCard
                key={uuid()}
                item={item}
                handleDeliveryAddress={handleDeliveryAddress}
                isSelected={deliveryAddress.id === item.id}
            />
        )
    })

  return (
    <>
        <section>
            <SubNavbar pageName='Order'/>
        </section>
        {myCart?.length > 0 
           ?( 
                <section className='lg:pl-36 flex flex-col items-center justify-center'>
                    <div>
                        <h3 className='m-4 font-lora text-2xl'>Order Summary</h3>
                        {displayCartItems}
                    </div>
                    <div className='w-[80vw] border-ternary border-2 rounded-lg'>
                        <h3 className='m-4 font-lora text-2xl'>Delivery Address</h3>
                        {showAddressDetails}
                        <div className='flex m-4 w-full'>
                            <button className='flex justify-center items-center bg-secondary py-2 px-4 rounded-lg my-4 hover:bg-secondaryHover' onClick={handleNewAddress}>Add New Address</button>
                        </div>
                    </div>
                    <div className='w-[80vw] sm:w-[60vw] lg:w-[40vw] mx-auto'>
                        <CartSummary
                            title='Order Details'
                            isCart={false}
                            handlePlaceOrder={handlePlaceOrder}
                        />
                    </div>
                </section>
            ) : (
                <section className='w-full mt-10 lg:pl-36 font-poppins flex items-center justify-center'>
                    <div className='h-[60vh] flex flex-col items-center justify-center'>
                    <h3 className='text-2xl font-bold font-lora'>You Have No Item In Cart</h3> 
                    <Link to='/products'><PrimaryButton>Fill It <AiOutlineShoppingCart className='ml-2'/></PrimaryButton></Link>
                    </div>
                </section>
        )
        }
    </>
  )
}

