import React, { useEffect, useState } from "react";
import fetchNews from "../data/news"; // Import news data
import NewsPost from "../components/NewsPost"; // Import NewsPost component

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const fetchedData = await fetchNews();
        setNews(fetchedData);
      } catch (err) {
        setError("Kunde inte hämta nyheter. Vänligen försök igen senare.");
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []); // Empty dependency array to run this code only after the initial render

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Laddar...</span>
        </div>
        <p className="mt-2">Laddar nyheter...</p>
      </div>
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
      <h1 className="mb-4">Senaste Nyheterna</h1>
      <div className="row row-cols-1 g-4">
        {news.length > 0 ? (
          news.map((post) => (
            <div className="col" key={post.id}>
              <NewsPost post={post} />
            </div>
          ))
        ) : (
          <div className="alert alert-info text-center" role="alert">
            Inga nyheter hittades.
          </div>
        )}
      </div>
    </>
  );
}
