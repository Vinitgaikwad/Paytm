import { useState } from "react";
import LoginCard from "../components/SignInCard";
import SignUpCard from "../components/SignUpCard";
import Alert from "../components/Alert";

export default function LoginPage() {
    const [switchTab, setSwitchTab] = useState(true);

    return (
        <>
            {switchTab ? (
                <div className="w-screen min-h-screen flex justify-center sm:items-center bg-gray-400">
                    <Alert />
                    <div className="w-[100%] p-2 sm:w-[350px] sm:p-0">
                        <LoginCard setSwitchTab={setSwitchTab}></LoginCard>
                    </div>
                </div>) : (
                <div className="w-screen min-h-screen flex justify-center sm:items-center bg-gray-400">
                    <Alert />
                    <div className="w-[100%] p-2 sm:w-[350px] sm:p-0">
                        <SignUpCard setSwitchTab={setSwitchTab}></SignUpCard>
                    </div>
                </div>
            )}
        </>
    )
}