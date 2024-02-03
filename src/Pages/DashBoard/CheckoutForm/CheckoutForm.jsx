import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";



const CheckoutForm = () => {
    const { user } = useAuth()
    const [error, setError] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [transjectionId, setTransjectionId] = useState('')
    const navigate = useNavigate()
    const item = useLoaderData()
    console.log(item)
    const price = item.offerAmount;
    const title = item.propertyTitle
    const agentemail = item.agentEmail;
    const location = item.propertyLocation
    const paymentId = item._id
 
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/api/v1/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
            setError('')
        }

        // Confirm Payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log(paymentIntent, 'payment intend')
            if (paymentIntent.status === 'succeeded') {
                setTransjectionId(paymentIntent.id)

                // Now save the payment in the database
                const payment = {
                    paymentId,
                    buyerEmail: user.email,
                    buyerName: user.displayName,
                    offerAmount:price,
                    propertyTitle:title,
                    transjectionId: paymentIntent.id,
                    propertyLocation:location,
                    agentEmail:agentemail
                }
                console.log(payment)
                const res = await axiosSecure.post('/api/v1/payments', payment)
                console.log(res.data)
                if (res.data?.result?.insertedId) {
                    navigate('/dashboard/propertyBought')
                    Swal.fire({                       
                        icon: "success",
                        title: "Your Payment is succesfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                }
            }
        }
    }

    return (
        <div className="h-[700px] mt-10">
            <HelmetTitle title={"Markon Estate || Payment Form"}></HelmetTitle>
            <form className="max-w-6xl mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#000000',
                                '::placeholder': {
                                    color: '#000000',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                {transjectionId ? <p className="text-red-600 flex items-center gap-2 mt-5"> <FaCheck /> Your Transjection Id Is  {transjectionId}</p> : <button className="btn btn-accent mt-5" type="submit" disabled={!stripe || !clientSecret} >
                    Pay
                </button>}
                <p className=" font-medium mt-3 text-red-700">{error && <span className="flex items-center gap-2"><IoWarningOutline />{error}</span>}</p>

            </form>
        </div>
    );
};

export default CheckoutForm;