import React from "react";

import { Typography, Box } from "@mui/material";

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
                className="rounded-circle blog-author-img"
              />
            </div>
          )}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h5" className="card-title mb-2">{post.title}</Typography>
            <Typography variant="body2" component="h6" color="text.secondary" className="card-subtitle mb-1 text-muted">
              {formattedDate} av {post.author}
            </Typography>
          </Box>
        </div>
        <Typography variant="body1" className="card-text">{post.content}</Typography>
      </div>
    </div>
  );
}

export default BlogPost;
