import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from 'react'

let state = {
  postData : [
      {id: 1, message: 'Hi, how are you?' , likesCount: 11},
      {id: 1, message: "It's my first post", likesCount: 12},
    ]
};

it('length of posts should be incremeneted', () => {
  let action = addPostActionCreator("it-kamasutra");
 
  let newState = profileReducer(state, action)

  expect (newState.postData[2].message).toBe("it-kamasutra");
});

it('message of new  of posts should be it-kamasutra', () => {
  let action = addPostActionCreator("it-kamasutra");
  let newState = profileReducer(state, action)


  expect (newState.postData[2].message).toBe("it-kamasutra");
});

it('after deleting length of message must be decremented', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action)


  expect (newState.postData.length).toBe(3);
});


