// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="bg-blue-500 p-4 mb-4">
      <nav className='flex justify-center'>
        <ul className="flex space-x-6">
          <li>
            <Link to="/posts" className="text-white hover:text-gray-300">Posts</Link>
          </li>
          <li>
            <Link to="/users" className="text-white hover:text-gray-300">Users</Link>
          </li>
          <li>
            <Link to="/comments" className="text-white hover:text-gray-300">Comments</Link>
          </li>
          <li>
            <Link to="/albums" className="text-white hover:text-gray-300">Albums</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
