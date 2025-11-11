async function getDog() {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json();
        document.getElementById('dogImage').src = data.message;
      } catch (err) {
        console.error('Error fetching dog image:', err);
      }
    }

    getDog();