import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      toastOptions={{
        className: "bg-background-blue text-foreground-white h-10",
        duration: 1000,
      }}
    />
  )
}

export default Toast;