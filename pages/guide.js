import ChatHeader from '@/components/ChatHeader';
import ChatInput from '@/components/ChatInput';
import Sidebar from '@/components/Sidebar';
import TeamMemberCard from '@/components/TeamMemberCard';
import React, { useState } from 'react';


export default function Chat() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Your send message logic here
  };

  // Dummy data for TeamMemberCard
  const teamMember = {
    name: "Dr. Jane Carter",
    title: "Lead AI Researcher",
    description: "Expert in AI algorithms.",
    imageUrl: "https://via.placeholder.com/150"
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen bg-cover bg-center">
      <main className="container mx-auto py-20 grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3">
          <ChatHeader />
          <div className="mb-8 flex justify-between items-center">
            <TeamMemberCard teamMember={teamMember} />
            {/* Here you can place other elements like chat settings or info */}
          </div>
          <div className="chat-area mb-8 h-64 overflow-y-auto">
            {/* Chat messages component could go here */}
          </div>
          <div className="chat-input flex gap-4">
            <ChatInput message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
          </div>
        </div>
      </main>
    </div>
  );
}
