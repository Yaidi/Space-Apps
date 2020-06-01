import React from 'react';
import MessageList from '../Components/MessageList'
import SendMessageForm from '../Components/SendMessageForm'
import RoomList from '../Components/RoomList'
import NewRoomForm from '../Components/NewRoomForm'

class Chat extends React.Component {
    render() {
        return (
            <div className="app">
                <RoomList />
                <MessageList />
                <SendMessageForm />
                <NewRoomForm />
            </div>
        );
    }
  }
  
  export default Chat