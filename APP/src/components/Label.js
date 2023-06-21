/**
 * Label component.
 * Renders a label element.
 * @param {Object} props - The component props.
 * @param {string} [props.className=''] - Additional CSS class for the label.
 * @param {React.ReactNode} props.children - The content to be rendered inside the label.
 * @returns {JSX.Element} The rendered label element.
 */
const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label
