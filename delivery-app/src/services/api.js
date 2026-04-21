import axios from "axios";

const BASE_URL = "https://t4e-testserver.onrender.com/api";
const STUDENT_ID = "E0323006";
const PASSWORD = "635599";
const SET = "setA"; // 


const getToken = async () => {
  const { data } = await axios.post(`${BASE_URL}/public/token`, {
    studentId: STUDENT_ID,
    password: PASSWORD,
    set: SET, 
  });

  return data;
};

const getDataset = async (token, dataUrl) => {
  const { data } = await axios.get(`${BASE_URL}${dataUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.data;
};

export const fetchData = async () => {
  try {
    const tokenData = await getToken();
    const dataset = await getDataset(
      tokenData.token,
      tokenData.dataUrl
    );

    return dataset;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
