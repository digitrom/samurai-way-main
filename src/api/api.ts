import axios, {AxiosResponse} from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'bf9b2fdb-0844-4b4a-9eec-962dd771a951'
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: string) {
        return instance.post<ResponseType<{ data: UserType }>>(`follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    getProfile(userId: string | number) {
        console.warn('Obsolete method. Please, use profileAPI object')
        return profileAPI.getProfile(userId)
    },
    me() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId: string | number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string | number) {
        return instance.get(`profile/status` + userId)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType<{data: StatusType}>>('profile/status', {status:status})
    }
}

export type UserType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location?: LocationType
}

export type LocationType = {
    country: string
    city: string
}

type PhotosType = {
    small: string
    large: string
}

type StatusType = {
    status: string
}


export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    filedErrors: Array<string>
    data: D
}

type GetUsersResponseType = {
    error: string | null
    totalCount: number
    items: UserType[]
}