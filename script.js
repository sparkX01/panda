let cart = [];

function toggleCart() {
    alert(`Your cart has ${cart.length} items.`);
}
// Open Cart Modal
function openCart() {
    document.getElementById('cartModal').style.display = 'block';
    updateCartDisplay();
}

// Close Cart Modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Add to Cart Function




   
// Checkout
    }
}


// function addToCart(itemName, itemPrice) {
//     cart.push({ name: itemName, price: itemPrice });
//     document.getElementById("cart-count").innerText = cart.length;
//     alert(`${itemName} has been added to your cart!`);
// }

function scrollToMenu() {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
        menuElement.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error("Menu element not found!");
    }
}

}