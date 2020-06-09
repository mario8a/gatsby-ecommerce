import React, {useState, useEffect} from 'react';

export default ({sku}) => {
    console.log(sku);
    const [stripe, setstripe] = useState({});

    useEffect(() => {
        setstripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
    }, []);

    const redirectToCheckout = async(e) => {
        const response = await stripe.redirectToCheckout({
            lineItems: [{ price: `${sku.id}`, quantity: 1 }],
            mode: 'payment',
            successUrl: `http://localhost:8000/completado`,
            cancelUrl: `http://localhost:8000`
        });

        if(response.error) {
            console.log(response.error);
        }
    }
    
    return(
        <div>
            <button 
                onClick={redirectToCheckout} 
                className="app-btn text-xl"
                >Comprar
            </button>
        </div>
    )
}