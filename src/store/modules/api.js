import { apiDefaults, axios } from "@/api/index.js";

const Auth = {
  getters: {
    client: () => {
      const apiClient = axios.create({
        ...apiDefaults,
      });
      return apiClient;
    },
  },
};
export default Auth;
