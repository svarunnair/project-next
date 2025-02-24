"use client"

import React, { useState, useEffect } from 'react';

interface User {
  name: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:9090/user');
        
        // Check if the response is successful
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
        }

        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          // Handle fetch-specific error or general error
          if (err.message.includes('fetch failed')) {
            setError('Failed to connect to the server. Please try again later.');
          } else {
            setError(err.message);
          }
        } else {
          setError('An unknown error occurred.');
        }
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>UsersPage</h1>

      {error ? (
        // Display error message
        <div style={{ color: 'red' }}>Error: {error}</div>
      ) : (
        // Render users if no error
        <div style={{ display: 'flex', gap: 10 }}>
          {users?.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
