import React from "react";

import { Typography, Box, Tooltip, Avatar } from "@mui/material";

import { formatTimeAgo, formatExactDateTime } from "../utils/dateUtils";


export default function BlogPost({ post }) {

  return (
   <div className="card shadow-sm mb-3">
      <div className="card-body">
        <Box
          className="card-header d-flex align-items-center mb-3"
          sx={{
            backgroundColor: "var(--hogwarts-parchment-light)",
            borderBottom: "1px solid var(--hogwarts-gold)",
            borderRadius: "0.5rem",
            padding: "1rem",
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {post.authorImg && (
            <div className="author-image-container me-2">
              <Avatar
                src={post.authorImg}
                alt={post.author}
                sx={{
                  width: 60,
                  height: 60,
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
            {/* Implement Tooltip for the date */}
            <Tooltip title={formatExactDateTime(post.date)} placement="top-start" arrow>
              <Typography
                variant="body2"
                component="h6"
                color="text.secondary"
                className="card-subtitle text-muted"
                sx={{
                  display: 'inline-block',
                  cursor: 'help',
                  '&:hover': {
                    textDecoration: 'underline',
                  }
                }}
              >
                {post.author}, {formatTimeAgo(post.date)} 
              </Typography>
            </Tooltip>
          </Box>
        </Box>
        <Typography variant="body1" className="card-text">
          {post.content}
        </Typography>
      </div>
    </div>
  );
}

