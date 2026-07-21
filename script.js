function createPosterSvg(title, mood, accent) {
  const safeTitle = title
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  const safeMood = mood.toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1200" viewBox="0 0 800 1200">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1d1032" />
          <stop offset="100%" stop-color="#08020f" />
        </linearGradient>
      </defs>
      <rect width="800" height="1200" rx="44" fill="#0d0715" />
      <rect x="28" y="28" width="744" height="1144" rx="34" fill="url(#bg)" stroke="rgba(255,255,255,0.2)" stroke-width="4" />
      <circle cx="630" cy="290" r="220" fill="${accent}" opacity="0.20" />
      <circle cx="220" cy="950" r="260" fill="#ffffff" opacity="0.08" />
      <rect x="120" y="140" width="560" height="80" rx="20" fill="rgba(255,255,255,0.08)" />
      <text x="400" y="192" text-anchor="middle" fill="#f7d154" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="700" letter-spacing="6">NOW SHOWING</text>
      <text x="400" y="560" text-anchor="middle" fill="#f6f0ff" font-family="Segoe UI, Arial, sans-serif" font-size="62" font-weight="700">${safeTitle}</text>
      <text x="400" y="650" text-anchor="middle" fill="#d8cee7" font-family="Segoe UI, Arial, sans-serif" font-size="28" letter-spacing="8">${safeMood}</text>
      <rect x="205" y="740" width="390" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
      <rect x="205" y="770" width="310" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const movies = [
  {
    title: 'Paddington 2 (2017)',
    mood: 'happy',
    genre: 'Comedy / Adventure',
    synopsis: 'Paddington Bear is happily settled with the Brown family in London. To buy a rare pop-up book of London for Aunt Lucys 100th birthday, he does odd jobs to buy the book, but it is stolen. Paddington is falsely accused of theft and must find the real culprit to clear his name.',
    rating: '8.8',
    image: 'images/paddington2.jpg',
  },
  {
    title: 'My Neighbor Totoro (1988)',
    mood: 'chill',
    genre: 'Animation, Fantasy, Family',
    synopsis: 'It follows two sisters, Satsuki and Mei, who move to the Japanese countryside with their father to be near their hospitalized mother.',
    rating: '8.1',
    image: 'images/totoro.jpg',
  },
  {
    title: 'The Pursuit of Happyness (2006)',
    mood: 'inspired',
    genre: 'Drama',
    synopsis: 'it follows a struggling salesman who faces eviction, becomes a single father, and undertakes an unpaid stockbroker internship, ultimately achieving wealth and founding his own firm',
    rating: '8.0',
    image: 'images/the%20pursuit.jpg',
  },
  {
    title: 'Titanic (1997)',
    mood: 'romantic',
    genre: 'Romance / Drama',
    synopsis: 'frames the real-life 1912 maritime disaster through a fictional romance between 17 year  old upper class Rose DeWitt Bukater and 20 year old third class artist Jack Dawson',
    rating: '8.0',
    image: 'images/Titanic.jpg',
  },
  {
    title: '(500) Days of Summer (2009)',
    mood: 'romantic',
    genre: 'Romance / Comedy',
    synopsis: 'A nonlinear narrative follows the 500 days of a relationship between Tom Hansen and Summer Finn, exploring the complexities of love and heartbreak.',
    rating: '7.7',
    image: 'images/500%20day%20of%20summer.jpg',
  },
  {
    title: 'Jurassic world (2015)',
    mood: 'adventurous',
    genre: 'Action, Adventure',
    synopsis: 'follows a fully functioning dinosaur theme park on Isla Nublar under corporate ownership. To boost declining ticket sales, geneticists create the Indominus rex, a dangerous, highly intelligent hybrid.',
    rating: '7.0',
    image: 'images/Jurassic%20word.jpg',
  },
  {
    title: 'The Intouchables (2011)',
    mood: 'uplifting',
    genre: 'Family / Drama',
    synopsis: 'Philippe, a rich quadriplegic man, and Driss, a young ex-con from the projects, form an unlikely friendship that transforms both of their lives.',
    rating: '8.5',
    image: 'images/Intouchables.jpg',
  },
  {
    title: 'Mr Bean\'s Holiday (2007)',
    mood: 'happy',
    genre: 'Comedy',
    synopsis: 'Mr. Bean wins a trip to Cannes by church raffle. En route, he accidentally separates a young Russian boy named Stepan from his filmmaker father.',
    rating: '6.4',
    image: 'Mr.bean.jpg',
  },
  {
    title: 'Toy Story 5 (2025)',
    mood: 'chill',
    genre: 'Animation, Family',
    synopsis: ' 8-year-old Bonnie becomes addicted to a high-tech tablet named Lilypad. Jessie steps up as the new leader, and the traditional toys face their ultimate challenge when playtime goes digital',
    rating: '7.5',
    image: 'Toy_Story_5.jpg',
  },
];

const moodSelect = document.getElementById('moodSelect');
const movieGrid = document.getElementById('movieGrid');
const randomButton = document.getElementById('randomButton');

function createMovieCard(movie) {
  const card = document.createElement('article');
  card.className = 'movie-card';

  const posterSrc = movie.image || movie.linkImage || '';

  const posterHtml = posterSrc
    ? `<img class="poster-image" src="${posterSrc}" alt="${movie.title} movie poster" onerror="this.onerror=null;this.src='data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"800\" height=\"1200\" viewBox=\"0 0 800 1200\"><rect width=\"800\" height=\"1200\" fill=\"#111111\"/><rect x=\"24\" y=\"24\" width=\"752\" height=\"1152\" rx=\"36\" fill=\"#1c1c1c\" stroke=\"#ffffff33\" stroke-width=\"4\"/><text x=\"400\" y=\"580\" text-anchor=\"middle\" fill=\"#f6f0ff\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"54\" font-weight=\"700\">Poster unavailable</text></svg>')};" />`
    : '<div class="poster-image poster-fallback">Poster unavailable</div>';

  card.innerHTML = `
    ${posterHtml}
    <div class="poster-top">
      <h3 class="poster-title">${movie.title}</h3>
      <div class="poster-meta">
        <span>${movie.genre}</span>
        <span>${movie.mood.toUpperCase()}</span>
      </div>
      <div class="tags">
        <span class="tag">${movie.mood}</span>
        <span class="tag">${movie.rating} rating</span>
      </div>
    </div>
    <div class="poster-copy">
      <p class="movie-description">${movie.synopsis}</p>
      <div class="movie-footer">
        <span class="rating">${movie.rating}</span>
        <span>Perfect for ${movie.mood} days</span>
      </div>
    </div>
  `;

  return card;
}

function renderMovies(filterMood) {
  movieGrid.innerHTML = '';
  const filtered = movies.filter((movie) => filterMood === 'all' || movie.mood === filterMood);

  if (filtered.length === 0) {
    movieGrid.innerHTML = '<p class="no-results">No movies found for that mood yet. Try another vibe!</p>';
    return;
  }

  filtered.forEach((movie) => {
    movieGrid.appendChild(createMovieCard(movie));
  });
}

function pickRandomMovie() {
  const mood = moodSelect.value;
  const pool = movies.filter((movie) => mood === 'all' || movie.mood === mood);
  if (pool.length === 0) return;
  const selection = pool[Math.floor(Math.random() * pool.length)];
  alert(`Try this one: ${selection.title} — ${selection.synopsis}`);
}

moodSelect.addEventListener('change', () => renderMovies(moodSelect.value));
randomButton.addEventListener('click', pickRandomMovie);

renderMovies('all');
