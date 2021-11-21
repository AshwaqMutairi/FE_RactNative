import axios from "axios";

// export const baseURL = "http://172.20.10.2:8000"; //my phone
// export const baseURL = "http://172.25.64.235:8000"; //work wifi

export const baseURL = "http://192.168.8.101:8000"; //my phone

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});

// export default instance;
