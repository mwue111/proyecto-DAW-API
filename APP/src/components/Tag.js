import React from 'react'
import { getTagColor } from '@/helpers/helper';

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