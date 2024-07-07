import api from "../configs/api";

const sendOTP = async (mobile) => {
    try {
        const response = await api.post("/auth/send-otp", { mobile });
        return { response } 
    } catch (error) {
        return { error }
    }
};

const checkOTP = async (mobile, code) => {
    try {
        const response = await api.post("/auth/check-otp", { mobile, code });
        return { response }
    } catch (error) {
        return { error }
    }
};

export { sendOTP, checkOTP };