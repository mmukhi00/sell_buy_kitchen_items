import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.65.158.151:9001/api"
});

export default apiClient;
