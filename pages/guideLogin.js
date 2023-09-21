import { useState } from 'react';

export default function GuideLogin() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const res = await fetch('/verify_user', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Network response was not ok');

      const data = await res.json();

      if (data.success) {
        window.location.href = 'chat.html';
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Fetch operation problem:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            The Guide
          </h1>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input 
                type="text" 
                name="username" 
                placeholder="Enter a username" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              />
            </div>
            <div>
              <input 
                type="password" 
                name="password" 
                placeholder="Enter a password" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              />
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
      </div>
    </div>
  );
}
