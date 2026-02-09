import api from "./axios";

export default {

  async login(data){
    const res = await api.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    return res.data;
  },

  async logout(){
    await api.post("/auth/logout");
    localStorage.removeItem("token");
  },

  isAuthenticated(){
    return !!localStorage.getItem("token");
  }
};
