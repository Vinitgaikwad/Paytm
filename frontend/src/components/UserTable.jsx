import transactionStore from "../store/transactionStore";
import { useNavigate } from "react-router-dom";

export default function UserTable({ users }) {
    const navigate = useNavigate();
    const setTo = transactionStore.getState().setTo;

    function createInitials(firstname, lastname) {
        const firstLetter = firstname[0];
        const lastLetter = lastname[0];

        return `${firstLetter}${lastLetter}`;
    }

    const sendMoneyEvent = (user) => {
        setTo(user._id, user.firstname, user.lastname);
        navigate('/transaction');
    }

    return (
        <>
            <div className="flex flex-col">
                {users.map((user) => {
                    return (
                        <div className="flex justify-between mt-4" key={user._id}>
                            <div className="flex gap-4 items-center">
                                <p className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center text-xs">{createInitials(user.firstname, user.lastname)}</p>
                                <p className="h-[100%] flex items-center font-semibold -translate-y-[2px]">{user.username}</p>
                            </div>
                            <button
                                type="button"
                                className="text-white bg-black font-bold text-xs p-2 rounded-md shadow-md shadow-gray-400 hover:shadow-xl"
                                onClick={() => {
                                    sendMoneyEvent(user)
                                }}
                            >
                                Send Money
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}