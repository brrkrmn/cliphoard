import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      toastOptions={{
        className: "bg-blue text-white h-10",
        duration: 1000,
        error: {
          className: "bg-red text-white h-10",
          icon: null
        }
      }}
    />
  )
}

export default Toast;