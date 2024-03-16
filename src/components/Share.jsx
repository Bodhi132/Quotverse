// Share.js

import React from "react";

const Share = ({data}) => {
  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: data.title,
          text: data.text,
          url: "http://localhost:5173/",
        });
        console.log("Shared successfully!");
      } else {
        console.log("Web Share API not supported in this browser.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div>
      <button onClick={handleShareClick}>Share 🔗</button>
    </div>
  );
};

export default Share;
