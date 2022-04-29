const rss = document.querySelector('.rss-box');

rss.addEventListener('submit', async (event) => {
  event.preventDefault();

  const text = await fetch('/', {
    method: 'POST',
    body: JSON.parse({
      
    })
  })
});
