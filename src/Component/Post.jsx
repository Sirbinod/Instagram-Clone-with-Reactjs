import React from "react";
import Button from "@material-ui/core/Avatar"
import Avatar from "@material-ui/core/Avatar";

const Post = () =>{
    return(
        <>
            <div className="post">
                <div className="post_header">
                <Avatar className="post_avatar" 
                alt="username"
                src="https://images.unsplash.com/photo-1575178861459-1e62cdf7662a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                />
                <h3>UserName</h3>
                </div>
                <img className="post_image"
                src="https://images.unsplash.com/photo-1575178861459-1e62cdf7662a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                alt=""/>
                <h4 className="post_text"><strong>username</strong>   caption</h4>
            </div>

        </>
    );
};
export default Post;