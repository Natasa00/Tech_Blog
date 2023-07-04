document.getElementById('create-post-form').onsubmit = async (event) => {
  event.preventDefault();

  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;

  await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};
