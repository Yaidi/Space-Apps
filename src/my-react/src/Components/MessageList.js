import React from 'react';

const DUMMY_DATA = [
    {
        senderId: 'Yaidi',
        text: 'hey, how is it going'
    },
    {
        senderId: 'Ana Pau',
        text: 'great! how about you?'
    },
    {
        senderId: 'yai',
        text: 'cool, im great as well'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList