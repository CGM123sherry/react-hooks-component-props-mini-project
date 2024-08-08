import React from "react";

function Article({ title, date, preview }) {
  const defaultDate = "January 1, 1970";

  const readTime = (minutes) => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      const boxes = Math.ceil(minutes / 10);
      return "🍱".repeat(boxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      {/* <small>{readTime(minutesToRead)}</small> */}
    </article>
  );
}

export default Article;
