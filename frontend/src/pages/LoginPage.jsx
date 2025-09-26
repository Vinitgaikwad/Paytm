import { useState } from "react";
import LoginCard from "../components/LoginCard";
import SignUpCard from "../components/SignUpCard";

export default function LoginPage() {
    const [switchTab, setSwitchTab] = useState(true);

    return (
        <>
            {switchTab ? (
                <div className="w-screen min-h-screen flex justify-center sm:items-center bg-gray-400">
                    <div className="w-[100%] p-2 sm:w-[350px] sm:p-0">
                        <LoginCard setSwitchTab={setSwitchTab}></LoginCard>
                    </div>
                </div>) : (
                <div className="w-screen min-h-screen flex justify-center sm:items-center bg-gray-400">
                    <div className="w-[100%] p-2 sm:w-[350px] sm:p-0">
                        <SignUpCard setSwitchTab={setSwitchTab}></SignUpCard>
                    </div>
                </div>
            )}
        </>
    )
}