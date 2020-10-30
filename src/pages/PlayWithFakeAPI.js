import React, { useState } from 'react';
import TopPanel from '../components/TopPanel';
import Comments from '../components/Comments';
import  Header from '../components/Header';


const PlayWithFakeAPI = () => {
  const [ showComments, setShowComments] = useState(false);

  return (
    <div>
      <TopPanel />
      <Header title='Comments' />
      <br />
      {showComments? (
        <React.Fragment>
          <button onClick={ () => setShowComments(false) } >Hide Comments</button>
          <Comments/>
        </React.Fragment>
        ):(
        <button onClick={ () => setShowComments(true) } >Show Comments</button>
      )}
    </div>
  );
} 

export default PlayWithFakeAPI;