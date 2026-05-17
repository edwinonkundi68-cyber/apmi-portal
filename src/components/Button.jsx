import { preinitModule } from "react-dom"

const Button = ({children, onClick, type="button",variant="primary"}) => {
    const base = "px-4 py-2 rounded font-semibold transition duration-200"
    const styles = {
        primary:"bg-blue-800 text-white hover:bg-blue-900",
        secondary: "bg-yellow-500 text-white hover:bg-yellow-600",
        outline: "border border-blue-800 text-blue-800 hover:bg-blue-50",
    }
    return(
        <button type={type} onClick={onClick} className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    )
}
export default Button