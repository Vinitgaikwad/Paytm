import Heading from "./Heading"
import SignInForm from "./SignInForm"
import SubHeading from "./SubHeading"

export default function LoginCard({ setSwitchTab }) {
    return (
        <>
            <div className="w-100 flex flex-col p-6 shadow-gray-400 shadow-md rounded-xl bg-white">
                <Heading text="Sign In"></Heading>
                <SubHeading text="Enter your credentials to access account"></SubHeading>
                <SignInForm></SignInForm>
                <p className="flex justify-center mt-2">Don't have an account? &nbsp;<span className="underline cursor-pointer" onClick={() => { setSwitchTab(false) }}> Sign Up </span></p>
            </div>
        </>
    )
}