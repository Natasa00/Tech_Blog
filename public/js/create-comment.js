document.getElementById('create-comment-form').onsubmit = async (event) => {
  event.preventDefault();

  const postId = document.location.pathname.split('/')[2];
  const commentText = document.getElementById('comment-text').value;

  await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({
      comment_text: commentText,
      post_id: postId,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.reload();
};
