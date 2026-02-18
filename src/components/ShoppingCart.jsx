import Button from './Button';

function ShoppingCart({ cart, addToCart, removeFromCart, fullWidth = false }) {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    if (totalItems === 0) return null;

    return (
        <div
            style={{
                width: fullWidth ? '100%' : '300px',
                padding: '15px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
            }}
        >
            <h3>Shopping Cart</h3>
            <p>{totalItems} items</p>

            <ul style={{ padding: 0, listStyle: 'none' }}>
                {cart.map(item => (
                    <li
                        key={item.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px 0',
                            borderBottom: '1px solid #ddd',
                        }}
                    >
                        <div>
                            <strong>{item.title}</strong> × {item.quantity}
                            <div>${item.price * item.quantity}</div>
                        </div>

                        <div style={{ display: 'flex', gap: '5px' }}>
                            <Button
                                onClick={() => addToCart(item)}
                                variant="primary"
                            >
                                +
                            </Button>

                            <Button
                                onClick={() => removeFromCart(item.id)}
                                variant="danger"
                            >
                                −
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>

            <div
                style={{
                    marginTop: '15px',
                    paddingTop: '10px',
                    borderTop: '2px solid #ddd',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <strong>Total:</strong>
                <strong>${totalPrice}</strong>
            </div>
        </div>
    );
}

export default ShoppingCart;