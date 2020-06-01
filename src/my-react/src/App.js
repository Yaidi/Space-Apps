import React from 'react';
import MessageList from './Components/MessageList'
import SendMessageForm from './Components/SendMessageForm'
import RoomList from './Components/RoomList'
import NewRoomForm from './Components/NewRoomForm'
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         HOLA COMPAÑEROS GEMINI, BIENVENIDOS A REACT
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

class App extends React.Component {
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

export default App
