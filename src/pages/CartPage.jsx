import ShoppingCart from '../components/ShoppingCart';

function CartPage({ cart, addToCart, removeFromCart }) {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Your Shopping Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ShoppingCart
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    fullWidth={true}
                />
            )}
        </div>
    );
}

export default CartPage;
