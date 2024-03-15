import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const notifySuccess = (text: string) =>
    toast.success(text, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

export const notifyError = (text: string) =>
    toast.error(text, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });