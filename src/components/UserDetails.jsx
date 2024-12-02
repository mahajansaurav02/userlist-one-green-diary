import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserDetailPage = () => {
  const { userId } = useParams(); // Assuming you are using react-router for routing
  const users = useSelector((state) => state.users.data); // Access users data from Redux store

  // Find the user by ID
  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <p>User not found</p>; // Handle case where user does not exist
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <h2 className="mt-4">Address</h2>
      <p>
        <strong>Street:</strong> {user.address.street}<br />
        <strong>Suite:</strong> {user.address.suite}<br />
        <strong>City:</strong> {user.address.city}<br />
        <strong>Zipcode:</strong> {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserDetailPage;
