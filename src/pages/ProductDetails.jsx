import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../JS/Actions/ProductActions";
import Spinner from "../components/Spinner";
import { Button, Tooltip } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import EditProduct from "../components/EditProduct";
import DeleteProduct from "../components/DeleteProduct";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) => state.ProductReducer.product);
  const load = useSelector((state) => state.ProductReducer.load);
  const user = useSelector((state) => state.AuthReducer.user);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <Tooltip title="Back">
            <Button
              onClick={() => navigate(-1)}
              type="primary"
              shape="circle"
              icon={<LeftOutlined />}
            />
          </Tooltip>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Product Details
          </h2>
          <p className="mt-4 text-gray-500">{product.description}</p>

          {user && user.isAdmin && (
            <div className="flex justify-left gap-8 mt-4">
              <EditProduct product={product} />
              <DeleteProduct product={product} />
            </div>
          )}

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {load ? (
              <Spinner />
            ) : (
              <>
                <div
                  key={product._id}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">Name</dt>
                  <dd className="mt-2 text-sm text-gray-500">{product.name}</dd>
                </div>
                <div
                  key={product._id}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">Category</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {product.method}
                  </dd>
                </div>
                <div
                  key={product._id}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">Price</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {product.price}$
                  </dd>
                </div>
                <div
                  key={product._id}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">Stock</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {product.quantity}
                  </dd>
                </div>
              </>
            )}
          </dl>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
          {load ? (
            <Spinner />
          ) : (
            <img
              alt="Product"
              src={product.image}
              className="rounded-lg bg-gray-100"
            />
          )}
        </div>
      </div>
    </div>
  );
}
