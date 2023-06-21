/**
 * Input component.
 * Renders an input element with customizable properties.
 * @param {Object} props - The component props.
 * @param {boolean} [props.disabled=false] - Indicates if the input is disabled.
 * @param {string} [props.className] - Additional CSS class for the input element.
 * @param {any} [props.props] - Additional properties to be spread on the input element.
 * @returns {JSX.Element} The rendered component.
 */
const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
