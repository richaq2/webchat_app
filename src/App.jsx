import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { ChannelListContainer, ChannelContainer } from './components';
import './App.css';

const apikey = 'nk2wwtn9ux4g';
const client = StreamChat.getInstance(apikey);

const App = () => {

    return (
        <div className="app_wrapper">
        <Chat client={client} theme="team light">
            <ChannelListContainer 

            />
            <ChannelContainer
            
             />

          
        </Chat>
          
        </div>
    );
}

export default App;
