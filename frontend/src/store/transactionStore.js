import { create } from "zustand";

const transactionStore = create((set) => ({
    from: "",
    name: "",
    to: "",
    initals: "",
    amount: "",
    setTo: (to, firstname, lastname) => set({ to: to, name: `${firstname} ${lastname}`, initals: `${firstname[0]}${lastname[0]}` }),
    setAmount: (amount) => set({ amount: amount }),
    setFrom: ({ from }) => set({ from: from })
}));

export default transactionStore;