import axios from "axios";
import { gameDetailsUrl, gameScreenShotsUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsUrl(id));
    const screenShotData = await axios.get(gameScreenShotsUrl(id));
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screenShot: screenShotData.data,
        },
    });
};
