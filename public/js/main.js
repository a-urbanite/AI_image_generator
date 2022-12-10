window.document.getElementById('button').addEventListener('click', async () => {  
  const prompt = window.document.getElementById('promptInput').value
  const imageSize = window.document.getElementById('sizeInput').value
  // console.log(prompt, imageSize)

  const response = await fetch('/api/openai/generateImage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      imageSize,
    }),
  });

  const data = await response.json()

  window.document.getElementById('image').setAttribute('src', data.data)

  console.log(data)
})