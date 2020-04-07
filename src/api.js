const API_ENDPOINT = 
    "https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev";

export const api = {
    fetchHotels: async (page, filter_condition) => {
        const result = await fetch(`${API_ENDPOINT}/hotels?page=${page}&filters=${filter_condition}`);
        return result.json();
    }
};