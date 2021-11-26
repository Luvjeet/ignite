// Base URL
// key = 331f07e5a85446a39644e8c892355e0b;
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_ID}`;

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
const lastYear = `${currentYear - 1}-${currentMonth - 1}-${currentDate - 1}`;
const nextYear = `${currentYear + 1}-${currentMonth + 1}-${currentDate + 1}`;

// Constructin API'S
const popular_games = `&dates=${lastYear},${currentDay}&ordering=-rating&page_size=15`;
const upcoming_games = `&dates=${currentDay},${nextYear}&ordering=-added&page_size=15`;
const newGames = `&dates=${lastYear},${currentDay}&ordering=-release&page_size=15`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;
