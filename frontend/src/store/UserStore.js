import { create } from "zustand";

const useUserStore = create((set) => ({
    _id: "",
    username: "",
    firstname: "",
    balance: 0,
    authorization: "",
    setBalance: (balance) => set({ balance: balance }),
    setUserInfo: (_id, username, firstname) => set({ _id: _id, username: username, firstname: firstname }),
    setAuth: (auth) => set({ authorization: auth })
}));

export default useUserStore;