export default function UserTable() {
    const users = [
        {
            _id: "dwkfefeslkfesfk",
            username: "User 1",
            firstname: "Vinit",
            lastname: "Gaikwad"
        },
        {
            _id: "dwkfefeslkfesfk",
            username: "User 2",
            firstname: "Sumit",
            lastname: "Gaikwad"
        },
        {
            _id: "dwkfefeslkfesfk",
            username: "User 3",
            firstname: "Ajay",
            lastname: "Zira"
        },
    ];

    function createInitials(firstname, lastname) {
        const firstLetter = firstname[0];
        const lastLetter = lastname[0];

        return `${firstLetter}${lastLetter}`;
    }

    return (
        <>
            <div className="flex flex-col">
                {users.map((user) => {
                    return (
                        <div className="flex justify-between mt-4">
                            <div className="flex gap-4 items-center">
                                <p className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center text-xs">{createInitials(user.firstname, user.lastname)}</p>
                                <p className="h-[100%] flex items-center font-semibold -translate-y-[2px]">{user.username}</p>
                            </div>
                            <button type="button" className="text-white bg-black font-bold text-xs p-2 rounded-md shadow-md shadow-gray-400 hover:shadow-xl">Send Money</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}