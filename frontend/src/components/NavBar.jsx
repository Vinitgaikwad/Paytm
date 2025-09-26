export default function Navbar() {
    return (
        <>
            <div className="flex justify-between px-1 sm:px-6 py-2 border-b-[1px] shadow-lg shadow-gray-200 rounded-sm">
                <div className="h-100 flex items-center">
                    <p className="text-lg sm:text-xl font-bold text-black">Payments App</p>
                </div>
                <div className="flex gap-4">
                    <p className="h-100 flex items-center text-sm sm:text-md font-semibold">Hello, User</p>
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex justify-center items-center text-sm font-semibold ">
                        U
                    </div>
                </div>
            </div>
        </>
    )
}