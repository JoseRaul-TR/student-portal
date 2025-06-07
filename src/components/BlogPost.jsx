import React from "react";

import { Typography, Box } from "@mui/material";

function BlogPost({ post }) {
  // Format the date here for display, as 'post.date' is now a Date object
  const formattedDate =
    post.date instanceof Date
      ? post.date.toLocaleDateString("sv-SE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : post.date; // Fallback if for some reason it is not a Date object

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div
          className="card-header d-flex align-items-center mb-3"
          style={{
            backgroundColor: "var(--hogwarts-parchment-light)",
            borderBottom: "1px solid var(--hogwarts-gold)",
            borderRadius: "0.5rem",
            padding: "1rem",
          }}
        >
          {post.authorImg && (
            <div className="author-image-container me-2">
              <img
                src={post.authorImg}
                alt={post.author}
                className="blog-author-img"
                style={{
                  border: "2px solid var(--hogwarts-darkGreen)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          )}
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="h5"
              className="card-title mb-2"
              sx={{ color: "primary.main" }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              component="h6"
              color="text.secondary"
              className="card-subtitle text-muted"
            >
              {formattedDate} av {post.author}
            </Typography>
          </Box>
        </div>
        <Typography variant="body1" className="card-text">
          {post.content}
        </Typography>
      </div>
    </div>
  );
}

export default BlogPost;
