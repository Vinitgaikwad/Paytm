import { useState } from "react";
import sendRequest from "../utils/sendRequest";
import useAlertStore from "../store/alertStore";

export default function SignUpForm() {
    const [signinFields, setSigninFields] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    });

    const changeAlert = useAlertStore((state) => state.setAlertMsg);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setSigninFields(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    const handleSubmit = async () => {
        const { firstname, lastname, username, password } = signinFields;

        if (!firstname || !lastname || !username || !password) {
            alert("Please fill all the fields");
            return;
        }

        const response = await sendRequest('http://localhost:4444/api/v1/user/sign-up', 'POST',
            {
                firstname,
                lastname,
                username,
                password
            });

        const { msg, success } = response.data;

        changeAlert({ msg, success, viewOn: true });
    }

    return (
        <form className="w-100 flex flex-col bg-white">
            <div className="flex flex-col mb-3">
                <label htmlFor="firstname" className="text-black-400 text-sm font-semibold mb-2">First Name</label>
                <input type="text" id="firstname" className="p-1 border-[2px] border-gray-300 rounded-md" onChange={handleChange} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="lastname" className="text-black-400 text-sm font-semibold mb-2">Lastname</label>
                <input type="text" id="lastname" className="p-1 border-[2px] border-gray-300 rounded-md mb-4" onChange={handleChange} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="username" className="text-black-400 text-sm font-semibold mb-2">Username</label>
                <input type="text" id="username" className="p-1 border-[2px] border-gray-300 rounded-md mb-4" onChange={handleChange} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="text-black-400 text-sm font-semibold mb-2">Password</label>
                <input type="password" id="password" className="p-1 border-[2px] border-gray-300 rounded-md mb-4" onChange={handleChange} />
            </div>
            <button type="button" className="text-sm text-white font-bold bg-black py-2 rounded-lg" onClick={handleSubmit}>Sign Up</button>
        </form>
    )
}
