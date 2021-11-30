// Base URL
// key = 331f07e5a85446a39644e8c892355e0b;
const base_url = `https://api.rawg.io/api/games`;

// getting dates
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDate = () => {
    const date = new Date().getDate();
    if (date < 10) {
        return `0${date}`;
    } else {
        return date;
    }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDate = getCurrentDate();
const currentDay = `${currentYear}-${currentMonth}-${currentDate}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDate}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDate}`;

// Constructin API'S
const popular_games = `?key=${process.env.REACT_APP_RAWG_ID}&dates=${lastYear},${currentDay}&ordering=-rating&page_size=5`;
const upcoming_games = `?key=${process.env.REACT_APP_RAWG_ID}&dates=${currentDay},${nextYear}&ordering=-added&page_size=5`;
const newGames = `?key=${process.env.REACT_APP_RAWG_ID}&dates=${lastYear},${currentDay}&ordering=-release&page_size=5`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

// GAME DETAILS
export const gameDetailsUrl = (game_id) =>
    `${base_url}/${game_id}?key=${process.env.REACT_APP_RAWG_ID}`;
// Game Screenshots
export const gameScreenShotsUrl = (game_id) =>
    `${base_url}/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_ID}`;

// Searched game
export const searchGameURL = (game_name) =>
    `${base_url}?key=${process.env.REACT_APP_RAWG_ID}&search=${game_name}&page_size=9`;
