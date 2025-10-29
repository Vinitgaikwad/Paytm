import { useEffect, useState } from "react";
import useUserStore from "../store/userStore";
import UserTable from "./UserTable";
import sendRequest from "../utils/sendRequest";

export default function UserDashboard() {
    const balance = useUserStore((state) => state.balance);
    const auth = useUserStore((state) => state.authorization);
    const [searchInput, setSearchInput] = useState("");
    const [filter, setFilter] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        const setBalanceOnRender = async () => {
            const authorization = useUserStore.getState().authorization;
            const setBalance = useUserStore.getState().setBalance;
            const accountResponse = await sendRequest(`${import.meta.env.VITE_ACCOUNT_LINK}/balance`, 'GET', {}, {
                authorization: authorization
            });
            setBalance(accountResponse.data.account.balance);
        }
        setBalanceOnRender();
    }, []);

    useEffect(() => {
        if (!auth) return;

        const controller = new AbortController();

        const getFilter = async () => {
            if (searchInput.trim() === "") {
                setFilter([]);
                return;
            }

            try {
                const url = `${import.meta.env.VITE_USER_LINK}/filter?filter=${encodeURIComponent(searchInput)}`;
                const response = await sendRequest(
                    url,
                    "GET",
                    null,
                    { authorization: auth },
                    controller.signal
                );

                const users = response?.data?.users || [];
                setFilter(users);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Fetch filter error:", error);
                }
            }
        };

        const debounce = setTimeout(() => {
            getFilter();
        }, 400);

        return () => {
            clearTimeout(debounce);
            controller.abort();
        };
    }, [searchInput, auth]);

    return (
        <div className="flex flex-col justify-between px-1 sm:px-6">
            <p className="py-4 text-lg font-bold">
                Balance: <span className="text-lg font-semibold">{balance}</span>
            </p>

            <div className="flex flex-col w-full">
                <p className="text-lg font-bold py-2">Users</p>
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleChange}
                    placeholder="Search User"
                    className="w-[99%] border border-gray-100 px-2 py-1 rounded-md shadow-lg shadow-gray-200"
                />
            </div>

            <UserTable users={filter} />
        </div>
    );
}
