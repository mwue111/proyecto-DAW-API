/**
 * Functional component representing an authentication card.
 * @param {object} props - The component props.
 * @param {JSX.Element} props.logo - The logo to be displayed.
 * @param {JSX.Element} props.children - The content of the card.
 * @returns {JSX.Element} - The rendered authentication card.
 */
const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>{logo}</div>

        <div className="w-full sm:max-w-md m-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard
