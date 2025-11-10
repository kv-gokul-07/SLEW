import { create } from "zustand";

export const useMultiFormStore = create((set) => ({
    //LoginForm
    loginForm: {
        phoneNumber: "",
        password: "",
    },
    //Generic Updater (for any form field)
    setField: (formName, field, value) =>
        set((state) => ({
        [formName]: { ...state[formName], [field]: value },
    })),

    // Reset all
    resetAll: () =>
    set({
      loginForm: { phoneNumber: "", password: "" },
    }),
}));