const fetchNews = async () => {
  try {
    // Fetch both posts and users in parallel
    const [postsResponse, usersResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ]);

    if (!postsResponse.ok) {
      throw new Error(`HTTP error! Status: ${postsResponse.status} for posts.`);
    }
    if (!usersResponse.ok) {
      throw new Error(`HTTP error! Status: ${usersResponse.status} for users.`);
    }

    const postsData = await postsResponse.json();
    const usersData = await usersResponse.json();

    // Create a quick lookup table for users (userId to userName)
    const usersMap = new Map();
    usersData.forEach(user => {
        usersMap.set(user.id, user.name);
    });

    const formattedNews = postsData.map((post) => {
      // Generate a random date within the last year
      const now = new Date();
      const oneYearAgo = new Date();
      oneYearAgo.setDate(now.getDate() - 365);

      // Create a random date between 'oneYearAgo' and now
      const randomTimestamp =
        oneYearAgo.getTime() +
        Math.random() * (now.getTime() - oneYearAgo.getTime());
      const randomDate = new Date(randomTimestamp);

      // Get author name based on post.userId
      const authorName = usersMap.get(post.userId) || 'Okänd författare'; // Fallback if user is not found

      return {
        id: post.id.toString(),
        title: post.title,
        content: post.body,
        date: randomDate,
        author: authorName
      };
    });

    // Sort the news by date, from the newest to the oldest
    formattedNews.sort((a, b) => b.date.getTime() - a.date.getTime());

    return formattedNews;
  } catch (error) {
    console.error("Couldn't fetch news or user: ", error);
    throw error;
  }
};

export default fetchNews;
