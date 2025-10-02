import { create } from 'zustand'

const useAlertStore = create((set) => ({
    msg: "",
    success: null,
    viewOn: false,
    setAlertMsg: ({ msg, success }) => set({ msg: msg, success: success }),
    setAlertDefault: () => set({ msg: "", success: null })
}));

export default useAlertStore;