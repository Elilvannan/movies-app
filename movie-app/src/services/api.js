const API_KEY = "117538c1bf2394aaed536aa3f79acb45"; // Replace with a valid API key
const BASE_URL = "https://api.themoviedb.org/3"; // Corrected base URL

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
