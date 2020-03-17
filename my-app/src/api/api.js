import * as axios from "axios";


const instence = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',  // avtomat kpnuma
    withCredentials: true,                                       // avtomat kpnuma
    headers: {                                                    // avtomat kpnuma
        "API-KEY": "15e31ab5-71a1-4d02-9887-30af1a4071fc"
    }
});

export const UsersAPI = {
    getUsersApi(currentPage = 1, pageSize = 50) { //63 DAL, axios.create  default znachenie currentPage = 1, pageSize = 50
        return (
            instence.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data  //promise
            })
        )
    },
    followApi(userId) {
        return (
            instence.post(`follow/${userId}`)
        )
    },
    unFollowApi(userId) {
        return (
            instence.delete(`follow/${userId}`)
        )
    },
    getProfileApi(userId){
        return (
            instence.get(`profile/${userId}`)
        )
    }
};

export const authAPI = {
    authMe(){
       return (
           instence.get(`auth/me`)
       )
    }
};