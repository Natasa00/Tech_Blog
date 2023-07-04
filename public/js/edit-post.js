document.getElementById('edit-post-form').onsubmit = async (event) => {
  event.preventDefault();

  const postId = document.location.pathname.split('/')[2];

  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;

  await fetch(`/api/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};
