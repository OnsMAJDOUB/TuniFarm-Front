import { Button, Modal } from "antd";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../JS/Actions/ProductActions"; // Make sure the deleteProduct action is properly defined in your ProductActions
import { useNavigate } from "react-router-dom";

const DeleteProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteProduct(product._id, navigate)); // Ensure the product._id is passed correctly to the deleteProduct action
    handleCancel();
  };

  return (
    <>
      <Button
        type="primary"
        danger
        icon={<DeleteOutlined />}
        onClick={showModal}
      >
        Delete
      </Button>
      <Modal
        title="Delete Product"
        okType="danger"
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this product?</p>
      </Modal>
    </>
  );
};

export default DeleteProduct;
