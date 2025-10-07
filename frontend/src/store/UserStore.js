import { create } from "zustand";

const useUserStore = create((set) => ({
    _id: "",
    username: "",
    firstname: "",
    balance: 0,
    setBalance: (balance) => set({ balance: balance }),
    setUserInfo: (_id, username, firstname) => set({ _id: _id, username: username, firstname: firstname })
}));

export default useUserStore;