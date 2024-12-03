import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getMyProducts } from "../JS/Actions/ProductActions";
import AddProduct from "./AddProduct";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ZoomInOutlined } from "@ant-design/icons";
import Panier from "./Panier";
import { addToCart } from "../JS/Actions/CartActions";

export default function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.AuthReducer.user);
  const products = useSelector((state) => state.ProductReducer.products);
  const load = useSelector((state) => state.ProductReducer.load);
  const myProducts = useSelector((state) => state.ProductReducer.myProducts);


  let isAdmin = user && user.isAdmin;

  // Get my products and all products
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getMyProducts());
  }, [dispatch]);

  return (
    <div className="bg-green-50">
      {" "}
      {/* Light green background to reflect nature */}
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-green-900 text-center">
          {/* Dark green header for the theme */}
          Nos Derniers Produits
        </h2>

        <div className="flex mt-2 justify-center items-center gap-4">
          {user && user.isAdmin ?
          (<AddProduct />)

            : (<Panier />)
            }
        </div>

        {load && <Spinner />}
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {user && !isAdmin
            ? products.map((product) => (
                <div
                  onClick={() => navigate(`/productDetails/${product._id}`)}
                  key={product._id}
                  className="group relative border border-green-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-green-100 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.image}
                      src={product.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="p-4 bg-white rounded-b-md">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-green-700">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.method}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.region}
                        </p>
                      </div>
                      <div className="text-right">
                        <h3 className="text-lg font-semibold text-green-800">
                          {product.price} TND
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.quantity} disponibles
                        </p>
                      </div>
                    </div>
                    <Button
                      className="mt-4 w-full bg-green-600 text-white hover:bg-green-700 focus:ring focus:ring-green-300"
                      onClick={() => navigate(`/productDetails/${product._id}`)}
                      icon={<ZoomInOutlined />}
                    >
                      Voir les détails
                    </Button>
                    <Button
                      className="mt-4 w-full bg-green-600 text-white hover:bg-green-700 focus:ring focus:ring-green-300"
                      onClick={() => dispatch(addToCart(product._id))} // Add to cart action
                      icon={<ZoomInOutlined />}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              ))
            : products.map((product) => (
                <div
                  onClick={() => navigate(`/productDetails/${product._id}`)}
                  key={product._id}
                  className="group relative border border-green-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-green-100 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.image}
                      src={product.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="p-4 bg-white rounded-b-md">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-green-700">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.method}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.region}
                        </p>
                      </div>
                      <div className="text-right">
                        <h3 className="text-lg font-semibold text-green-800">
                          {product.price} TND
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.quantity} disponibles
                        </p>
                      </div>
                    </div>
                    <Button
                      className="mt-4 w-full bg-green-600 text-white hover:bg-green-700 focus:ring focus:ring-green-300"
                      onClick={() => navigate(`/productDetails/${product._id}`)}
                      icon={<ZoomInOutlined />}
                    >
                      Voir les détails
                    </Button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );

}
