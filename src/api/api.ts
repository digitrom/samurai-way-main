import axios from "axios";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        'API-KEY':'bf9b2fdb-0844-4b4a-9eec-962dd771a951'
    }
})


