import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { formatJsonHorario, formatJsonHorarioDia } from '@/helpers/helper';

function StoreSchedule({schedule}) {
    const op = useRef(null);
  return (
    <div className="card flex justify-content-center">
            <h1>Horario: </h1>
            <div onClick={(e) => op.current.toggle(e)} >{formatJsonHorarioDia(schedule)}<i className="pi pi-angle-down" style={{ color: 'slateblue' }}></i> </div>
            <OverlayPanel ref={op}>
                JAJA NO
            </OverlayPanel>
        </div>
  )
}

export default StoreSchedule