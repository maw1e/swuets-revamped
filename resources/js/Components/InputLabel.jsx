export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-gray-700 mt-4` + className
            }
        >
            {value ? value : children}
        </label>
    );
}
