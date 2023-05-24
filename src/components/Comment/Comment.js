import React, { useState } from "react";

function Comment({ imageId, comments, setComments }) {
  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    if (commentText.trim() === "") {
      return;
    }
    const newComment = {
      id: Date.now(),
      text: commentText,
    };
    setComments((prevComments) => ({
      ...prevComments,
      [imageId]: [...(prevComments[imageId] || []), newComment],
    }));
    setCommentText("");
  };

  const imageComments = comments[imageId] || [];

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      {imageComments.length === 0 && <p>No comments yet.</p>}
      {imageComments.map((comment) => (
        <div key={comment.id} className="comment">
          {comment.text}
        </div>
      ))}
      <form onSubmit={handleSubmitComment}>
        <textarea
          rows="3"
          placeholder="Leave a comment"
          value={commentText}
          onChange={handleCommentChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Comment;
