import { useState } from "react"
import handleSignIn from "../utils/handleSignIn";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
    const [inputFields, setInputFields] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputFields((current) => {
            const { id, value } = e.target;
            return {
                ...current,
                [id]: value
            }
        })
    }

    return (
        <form className="w-100 flex flex-col bg-white">
            <div className="flex flex-col mb-3">
                <label htmlFor="username" className="text-black-400 text-sm font-semibold mb-2">Username</label>
                <input type="text" id="username" className="p-1 border-[2px] border-gray-300 rounded-md" onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="text-black-400 text-sm font-semibold mb-2">Password</label>
                <input type="password" id="password" className="p-1 border-[2px] border-gray-300 rounded-md mb-4" onChange={(e) => { handleChange(e) }} />
            </div>
            <button type="button" className="text-sm text-white font-bold bg-black py-2 rounded-lg" onClick={async () => { await handleSignIn(inputFields, navigate) }}>Sign In</button>
        </form>
    )
}