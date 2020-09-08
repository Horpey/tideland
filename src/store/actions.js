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

  getNowPlaying({ commit }) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/movie/now_playing?api_key=${apiKey}`,
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
  getTrending({ commit }) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseURL}/3/trending/all/day?api_key=${apiKey}`,
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
