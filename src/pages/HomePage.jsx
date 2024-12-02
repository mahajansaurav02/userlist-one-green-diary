import React, { useState } from 'react';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-4">
      <UserList searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
