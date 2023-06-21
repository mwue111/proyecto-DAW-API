import Link from 'next/link'

/**
 * NavLink component.
 * Renders a navigation link using Next.js's Link component.
 * @param {Object} props - The component props.
 * @param {boolean} [props.active=false] - Indicates if the link is active.
 * @param {React.ReactNode} props.children - The content to be rendered inside the link.
 * @returns {JSX.Element} The rendered navigation link.
 */
const NavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'border-red-400 text-red-400 focus:border-white font-bold'
                : 'border-transparent text-gray-100 hover:text-red-400 hover:border-red-400 focus:text-gray-700 focus:border-gray-300'
        }`}>
        {children}
    </Link>
)

export default NavLink
