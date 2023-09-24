import React from 'react';

export default function ChatInput() {
  return (
    <input 
      className="w-full p-2 rounded bg-white text-black placeholder-gray-400 focus:ring focus:ring-opacity-50"
      placeholder="Type your message..."
    />
  );
}
