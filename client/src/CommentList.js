import React from "react";

const CommentList = ({ comments }) => {
  console.log("🚀 ~ CommentList ~ comments:", comments);
  const renderedComments = comments?.map((comment) => {
    return (
      <>
        {comment.status === "approved" ? (
          <li key={comment.id}>{comment.content}</li>
        ) : (
          <li>Comment rejected</li>
        )}
      </>
    );
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
