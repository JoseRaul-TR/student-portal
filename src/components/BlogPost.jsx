import React from "react";

function BlogPost({ post }) {
  // Format the date here for display, as 'post.date' is now a Date object
  const formattedDate =
    post.date instanceof Date
      ? post.date.toLocaleDateString("sv-SE")
      : post.date; // Fallback if for some reason it is not a Date object

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="card-header d-flex align-items-center mb-3">
          {post.authorImg && (
            <div className="author-image-container me-2">
              <img
                src={post.authorImg}
                alt={post.author}
                className="rounded-circle"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            </div>
          )}
          <div className="">
            <h5 className="card-title mb-2">{post.title}</h5>
            <h6 className="card-subtitle mb-1 text-muted">
              {formattedDate} av {post.author}
            </h6>
          </div>
        </div>
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
