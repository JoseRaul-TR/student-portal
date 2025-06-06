import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import fetchPosts from "../data/posts";
import BlogPost from "../components/BlogPost";
import HogwartsLoadingSpinner from "../components/HogwartsLoadingSpinner";
import SearchFilter from "../components/SearchFilter";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

export default function StudentsBlog() {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  const [postsPerPage] = useState(3);

  const prevSearchItemRef = useRef("");

  useEffect(() => {
    let timeoutId;

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

        timeoutId = setTimeout(() => {
          setAllPosts(fetchedData);
          setError(fetchError);
          setLoading(false);
        }, Math.max(0, MIN_LOADING_TIME - (Date.now() - startTime)));
      }
    };

    getPosts();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const filteredPosts = allPosts.filter((item) => {
    if (!searchItem.trim()) {
      return true;
    }
    const lowerCaseSearchItem = searchItem.toLowerCase();
    return ["title", "content", "author"].some((key) => {
      const value = item[key];
      if (value && typeof value === "string") {
        return value.toLowerCase().includes(lowerCaseSearchItem);
      }
      return false;
    });
  });

  useEffect(() => {
    if (searchItem !== prevSearchItemRef.current && page !== 1) {
      const currentPath = location.pathname;
      navigate(currentPath);
    }
    prevSearchItemRef.current = searchItem;
  }, [searchItem, page, location.pathname, navigate]);

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
        <Typography variant="body1" sx={{ mt: 3, color: "text.secondary" }}>
          Laddar blogginlägg...
        </Typography>
      </Box>
    );
  }
  if (error) {
    return (
      <Alert
        severity="error"
        sx={{ m: 3, textAlign: "center", borderRadius: "8px" }}
      >
        {error}
      </Alert>
    );
  }

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ mb: 4, color: "primary.main", textAlign: "center" }}
      >
        Studentblogg
      </Typography>

      <SearchFilter
        placeholderText="Sök efter titel, innehåll eller författare..."
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      >
        <>
          <div className="row row-cols-1 g-4">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <div className="col" key={post.id}>
                  <BlogPost post={post} />
                </div>
              ))
            ) : (
              // If no blog posts match the search
              <div
                className="alert alert-info text-center"
                role="alert"
                style={{
                  backgroundColor: "var(--hogwarts-parchment)",
                  color: "var(--hogwarts-text-dark)",
                  borderColor: "var(--hogwarts-gold)",
                  borderWidth: "2px",
                  borderRadius: "0.75rem",
                  padding: "2rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                  marginTop: "1rem",
                }}
              >
                Inga blogginlägg hittades som matchade din sökning.
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={page}
              sx={{ mt: 5, display: "flex", justifyContent: "center" }}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/studentblogg${
                    item.page === 1 ? "" : `?page=${item.page}`
                  }`}
                  {...item}
                />
              )}
            />
          )}
        </>
      </SearchFilter>
    </>
  );
}
