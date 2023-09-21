import { useState } from 'react';

export default function Chat() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Your send message logic here
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516889782132-fb580815f8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgzMDl8MHwxfHNlYXJjaHw0fHxteXN0ZXJpb3VzJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE2OTQ8MzY3MDB8MA&ixlib=rb-4.0.3&q=80&w=400')" }}>
      <main className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 animate-float">Welcome to the Chat</h1>
        <div className="chat-area mb-8">
          {/* Your chat messages will go here */}
        </div>
        <div className="chat-input flex gap-4 color-black">
          <input 
            type="text" 
            name="message" 
            placeholder="Type your message here..." 
            required 
            className="flex-1 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button 
            type="button" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}


