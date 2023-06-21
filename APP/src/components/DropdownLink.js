import Link from 'next/link'
import { Menu } from '@headlessui/react'

/**
 * DropdownLink component.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the dropdown link.
 * @returns {JSX.Element} The rendered component.
 */
const DropdownLink = ({ children, ...props }) => (
    <Menu.Item>
        {({ active }) => (
            <Link
                {...props}
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}>
                {children}
            </Link>
        )}
    </Menu.Item>
)

/**
 * DropdownButton component.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the dropdown button.
 * @returns {JSX.Element} The rendered component.
 */
export const DropdownButton = ({ children, ...props }) => (
    <Menu.Item>
        {({ active }) => (
            <button
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}
                {...props}>
                {children}
            </button>
        )}
    </Menu.Item>
)

export default DropdownLink
