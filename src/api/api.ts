import axios from "axios";

const instance = axios.create({
  baseURL: "http://ssdproduct.ssd.admin.local:8089/api",
});

export const tasksApi = {
  getTasks() {
    return instance.get(`/order`).then((res) => res.data);
  },
};
