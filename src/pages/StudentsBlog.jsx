import React, { useEffect, useState } from "react";
import fetchPosts from "../data/posts";
import BlogPost from "../components/BlogPost";
import HogwartsLoadingSpinner from "../components/HogwartsLoadingSpiner";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

export default function StudentsBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination logic based on URL
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  const [postsPerPage] = useState(3);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      setError(null);

      let fetchedData = [];
      let fetchError = null;

      try {
        fetchedData = await fetchPosts();
      } catch (error) {
        fetchError =
          "Kunde inte hämta blogginlägg. Vänligen försök igen senare.";
        console.error("Fetch posts error: ", error);
      } finally {
        const MIN_LOADING_TIME = 1000;
        const startTime = Date.now();

        const timer = setTimeout(() => {
          setPosts(fetchedData);
          setError(fetchError);
          setLoading(false);
        }, Math.max(0, MIN_LOADING_TIME - (Date.now() - startTime)));

        return () => clearTimeout(timer);
      }
    };

    getPosts();
  }, []);

  // Calculate posts for the current page
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages based on all fetched posts
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Render logic
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          py: 5,
        }}
      >
        <HogwartsLoadingSpinner />
        <p className="mt-3">Laddar blogginlägg...</p>
      </Box>
    );
  }
  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        {error}
      </div>
    );
  }

  return (
    <>
      <h1 className="mb-4">Studentblogg</h1>
      <div className="row row-cols-1 g-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div className="col" key={post.id}>
              <BlogPost post={post} />
            </div>
          ))
        ) : (
          <div className="alert alert-info text-center" role="alert">
            Inga blogginlägg hittades.
          </div>
        )}
      </div>

      {/* Material UI Pagination Controls */}
      {posts.length > postsPerPage && (
        <Pagination
          count={totalPages}
          page={page}
          sx={{ mt: 5, display: "flex", justifyContent: "center" }}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/studentblogg${item.page === 1 ? "" : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      )}
    </>
  );
}
