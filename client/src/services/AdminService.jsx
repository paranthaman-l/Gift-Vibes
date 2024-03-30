import { useEffect } from "react";
import { adminApi } from "../apis/axios"


const token = localStorage.getItem("token");
const uid = localStorage.getItem("uid");
const authHeader = `Bearer ${token}`;
const headers = {
    'Authorization': authHeader,
    'Content-Type': 'application/json',
}
class AdminService {
    
    GetUser() {
        return adminApi.get("/getById", {
            params: { uid: localStorage.getItem('uid') }, 
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        })
    }
    GetAllCustomers() {
        return adminApi.get("/getCustomer", { headers })
    }

    getGift() {
        return adminApi.get("/gift", { headers });
    }

    getGiftById(gid) {
        return adminApi.get("/getGiftById", { params: { gid }, headers });
    }

    addGift(gift) {
        return adminApi.post("/gift", gift, { headers });
    }

    editGift(gift) {
        return adminApi.put("/gift/" + gift?.gid, gift, { headers });
    }

    deleteGift(gid) {
        return adminApi.delete("/gift/" + gid, { headers });
    }

    updateProfile(uid, profile) {
        return adminApi.put("/updateProfile",{uid,profile},{headers});
    }
}

export default new AdminService()