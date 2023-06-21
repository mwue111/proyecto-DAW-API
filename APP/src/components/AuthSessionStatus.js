/**
 * Functional component representing the session status in an authentication context.
 * @param {object} props - The component props.
 * @param {string} props.status - The session status to be displayed.
 * @param {string} props.className - Additional CSS classes for styling.
 * @returns {JSX.Element|null} - The rendered session status or null if status is falsy.
 */
const AuthSessionStatus = ({ status, className, ...props }) => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
)

export default AuthSessionStatus
