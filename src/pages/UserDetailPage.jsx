import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const UserDetailPage = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);

  // Find the user by ID
  const user = users?.find((user) => user.id === parseInt(id));

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">User not found</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-gray-400 text-7xl mb-4" />
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h2 className="text-xl font-semibold text-gray-700">Contact Details</h2>
          <p className="mt-2 text-gray-600">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-gray-600">
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h2 className="text-xl font-semibold text-gray-700">Address</h2>
          <p className="mt-2 text-gray-600">
            <strong>Street:</strong> {user.address.street}
          </p>
          <p className="text-gray-600">
            <strong>Suite:</strong> {user.address.suite}
          </p>
          <p className="text-gray-600">
            <strong>City:</strong> {user.address.city}
          </p>
          <p className="text-gray-600">
            <strong>Zipcode:</strong> {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
