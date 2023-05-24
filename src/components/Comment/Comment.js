import React, { useState, useEffect } from "react";

function Comment({ imageId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

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
    setComments((prevComments) => [...prevComments, newComment]);
    setCommentText("");
  };

  const handleEditComment = (commentId) => {
    const commentText = comments.find((comment) => comment.id === commentId)?.text || "";
    setEditingCommentId(commentId);
    setCommentText(commentText);
  };

  const handleUpdateComment = (event) => {
    event.preventDefault();
    if (commentText.trim() === "") {
      return;
    }
    setComments((prevComments) => {
      const updatedComments = prevComments.map((comment) => {
        if (comment.id === editingCommentId) {
          return {
            ...comment,
            text: commentText,
          };
        }
        return comment;
      });
      return updatedComments;
    });
    setEditingCommentId(null);
    setCommentText("");
  };

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };

  const handleToggleButtons = (commentId) => {
    setSelectedCommentId((prevSelectedCommentId) =>
      prevSelectedCommentId === commentId ? null : commentId
    );
    setEditingCommentId(null);
    setCommentText("");
  };

  const imageComments = comments || [];

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      {imageComments.length === 0 && <p>No comments yet.</p>}
      {imageComments.map((comment) => (
        <div key={comment.id} className="comment">
          <div onClick={() => handleToggleButtons(comment.id)}>{comment.text}</div>
          {selectedCommentId === comment.id && (
            <>
              {editingCommentId === comment.id ? (
                <form onSubmit={handleUpdateComment}>
                  <textarea rows="3" value={commentText} onChange={handleCommentChange}></textarea>
                  <button type="submit">Save</button>
                </form>
              ) : (
                <div>
                  <button onClick={() => handleEditComment(comment.id)}>Edit</button>
                  <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                </div>
              )}
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
