export default function SignInForm() {
    return (
        <form className="w-100 flex flex-col bg-white">
            <div className="flex flex-col mb-3">
                <label htmlFor="username" className="text-black-400 text-sm font-semibold mb-2">Username</label>
                <input type="text" id="username" className="p-1 border-[2px] border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="text-black-400 text-sm font-semibold mb-2">Password</label>
                <input type="password" id="password" className="p-1 border-[2px] border-gray-300 rounded-md mb-4" />
            </div>
            <button type="button" className="text-sm text-white font-bold bg-black py-2 rounded-lg">Sign In</button>
        </form>
    )
}