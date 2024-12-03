
import React, { useState } from "react";
import { Modal } from "antd";
import { addProduct } from "../JS/Actions/ProductActions";
import { useDispatch } from "react-redux";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    method: "organic",
    region: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(addProduct(newProduct));
    handleCancel();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={showModal}
        className=" text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center"
        type="button"
      >
       Ajouter un Produit
      </button>

      <Modal
        title={
          <span className="text-green-700 font-semibold text-lg">
            Add a New Product
          </span>
        }
        open={isModalOpen}
        onOk={handleAdd}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
          className="p-4 md:p-5 bg-green-50 rounded-lg shadow-md"
        >
          <div className="grid gap-4 mb-4 grid-cols-2">
            {/* Name */}
            <div className="col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-green-900"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-white border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Enter product name"
                required=""
                onChange={handleChange}
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-green-900"
              >
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-green-900 bg-white rounded-lg border border-green-300 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter product description"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Price */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-green-900"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-white border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="$100"
                required=""
                onChange={handleChange}
              />
            </div>

            {/* Quantity */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-green-900"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="bg-white border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Enter quantity"
                required=""
                onChange={handleChange}
              />
            </div>

            {/* Method */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="method"
                className="block mb-2 text-sm font-medium text-green-900"
              >
                Method
              </label>
              <select
                id="method"
                name="method"
                className="bg-white border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                value={newProduct.method}
                onChange={handleChange}
              >
                <option value="organic">Organic</option>
                <option value="conventional">Conventional</option>
              </select>
            </div>

            {/* Region */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="region"
                className="block mb-2 text-sm font-medium text-green-900"
              >
                Region
              </label>
              <input
                type="text"
                name="region"
                id="region"
                className="bg-white border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Enter region"
                onChange={handleChange}
              />
            </div>

            {/* Image URL */}
            <div className="col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-green-900"
              >
                Image URL
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="bg-white border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Enter image URL"
                required=""
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add Product
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddProduct;
