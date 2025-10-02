import Heading from "./Heading"
import SignUpForm from "./SignUpFrom"
import SubHeading from "./SubHeading"

export default function SignUpCard({ setSwitchTab }) {
    return (
        <>
            <div className="w-100 flex flex-col p-6 shadow-gray-400 shadow-md rounded-xl bg-white">
                <Heading text="Sign Up"></Heading>
                <SubHeading text="Enter your information to create an account"></SubHeading>
                <SignUpForm></SignUpForm>
                <p className="flex justify-center mt-2">
                    Don't have an account? &nbsp;
                    <span className="underline cursor-pointer" onClick={() => { setSwitchTab(true) }}>
                        Sign In
                    </span>
                </p>
            </div>
        </>
    )
}