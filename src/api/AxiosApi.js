import axios from "axios";

const KH_DOMAIN = "http://localhost:5000"; // Flask 서버 주소

const AxiosApi = {
  genderChart: async (region) => {
    // 요청 헤더에 'Content-Type'을 추가할 수 있습니다
    const headers = {
      "Content-Type": "application/json", // 헤더에 Content-Type 설정
    };

    try {
      const response = await axios.get(`${KH_DOMAIN}/api/gender/${region}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};

export default AxiosApi;
