const Badge = ({status}) => {
    const styles = {
        Planning: "bg-yellow-100 text-yellow-800",
        Active:"bg-green-100 text-green-800",
        Completed:"bg-blue-100 text-blue-800",
    }
    return(
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
            {status}
        </span>
    )
}
export default Badge