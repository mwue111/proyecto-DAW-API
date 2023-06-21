import Link from 'next/link'

/**
 * ResponsiveNavLink component.
 * Renders a responsive navigation link with customizable active state styling.
 * @param {boolean} active - Determines if the link is active.
 * @param {ReactNode} children - The content of the link.
 * @param {object} props - Additional props for the link.
 * @returns {JSX.Element} The rendered responsive navigation link.
 */
const ResponsiveNavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700'
                : 'border-transparent text-gray-100 hover:text-red-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'
        }`}>
        {children}
    </Link>
)

/**
 * ResponsiveNavButton component.
 * Renders a responsive navigation button with default styling.
 * @param {object} props - Additional props for the button.
 * @returns {JSX.Element} The rendered responsive navigation button.
 */
export const ResponsiveNavButton = props => (
    <button
        className="block w-full pl-3 pr-4 py-2 border-l-4 text-left text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-100 hover:text-red-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
        {...props}
    />
)

export default ResponsiveNavLink
