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
    let horario = schedule == [] ? schedule : [
      {
        "id": 1,
        "day_of_week": 1,
        "time_slot_id": 1,
        "created_at": null,
        "updated_at": null,
        "pivot": {
            "store_id": 2,
            "schedule_id": 1
        },
        "time_slot": {
            "id": 1,
            "open_time": "10:00:00",
            "closed_time": "14:30:00",
            "created_at": null,
            "updated_at": null
        }
    },
      {
          "id": 2,
          "day_of_week": 1,
          "time_slot_id": 3,
          "created_at": null,
          "updated_at": null,
          "pivot": {
              "store_id": 2,
              "schedule_id": 2
          },
          "time_slot": {
              "id": 3,
              "open_time": "15:30:00",
              "closed_time": "20:30:00",
              "created_at": null,
              "updated_at": null
          }
      },
      {
          "id": 4,
          "day_of_week": 2,
          "time_slot_id": 3,
          "created_at": null,
          "updated_at": null,
          "pivot": {
              "store_id": 2,
              "schedule_id": 4
          },
          "time_slot": {
              "id": 3,
              "open_time": "8:30:00",
              "closed_time": "20:30:00",
              "created_at": null,
              "updated_at": null
          }
      },
      {
          "id": 1,
          "day_of_week": 3,
          "time_slot_id": 3,
          "created_at": null,
          "updated_at": null,
          "pivot": {
              "store_id": 2,
              "schedule_id": 1
          },
          "time_slot": {
              "id": 1,
              "open_time": "8:00:00",
              "closed_time": "20:30:00",
              "created_at": null,
              "updated_at": null
          }
      },
      {
        "id": 1,
        "day_of_week": 4,
        "time_slot_id": 3,
        "created_at": null,
        "updated_at": null,
        "pivot": {
            "store_id": 2,
            "schedule_id": 1
        },
        "time_slot": {
            "id": 1,
            "open_time": "8:00:00",
            "closed_time": "14:30:00",
            "created_at": null,
            "updated_at": null
        }
    },
    {
      "id": 1,
      "day_of_week": 5,
      "time_slot_id": 3,
      "created_at": null,
      "updated_at": null,
      "pivot": {
          "store_id": 2,
          "schedule_id": 1
      },
      "time_slot": {
          "id": 1,
          "open_time": "8:00:00",
          "closed_time": "15:00:00",
          "created_at": null,
          "updated_at": null
      }
  }
  ];
  return (
    <div className="card flex justify-content-center">
      <i className='pi pi-calendar mr-2' style={{ color: 'slateblue' }}></i>
      <div onClick={(e) => op.current.toggle(e)}>
        Ahora: {formatJsonHorarioDia(horario)}
        <i className="pi pi-angle-down" style={{ color: 'slateblue' }}></i>
      </div>
      <OverlayPanel ref={op}>
        {formatJsonHorario(horario).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </OverlayPanel>
    </div>
  );
}

export default StoreSchedule
