import axios from "axios";
const baseURL = "https://api.themoviedb.org";
const apiKey = "cb95eff79819a2a98cc3b3712fc5d402";
// Export Action
export const actions = {
  getConfigurations({ commit }) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/configuration?api_key=${apiKey}`,
        method: "GET",
      })
        .then((resp) => {
          commit("setConfig", resp.data);
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getMovieFrame({ commit }, imdbID) {
    return new Promise((resolve, reject) => {
      axios({
        url: `https://movies-tv-series-streaming-links.p.rapidapi.com/?imdb=${imdbID}&?type=get-movie-embeds`,
        method: "GET",
        headers: {
          "x-rapidapi-host": "movies-tv-series-streaming-links.p.rapidapi.com",
          "x-rapidapi-key":
            "e404456324mshddc568274713158p16ff08jsnb555342234da",
          useQueryString: true,
        },
      })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getMovieDetails({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/movie/${id}?api_key=${apiKey}`,
        method: "GET",
      })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getSimilar({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/movie/${id}/similar?api_key=${apiKey}`,
        method: "GET",
      })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  searchMovie({ commit }, search) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/search/movie?api_key=${apiKey}&query=${search}`,
        method: "GET",
      })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getVideos({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/movie/${id}/videos?api_key=${apiKey}`,
        method: "GET",
      })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getPopular({ commit }, page) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/movie/popular?api_key=${apiKey}&page=${page}`,
        method: "GET",
      })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getTopRated({ commit }, page) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/movie/top_rated?api_key=${apiKey}&page=${page}`,
        method: "GET",
      })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getNowPlaying({ commit }, page) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/movie/now_playing?api_key=${apiKey}&page=${page}`,
        method: "GET",
      })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getTrending({ commit }, page) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/trending/all/day?api_key=${apiKey}&page=${page}`,
        method: "GET",
      })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getLatest({ commit }) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&page=1`,
        method: "GET",
      })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
