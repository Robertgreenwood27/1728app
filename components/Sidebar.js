import React, { useState } from 'react';

function Sidebar() {
    const [expandedCategory, setExpandedCategory] = useState(null);

    const categories = [
        {
            title: "AI Experts",
            experts: [
                {
                    name: "Dr. Jane Carter",
                    description: "Expert in AI algorithms, neural network architectures, and bridging the gap between AI research and practical implementations."
                },
                {
                    name: "Dr. John Smith",
                    description: "Specializes in machine learning and data science."
                }
            ]
        },
        {
            title: "Blockchain Gurus",
            experts: [
                {
                    name: "Alice Johnson",
                    description: "Leading expert in smart contracts and cryptocurrency."
                },
                {
                    name: "Bob Williams",
                    description: "Decentralization advocate with a focus on DApps."
                }
            ]
        },
        {
            title: "Cybersecurity Pros",
            experts: [
                {
                    name: "Carol Brown",
                    description: "Expert in ethical hacking and network security."
                },
                {
                    name: "Dave Martin",
                    description: "Specializes in cryptography and secure communications."
                }
            ]
        }
    ];

    const handleCategoryClick = (index) => {
        if (expandedCategory === index) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(index);
        }
    };

    return (
        <div className="bg-gray-800 p-4 w-full min-h-screen text-white">
            <h2 className="text-2xl font-semibold mb-4">Experts</h2>
            {categories.map((category, index) => (
                <div key={index} className="mb-4">
                    <h3 
                      className="text-lg font-medium cursor-pointer hover:underline" 
                      onClick={() => handleCategoryClick(index)}
                    >
                        {category.title}
                    </h3>
                    {expandedCategory === index && category.experts.map((expert, expertIndex) => (
                        <div key={expertIndex} className="ml-4 mt-2 text-sm">
                            <h4 className="font-semibold">{expert.name}</h4>
                            <p>{expert.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
