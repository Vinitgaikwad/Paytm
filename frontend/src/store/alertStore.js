import { create } from 'zustand'

const useAlertStore = create((set) => ({
    msg: "",
    success: null,
    viewOn: false,
    setAlertMsg: ({ msg, success, viewOn }) => set({ msg: msg, success: success, viewOn: viewOn }),
    setAlertDefault: () => set({ msg: "", success: null, viewOn: false })
}));

export default useAlertStore;