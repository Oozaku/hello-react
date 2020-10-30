import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
  const [ dataComment, loadComment] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
      .then( (resulComments) => {
        const dComment = resulComments.data;
        loadComment(dComment);
      });
  }, []);

  return (
    <div>
      {dataComment && dataComment.map( (comment) => {
        const { id, name, email, body } = comment;
        return (
          <div key={id}>
            <br/>
            <h4><b>{name}</b></h4>
            <h5><b>{email}</b></h5>
            <p>{body}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;