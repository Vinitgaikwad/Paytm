import UserTable from "./UserTable";

export default function UserDashboard() {
    return (
        <>
            <div className="flex flex-col justify-between px-1 sm:px-6">
                <p className="py-4 text-lg font-bold">Balance : <span className="text-lg font-semibold">5000</span></p>
                <div className="flex flex-col w-100">
                    <p className="text-lg font-bold py-2">Users</p>
                    <input type="text" className="w-[99%] border-[1px]  border-gray-100 px-2 py-1 rounded-md shadow-lg shadow-gray-200" placeholder="Search User" />
                </div>
                <div>
                    <UserTable></UserTable>
                </div>
            </div>
        </>
    )
}