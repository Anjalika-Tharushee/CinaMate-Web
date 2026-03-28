// Data arrays for movies and TV shows
const movies = [
  { id: 1, title: "Inside Out 2", year: 2024, rating: 7.6, genre: "Animation", badge: "trending", type: "movie", image: "images/insideout2.jpeg" },
  { id: 2, title: "Get Out", year: 2017, rating: 7.7, genre: "Horror", badge: "trending", type: "movie", image: "images/getout.jpeg" },
  { id: 3, title: "La La Land", year: 2016, rating: 8.0, genre: "Romance", badge: "new", type: "movie", image: "images/La La Land.jpeg" },
  { id: 4, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", badge: "top", type: "movie", image: "images/inception.jpeg" },
  { id: 5, title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action", badge: "top", type: "movie", image: "images/darknight.jpeg" },
  { id: 6, title: "Parasite", year: 2019, rating: 8.6, genre: "Drama", badge: "top", type: "movie", image: "images/parasite.jpeg" },
  { id: 7, title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi", badge: "top", type: "movie", image: "images/intersteller.jpeg" },
  { id: 8, title: "Joker", year: 2019, rating: 8.5, genre: "Thriller", badge: "trending", type: "movie", image: "images/joker.jpeg" },
  { id: 9, title: "Avengers: Endgame", year: 2019, rating: 8.4, genre: "Action", badge: null, type: "movie", image: "images/endgame.jpeg" },
  { id: 10, title: "Frozen II", year: 2019, rating: 7.0, genre: "Animation", badge: null, type: "movie", image: "images/frozen2.jpeg" },
  { id: 11, title: "Black Panther", year: 2018, rating: 7.3, genre: "Action", badge: null, type: "movie", image: "images/blackpanther.jpeg" },
  { id: 12, title: "The Lion King", year: 1994, rating: 8.5, genre: "Animation", badge: "classic", type: "movie", image: "images/lionking.jpeg" },
  { id: 13, title: "Titanic", year: 1997, rating: 7.8, genre: "Drama", badge: "classic", type: "movie", image: "images/titanic.jpg" },
  { id: 14, title: "Toy Story 4", year: 2019, rating: 7.8, genre: "Animation", badge: "new", type: "movie", image: "images/toy4.jpeg" }
];

const tvShows = [
  { id: 101, title: "Breaking Bad", year: "2008-2013", rating: 9.5, genre: "Drama", badge: "top", type: "tv", image: "images/breakingbad.jpeg" },
  { id: 102, title: "Stranger Things", year: "2016-2025", rating: 8.7, genre: "Sci-Fi", badge: "trending", type: "tv", image: "images/strangerthinngs5.jpeg" },
  { id: 103, title: "Game of Thrones", year: "2011-2019", rating: 9.3, genre: "Fantasy", badge: "top", type: "tv", image: "images/got.jpeg" },
  { id: 104, title: "The Mandalorian", year: "2019-", rating: 8.8, genre: "Sci-Fi", badge: "new", type: "tv", image: "images/mandalorian.jpeg" },
  { id: 105, title: "The Witcher", year: "2019-", rating: 8.2, genre: "Fantasy", badge: "new", type: "tv", image: "images/witcher.jpeg" },
  { id: 106, title: "Friends", year: "1994-2004", rating: 8.9, genre: "Comedy", badge: null, type: "tv", image: "images/friend.jpeg" },
  { id: 107, title: "The Office", year: "2005-2013", rating: 8.9, genre: "Comedy", badge: "top", type: "tv", image: "images/office.jpeg" },
  { id: 108, title: "Harry Potter", year: "2001-2011", rating: 7.6, genre: "Fantasy", badge: null, type: "tv", image: "images/harrypotter.jpeg" }
];

function getRatingClass(rating) {
  if (rating >= 8.5) {
    return "high";
  } else if (rating >= 6.0) {
    return "mid";
  } else {
    return "low";
  }
}

function getBadgeHTML(badge) {
  switch (badge) {
    case "trending":
      return `<span class="badge trending">Trending</span>`;
    case "new":
      return `<span class="badge new">New</span>`;
    case "top":
      return `<span class="badge top">Top</span>`;
    case "classic":
      return `<span class="badge classic">Classic</span>`;
    default:
      return "";
  }
}

function createCardHTML(item) {
  const ratingClass = getRatingClass(item.rating);
  const badgeHTML = getBadgeHTML(item.badge);
  const backgroundStyle = item.image ? `style="background-image: url('${item.image}');"` : "";
  const detailFile = item.type === 'tv' ? `tv-${item.id}.html` : `movie-${item.id}.html`;

  return `
    <a class="card-link" href="${detailFile}">
      <div class="movie-card">
        <div class="card-image" ${backgroundStyle}>
          ${badgeHTML}
        </div>
        <div class="movie-info">
          <h3>${item.title}</h3>
          <p>${item.year} • ${item.genre}</p>
          <span class="rating ${ratingClass}">⭐ ${item.rating}</span>
        </div>
      </div>
    </a>
  `;
}

function renderCards(dataArray, targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  let allCardsHTML = "";
  let i = 0;
  while (i < dataArray.length) {
    allCardsHTML += createCardHTML(dataArray[i]);
    i++;
  }

  container.innerHTML = allCardsHTML;
}

function renderHomepageTrending(dataArray, targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  let allCardsHTML = "";
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].rating > 8.0) {
      allCardsHTML += createCardHTML(dataArray[i]);
    }
  }

  container.innerHTML = allCardsHTML;
}

window.addEventListener('DOMContentLoaded', function() {
  renderHomepageTrending(movies, 'trending-grid');
  renderCards(movies, 'movies-grid');
  renderCards(tvShows, 'tvshows-grid');
});
