import React from 'react';
// import './ProductPage.css'; // Nous allons écrire les styles après

const Product = () => {
    const product = {
        id: 1,
        name: "Chaise ergonomique",
        description: "Une chaise de bureau ergonomique avec un design moderne et confortable.",
        price: 120.00,
        imageUrl: "https://example.com/chaise.jpg" // Tu peux remplacer par une URL valide
    };

    return (
        <div className="product-page">
            <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-details">
                <h1>{product.name}</h1>
                <p className="description">{product.description}</p>
                <h2 className="price">${product.price}</h2>
                <button className="add-to-cart">Ajouter au panier</button>
            </div>
        </div>
    );
};

export default Product;
