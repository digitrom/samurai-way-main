import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControl/Textarea";

const MyPosts = (props: MyPostPropsType) => {

    let postElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let onAddPost = (formData:FormDataType ) => {
        debugger
        props.addPost(formData.newPostText)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <MyPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

type FormDataType = {
    newPostText: string
}

const maxLength30 =  maxLengthCreator(30)

const MyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field
                        component={Textarea}
                        name={'newPostText'}
                        placeholder={'Type new message'}
                        validate={[ required, maxLength30]}
                    />
                </div>
                <div>
                    <button>New Post</button>
                </div>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm<FormDataType>({
    form: 'MyPostAddMessageForm'
})(MyPostForm)

export default MyPosts;