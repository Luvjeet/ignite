import axios from "axios";
import {
    popularGamesUrl,
    upcomingGamesUrl,
    newGamesUrl,
    searchGameURL,
} from "../api";

// Action creater
export const loadGames = () => async (dispatch) => {
    // FETCH AXIOS
    const popularData = await axios.get(popularGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        },
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGame = await axios.get(searchGameURL(game_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGame.data.results,
        },
    });
};
