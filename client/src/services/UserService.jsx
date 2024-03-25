import { userApi } from "../apis/axios"

const token = localStorage.getItem("token");
const uid = localStorage.getItem("uid");
const authHeader = `Bearer ${token}`;
const headers = {
    'Authorization': authHeader,
    'Content-Type': 'application/json',
}
class UserService {
    GetUser() {
        return userApi.get("/getById", {
            params: { uid: localStorage.getItem('uid') },
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        })
    }
    getFeaturedGift() {
        return userApi.get("/getFeaturedGift", { headers })
    }
    getProduct(pid) {
        return userApi.get("/getProduct", { params: { pid }, headers })
    }
}

export default new UserService()