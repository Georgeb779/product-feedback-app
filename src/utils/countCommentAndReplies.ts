export const countCommentAndReplies = (comments) => {
  let count = 0;
  comments.forEach((comment) => {
    count++;
    if (comment.replies.length > 0) {
      count += comment.replies.length;
    }
  });
  return count;
};
