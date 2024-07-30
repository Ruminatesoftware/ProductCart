import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Scrollbars } from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./Productcart.css";

const Productcart = () => {
  const product_data = [
    {
      id: 1,
      image: "img1.jpg",
      title: "Action",
      type: "action",
      category: "action",
      price: "175.4",
      quantity: 1,
    },
    {
      id: 2,
      image: "img2.jpg",
      title: "Thriller",
      type: "thriller",
      category: "thriller",
      price: "155.4",
      quantity: 1,
    },
    {
      id: 3,
      image: "img3.jpg",
      title: "Crime",
      type: "crime",
      category: "crime",
      price: "125.4",
      quantity: 1,
    },
    {
      id: 4,
      image: "img4.jpg",
      title: "Mythology",
      type: "mythology",
      category: "mythology",
      price: "55.4",
      quantity: 1,
    },
    {
      id: 5,
      image: "img5.jpg",
      title: "Others",
      type: "others",
      category: "others",
      price: "55.4",
      quantity: 1,
    },
    {
      id: 6,
      image: "img1.jpg",
      title: "Action",
      type: "action",
      category: "action",
      price: "55.4",
      quantity: 1,
    },
    {
      id: 7,
      image: "img2.jpg",
      title: "Thriller",
      type: "thriller",
      category: "thriller",
      price: "175.4",
      quantity: 1,
    },
    {
      id: 8,
      image: "img3.jpg",
      title: "Crime",
      type: "crime",
      category: "crime",
      price: "155.4",
      quantity: 1,
    },
    {
      id: 9,
      image: "img4.jpg",
      title: "Mythology",
      type: "mythology",
      category: "mythology",
      price: "125.4",
      quantity: 1,
    },
    {
      id: 10,
      image: "img5.jpg",
      title: "Others",
      type: "others",
      category: "others",
      price: "55.4",
      quantity: 1,
    },
    {
      id: 11,
      image: "img1.jpg",
      title: "Action",
      type: "action",
      category: "action",
      price: "55.4",
      quantity: 1,
    },
    {
      id: 12,
      image: "img2.jpg",
      title: "Thriller",
      type: "thriller",
      category: "thriller",
      price: "55.4",
      quantity: 1,
    },
    {
      id: 13,
      image: "img3.jpg",
      title: "Crime",
      type: "crime",
      category: "crime",
      price: "175.4",
      quantity: 1,
    },
    {
      id: 14,
      image: "img4.jpg",
      title: "Mythology",
      type: "mythology",
      category: "mythology",
      price: "155.4",
      quantity: 1,
    },
    {
      id: 15,
      image: "img5.jpg",
      title: "Others",
      type: "others",
      category: "others",
      price: "125.4",
      quantity: 1,
    },
    {
      id: 16,
      image: "img1.jpg",
      title: "Action",
      type: "action",
      category: "action",
      price: "55.4",
      quantity: 1,
    },
    {
      id: 17,
      image: "img2.jpg",
      title: "Thriller",
      type: "thriller",
      category: "thriller",
      price: "55.4",
      quantity: 1,
    },
    {
      id: 18,
      image: "img3.jpg",
      title: "Crime",
      type: "crime",
      category: "crime",
      price: "55.4",
      quantity: 1,
    },
    {
      id: 19,
      image: "img4.jpg",
      title: "Mythology",
      type: "mythology",
      category: "mythology",
      price: "175.4",
      quantity: 1,
    },
    {
      id: 20,
      image: "img5.jpg",
      title: "Others",
      type: "others",
      category: "others",
      price: "155.4",
      quantity: 1,
    },
    {
      id: 21,
      image: "img1.jpg",
      title: "Action",
      type: "action",
      category: "action",
      price: "125.4",
      quantity: 1,
    },
    {
      id: 22,
      image: "img2.jpg",
      title: "Thriller",
      type: "thriller",
      category: "thriller",
      price: "55.4",
      quantity: 1,
    },
    {
      id: 23,
      image: "img3.jpg",
      title: "Crime",
      type: "crime",
      category: "crime",
      price: "51.4",
      quantity: 1,
    },
    {
      id: 24,
      image: "img4.jpg",
      title: "Mythology",
      type: "mythology",
      category: "mythology",
      price: "50.4",
      quantity: 1,
    },
    {
      id: 25,
      image: "img5.jpg",
      title: "Others",
      type: "others",
      category: "others",
      price: "65.4",
      quantity: 1,
    },
  ];
  const [cart, setCart] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setProducts(product_data);
    if (cart.length < 1) {
      setTotalPrice(0);
    }
  }, [cart]);

  const handleAddtocart = (product: any) => {
    const productIndex = cart.findIndex(
      ({ cartItems }) => cartItems.product.id === product.product.id
    );

    if (productIndex >= 0) {
      const qty = cart.find(
        (Items) => Items.cartItems.product.id === product.product.id
      );

      const updatedCart = Object.assign({}, cart[productIndex]);
      updatedCart.totalQuantity++;

      const newCart = [...cart];
      newCart[productIndex] = updatedCart;
      setCart(newCart);
      setTotalPrice(totalPrice + parseFloat(product.product.price));
    } else {
      setCart([...cart, { cartItems: product, totalQuantity: 1 }]);

      setTotalPrice(totalPrice + parseFloat(product.product.price));
    }
  };
  const handleDelete = (product: any) => {
    const productIndex = cart.findIndex(
      ({ cartItems }) => cartItems.product.id === product.id
    );
    const updatedCart = Object.assign({}, cart[productIndex]);
    updatedCart.totalQuantity--;
    const price = totalPrice - parseFloat(updatedCart.cartItems.product.price);

    setTotalPrice(price);

    if (updatedCart.totalQuantity < 1) {
      const removeItem = cart.filter(
        ({ cartItems }) => cartItems.product.id !== product.id
      );
      setCart(removeItem);
      return;
    }
    const newCart = [...cart];
    newCart[productIndex] = updatedCart;
    setCart(newCart);
  };

  return (
    <>
      <Navbar collapseOnSelect>
        <Navbar>
          <Navbar.Brand>
            <img src={"/images/ruminate.png"} className="logo-img" />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Navbar.Text>MY SHOP</Navbar.Text>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Player Name</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Navbar>

      <div className="container-fluid main">
        <div className="row">
          <div className="text-light col-3 rounded left d-flex flex-column align-items-center pt-5 pb-5">
            <div className="flex-column top-left">Cart</div>
            <div className="cart-itmes">
              <Scrollbars
                autoHeight
                autoHeightMax={570}
                renderThumbVertical={({ style, ...props }) => (
                  <div className="scroll-bg" {...props} />
                )}
              >
                <ul>
                  {cart.map((Items, index) => {
                    return (
                      <li key={index}>
                        <div className="cart-img">
                          <img
                            src={`/images/${Items.cartItems.product.image}`}
                          />
                        </div>
                        <div className="cart-info">
                          <h5>{Items.cartItems.product.title}</h5>
                          <span className="cart-price">
                            {Items.cartItems.product.price}
                          </span>
                        </div>
                        <span className="removeicon">
                          {" "}
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            style={{ color: "#34f794", fontSize: 30 }}
                            onClick={() =>
                              handleDelete(Items.cartItems.product)
                            }
                          />{" "}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Scrollbars>
            </div>

            <div className="title mt-4">
              <span className="total-title">Total : </span>
              <span className="total_price"> ${totalPrice.toFixed(4)}</span>
              <div>
                <button className="buy">BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="productGrid">
              <Scrollbars
                style={{ height: 730 }}
                renderThumbVertical={({ style, ...props }) => (
                  <div className="scroll-bg" {...props} />
                )}
              >
                <div className="products-display">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="product"
                      onClick={() => handleAddtocart({ product })}
                    >
                      <div className="product-img">
                        <img src={`/images/${product.image}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Productcart;
