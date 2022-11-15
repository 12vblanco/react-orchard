import React, { useEffect, useState } from "react";

const url = `http://localhost:8888/netlify/functions/instagram`;

function useInstagram() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return posts;
}

const Instagram = () => {
  const gramz = useInstagram();
  return (
    <div>
      {gramz.map((gram) => (
        <a href={gram.url} key={gram.id}>
          <img src={gram.thumbnail} alt={gram.caption} />
        </a>
      ))}
    </div>
  );
};

export default Instagram;
