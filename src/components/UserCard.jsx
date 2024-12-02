import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {/* Profile Icon */}
        <FaUserCircle className="text-gray-400 text-5xl mr-4" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
      <div className="text-gray-700 text-sm">
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>
      <div className="mt-4">
        <Link
          to={`/user/${user.id}`}
          className="inline-block bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
