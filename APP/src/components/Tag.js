import React from 'react'
import { getTagColor } from '@/helpers/helper';

/**
 * Tag component.
 * Renders a tag with a corresponding color based on the provided tag value.
 * @param {object} props - The component props.
 * @param {string} props.tag - The tag value.
 * @returns {JSX.Element} The rendered Tag component.
 */
function Tag({tag}) {
  const color = getTagColor(tag);
  return (
    <div className={`${color} text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full m-1`}>
        {tag}
        <i className="pi pi-tag vertical-align-middle mr-2"></i>
    </div>
  )
}

export default Tag
