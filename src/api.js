import axios from 'axios';

const API_ENDPOINT =
  'https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev';

const model = async (url) => {
  try {
    const result = await axios(url);
    console.log(result);
    return result;
  } catch (error) {
    if (error.response) {
      //요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      const {
        response: {
          data: { message },
          status,
        },
      } = error;
      console.log(message);
      return { message, status };
    } else if (error.request) {
      //요청이 이루어 졌으나 응답을 받지 못했습니다.
      console.log(error.request);
    } else {
      //오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      console.log('Error', error.message);
    }
  }
};

export const api = {
  fetchHotels: async (page, filter_condition) => {
    const result = await model(
      `${API_ENDPOINT}/hotels?page=${page}&filters=${filter_condition}`,
    );
    return result;
  },
  fetchHotelPrice: async (ids) => {
    const result = await model(`${API_ENDPOINT}/hotel-prices?ids=${ids}`);
    return result;
  },
};
