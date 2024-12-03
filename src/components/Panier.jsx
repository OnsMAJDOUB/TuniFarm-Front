import React, { useState } from "react";
import {  Drawer } from "antd";
import { useSelector } from "react-redux";
const Panier = () => {
  const [open, setOpen] = useState(false);

  const cart = useSelector((state) => state.CartReducer.cart);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  console.log(cart)
  return (
    <>
      <button
        type="button"
        onClick={showDrawer}
        className=" text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center"
      >
        Voir le Panier
      </button>
      <Drawer title="Vos produits" onClose={onClose} open={open}>
        {cart && cart.map((product) => (
          
          <div key={product._id} className="flex justify-between items-center">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "50px", height: "50px" }}
            />
            <p>{product.name}</p>
            <p>{product.price} TND</p>
          </div>
        ))}
      </Drawer>
    </>
  );
};
export default Panier;
