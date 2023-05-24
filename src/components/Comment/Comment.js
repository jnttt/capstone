import React, { useState } from "react";

function Comment({ imageId, comments, setComments }) {
  const [commentText, setCommentText] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);

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

  const handleEditComment = (commentId) => {
    const commentText = comments[imageId].find((comment) => comment.id === commentId)?.text || "";
    setEditingCommentId(commentId);
    setCommentText(commentText);
  };

  const handleUpdateComment = (event) => {
    event.preventDefault();
    if (commentText.trim() === "") {
      return;
    }
    setComments((prevComments) => {
      const updatedComments = prevComments[imageId].map((comment) => {
        if (comment.id === editingCommentId) {
          return {
            ...comment,
            text: commentText,
          };
        }
        return comment;
      });
      return {
        ...prevComments,
        [imageId]: updatedComments,
      };
    });
    setEditingCommentId(null);
    setCommentText("");
  };

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) => {
      const updatedComments = prevComments[imageId].filter((comment) => comment.id !== commentId);
      return {
        ...prevComments,
        [imageId]: updatedComments,
      };
    });
  };

  const imageComments = comments[imageId] || [];

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      {imageComments.length === 0 && <p>No comments yet.</p>}
      {imageComments.map((comment) => (
        <div key={comment.id} className="comment">
          {editingCommentId === comment.id ? (
            <form onSubmit={handleUpdateComment}>
              <textarea
                rows="3"
                value={commentText}
                onChange={handleCommentChange}
              ></textarea>
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <div>{comment.text}</div>
              <div>
                <button onClick={() => handleEditComment(comment.id)}>Edit</button>
                <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
              </div>
            </>
          )}
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
