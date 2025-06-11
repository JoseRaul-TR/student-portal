// Import students profile-img
import harryPotterImg from "../assets/students_img/harry_potter.webp";
import hermioneGrangerImg from "../assets/students_img/hermione_granger.webp";
import ronWeasleyImg from "../assets/students_img/ron_weasley.webp";
import dracoMalfoyImg from "../assets/students_img/draco_malfoy.webp";
import nevilleLongbottomImg from "../assets/students_img/neville_longbottom.webp";
import ginnyWeasleyImg from "../assets/students_img/ginny_weasley.webp";
import lunaLovegoodImg from "../assets/students_img/luna_lovegood.webp";
import fredWeasleyImg from "../assets/students_img/fred_weasley.webp";
import georgeWeasleyImg from "../assets/students_img/george_weasley.webp";
import tomMarvoloRiddleImg from "../assets/students_img/tom_marvolo-riddle.jpg";
import placeholderImg from "../assets/placeholder.webp";

// Students array with id, name and img_route
const students = [
  {
    id: 1,
    name: "Harry Potter",
    img_route: harryPotterImg,
  },
  {
    id: 2,
    name: "Hermione Granger",
    img_route: hermioneGrangerImg,
  },
  {
    id: 3,
    name: "Ron Weasley",
    img_route: ronWeasleyImg,
  },
  {
    id: 4,
    name: "Draco Malfoy",
    img_route: dracoMalfoyImg,
  },
  {
    id: 5,
    name: "Neville Longbottom",
    img_route: nevilleLongbottomImg,
  },
  {
    id: 6,
    name: "Ginny Weasley",
    img_route: ginnyWeasleyImg,
  },
  {
    id: 7,
    name: "Luna Lovegood",
    img_route: lunaLovegoodImg,
  },
  {
    id: 8,
    name: "Fred Weasley",
    img_route: fredWeasleyImg,
  },
  {
    id: 9,
    name: "George Weasley",
    img_route: georgeWeasleyImg,
  },
  {
    id: 10,
    name: "Tom Marvolo Riddle",
    img_route: tomMarvoloRiddleImg,
  },
];

const fetchPosts = async () => {
  try {
    // Fetch posts from jsonplaceholder
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    // Check if the HTTP response for posts was successful.
    if (!postsResponse.ok) {
      throw new Error(`HTTP error! Status: ${postsResponse.status} for posts.`);
    }

    // Parse the JSON response body into JavaScript objects.
    const postsData = await postsResponse.json();

    // Create a Map for efficient lookup of student information.
    // This map stores student details (name and image route)
    // with their 'id' as the key.
    const studentsMap = new Map();
    students.forEach((student) => {
      studentsMap.set(student.id, {
        name: student.name,
        img: student.img_route,
      });
    });

    // Map through the fetched posts to format them and add author details.
    const formattedPosts = postsData.map((post) => {
      // Get the current date
      const now = new Date();
      // Calculate the date one year ago.
      const oneYearAgo = new Date();
      oneYearAgo.setDate(now.getDate() - 365);

      // Create a random date between one year ago and now
      const randomTimestamp =
        oneYearAgo.getTime() +
        Math.random() * (now.getTime() - oneYearAgo.getTime());
      // Convert the random timestamp back into a Date object.
      const randomDate = new Date(randomTimestamp);

      // Retrieve author information from the studentsMap using post.userId.
      // JSONPlaceholder's userId often aligns with our student IDs (1-10).
      // If a userId doesn't match, a fallback "Okänd författare" (Unknown author)
      // with a placeholder image is used.
      const authorInfo = studentsMap.get(post.userId) || {
        name: "Okänd författare",
        img: placeholderImg,
      };

      // Return a new object for each post with formatted data,
      // including author name and author image.
      return {
        id: post.id.toString(),
        title: post.title,
        content: post.body,
        date: randomDate,
        author: authorInfo.name,
        authorImg: authorInfo.img, 
      };
    });

    // Sort the posts by date in descending order (newest to oldest).
    formattedPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
    // Return the array of fully formatted and sorted blog posts.
    return formattedPosts;
  } catch (error) {
    // Log any errors that occur during the fetch or processing
    console.error("Couldn't fetch posts or user: ", error);
    throw error;
  }
};

export default fetchPosts;
