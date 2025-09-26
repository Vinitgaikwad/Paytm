export default function LoginCard({ setSwitchTab }) {


    return (
        <>
            <div className="w-100 flex flex-col p-6 shadow-gray-400 shadow-md rounded-xl bg-white">
                <p className="w-100 flex justify-center mb-2 mt-1 text-black-700 font-bold text-3xl">Sign In</p>
                <p className="w-100 flex justify-center mb-2 mt-1 text-gray-700 text-lg text-center px-4 sm:px-0">Enter your credentials to access account</p>
                <p className=""></p>
                <div className="flex flex-col mb-3">
                    <label htmlFor="username" className="text-black-400 text-sm font-semibold mb-2">Username</label>
                    <input type="text" id="username" className="p-1 border-[2px] border-gray-300 rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="text-black-400 text-sm font-semibold mb-2">Password</label>
                    <input type="password" id="password" className="p-1 border-[2px] border-gray-300 rounded-md mb-4" />
                </div>
                <button type="button" className="text-sm text-white font-bold bg-black py-2 rounded-lg">Sign In</button>
                <p className="flex justify-center mt-2">Don't have an account? &nbsp;<span className="underline cursor-pointer" onClick={() => { setSwitchTab(false) }}> Sign Up </span></p>
            </div>
        </>
    )
}