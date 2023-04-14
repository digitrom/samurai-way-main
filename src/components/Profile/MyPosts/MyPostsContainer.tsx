import React from 'react';
import {addPostAC, onPostChangeAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


type PropsType = {
    // store: StoreType;
    // newPostText: string
}

export const MyPostsContainer = (props: PropsType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profilePage

                let addPost = () => {
                    store.dispatch(addPostAC(state.newPostText))
                }

                let onPostChange = (text: string) => {
                    store.dispatch(onPostChangeAC(text))
                }

                return <MyPosts posts={state.posts}
                                newPostText={state.newPostText}
                                addPost={addPost}
                                updateNewPostText={onPostChange}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;