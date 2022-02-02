import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
      profilePage : {
          postData : [
              {id: 1, message: 'Hi, how are you?' , likesCount: 11},
              {id: 1, message: "It's my first post", likesCount: 12},
            ],
          newPostText : 'csss'
      },
      dialogsPage:{

          dialogsData : [
              {id: 1, name: 'Dimych'},
              {id: 2, name: 'Andrey'},
              {id: 3, name: 'Sveta'},
              {id: 4, name: 'Sasha'},
              {id: 5, name: 'Viktor'},
              {id: 6, name: 'Valera'}
            ],  
          messagesData : [
              {id: 1, message: 'Hi'},
              {id: 2, message: 'How are you'},
              {id: 3, message: 'As ussualy'},
              {id: 4, message: 'Yo'},
              {id: 5, message: 'What?'},
              {id: 6, message: 'wshuh-fshuh'}
            ],
            newMessageBody: ""
      },
      sidebar:{

      }

  

      },
      _callSubscriber(){
        console.log('State changed');
      },
      getState () {
        return this._state;
      },
      subscribe (observer) {
        this._callSubscriber = observer;
          },
      addPost  () {
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount:0
        };
          this._state.profilePage.postData.push(newPost);
          this._state.profilePage.newPostText = '';
          this._callSubscriber(this._state);
        },
        updateNewPostText (newText) {
          this._state.profilePage.newPostText = newText;
          this._callSubscriber(this._state);
      },
        dispatch(action) {
          this._state.profilePage = profileReducer(this._state.profilePage, action);
          this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
          this._state.sidebar = sidebarReducer(this._state.sidebar, action);
          this._callSubscriber(this._state);
  }
}





  export default store;
  window.store = store;