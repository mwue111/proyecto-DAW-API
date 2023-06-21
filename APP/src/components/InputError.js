/**
 * InputError component.
 * Renders error messages for an input field.
 * @param {Object} props - The component props.
 * @param {string[]} [props.messages=[]] - An array of error messages to display.
 * @param {string} [props.className=''] - Additional CSS class for the error messages.
 * @returns {JSX.Element|null} The rendered component or null if there are no messages.
 */
const InputError = ({ messages = [], className = '' }) => (
    <>
        {messages.length > 0 && (
            <>
                {messages.map((message, index) => (
                    <p
                        className={`${className} text-sm text-red-600`}
                        key={index}>
                        {message}
                    </p>
                ))}
            </>
        )}
    </>
)

export default InputError
