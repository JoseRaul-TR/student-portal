import React from "react";

function NewsPost({ post }) {
  // Format the date here for display, as 'post.date' is now a Date object
  const formattedDate =
    post.date instanceof Date
      ? post.date.toLocaleDateString("sv-SE")
      : post.date; // Fallback if for some reason it is not a Date object

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {formattedDate} av {post.author}
        </h6>
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  );
}

export default NewsPost;
