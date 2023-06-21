import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { formatJsonHorario, formatJsonHorarioDia } from '@/helpers/helper';

/**
 * StoreSchedule component.
 * Renders the store schedule with an overlay panel to display the complete schedule.
 * @param {object} props - The component props.
 * @param {object[]} props.schedule - The store schedule data.
 * @returns {JSX.Element} The rendered StoreSchedule component.
 */
function StoreSchedule({schedule}) {
    const op = useRef(null);
  return (
    <div className="card flex justify-content-center">
            <i className='pi pi-calendar mr-2' style={{ color: 'slateblue' }}></i>
            <div onClick={(e) => op.current.toggle(e)} >Ahora: {formatJsonHorarioDia(schedule)}<i className="pi pi-angle-down" style={{ color: 'slateblue' }}></i> </div>
            <OverlayPanel ref={op}>
              {formatJsonHorario(schedule).map((item) => {
                return <div>{item}</div>;
              })}
            </OverlayPanel>
        </div>
  )
}

export default StoreSchedule
