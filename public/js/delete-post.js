const deleteButton = document.getElementById('delete-button');

deleteButton.addEventListener('click', async function (event) {
  event.preventDefault();

  const postId = document.location.pathname.split('/')[2];

  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  } catch (error) {
    console.error('Error occurred while deleting the post', error);
  }
});
