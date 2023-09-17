import React from 'react';
import Link from 'next/link';

const Home = () => (
  <div className="bg-gray-900 text-white min-h-screen">
    <main className="container mx-auto py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Specialized Generative AI Solutions</h1>
      <p className="text-lg mb-8">Transforming Your Ideas into Reality</p>
      <Link href="/contact" legacyBehavior><a className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Get Started</a></Link>
    </main>

    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} 1728 Studios. All rights reserved.</p>
    </footer>
  </div>
);

export default Home;