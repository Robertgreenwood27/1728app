import React from 'react';

export default function TeamMemberCard(props) {
  // Check for undefined before destructuring
  const { name, title, description, imageUrl } = props.teamMember || {};

  if (!props.teamMember) {
    return <div>Error: Team member data not available</div>;
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-8">
      <img className="w-24 h-24 rounded-full mx-auto mb-4" src={imageUrl} alt={name} />
      <h3 className="text-white text-2xl mb-2">{name}</h3>
      <p className="text-white text-lg mb-2">{title}</p>
      <p className="text-white text-base">{description}</p>
    </div>
  );
}
