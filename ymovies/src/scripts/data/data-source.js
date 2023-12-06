import axios from 'axios';

class DataSource {
  static async searchMovie(keyword) {
    const url = 'https://imdb8.p.rapidapi.com/auto-complete';

    const config = {
      params: { q: keyword },
      headers: {
      }
    };

    try {
      const response = await axios.get(url, config);

      if (!response.data.d) {
        throw new Error('Network response was not ok');
      }

      const movies = response.data.d;
      const formattedMovies = movies.map(movie => ({
        name: movie.l,
        poster: movie.i ? movie.i.imageUrl : '',
        description: movie.s,
        rating: movie.rank,
        year: movie.y,
        cast: movie.ab ? movie.ab.map(actor => actor.l) : []
      }));

      return formattedMovies;
    } catch (error) {
      throw new Error('Failed to fetch movies from the API');
    }
  }
}

export default DataSource;
