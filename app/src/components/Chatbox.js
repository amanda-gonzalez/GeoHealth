import React, { useState } from 'react';
import './chatbox.css'; 

function ChatBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleChatBox = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = async () => {
        const response = await fetch('http://localhost:4000/api/chat/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: [{role: 'user', content: message}] }),
        });

        if (response.ok) {
            const data = await response.json();
            setMessages([...messages, { role: 'user', content: message }, { role: 'assistant', content: data.choices[0].message.content }]);
            setMessage('');
        } else {
            console.error('Failed to send message');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="chat-box-container">
            {!isOpen && (
                <button className="icon-button" onClick={toggleChatBox}>
                    <img src="health-icon.png" alt="Health Icon" />
                </button>
            )}

            {isOpen && (
                <div className="chat-box">
                    <div className="chat-header">
                        <h3>Health Assistant</h3>
                        <button onClick={toggleChatBox}>Close</button>
                    </div>
                    <div className="messages-container">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.role}`}>
                                {msg.content}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={message}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask your health question..."
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatBox;
