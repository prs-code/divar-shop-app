import toast from 'react-hot-toast';
import { checkOTP } from 'services/auth';
import { setCookie } from 'src/utils/cookie';

function CheckOTPForm({ code, setCode, mobile, setStep }) {
    const submitHandler = async event => {
        event.preventDefault();

        if (code.length !== 5) {
            toast.error("کد وارد شده صحیح نمی باشد");
            return;
        };

        const { response, error } = await checkOTP(mobile, code);

        if (error) toast.error("،کد وارد شده اشتباه است یا تاریخ مصرف آن به اتمام رسیده\nجهت دریافت کد جدید اقدام نمایید.")
        if (response) {
            setCookie(response.data);
            toast.success("ورود با موفقیت انجام شد");
        };

         
    };

    return (
        <form onSubmit={submitHandler}>
            <p>تایید کد ارسال شده</p>
            <span>کد ارسال شده به شماره ({mobile}) را وارد نمایید.</span>
            <label htmlFor="input">کد تایید را وارد نمایید.</label>
            <input 
                type="text" 
                id="input"
                placeholder="کد تایید"
                value={code}
                onChange={e => setCode(e.target.value)}
            />
            <button type="submit">ورود</button>
            <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
        </form>
    )
}

export default CheckOTPForm