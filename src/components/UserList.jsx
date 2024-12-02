import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/userSlice";
import { Link } from "react-router-dom";

function UserList() {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Filter users based on the search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center text-lg text-blue-500">Loading users...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error loading users: {error}</p>;

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">User List</h1>
      <Link
        to="/add-user"
        className="inline-block bg-green-500 text-white px-4 py-2 rounded mb-6 hover:bg-green-600"
      >
        Add New User
      </Link>
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          className="p-3 border-2 border-purple-300 rounded-lg w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredUsers.length === 0 && (
        <p className="text-center text-lg text-gray-600 mt-6">
          No users found matching your search.
        </p>
      )}
    </div>
  );
}

export default UserList;
