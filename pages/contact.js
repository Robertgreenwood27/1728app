
const Contact = () => (
  <div className="bg-gray-900 text-white min-h-screen">
    <main className="container mx-auto py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-8">Have questions or inquiries? Reach out to us!</p>
      <a href="mailto:1728StudiosDev@1728studios.com" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Email Us</a>
    </main>

    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} 1728 Studios. All rights reserved.</p>
    </footer>
  </div>
);

export default Contact;
