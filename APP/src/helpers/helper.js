//funciones para tareas específicas

//1. Función para formatear el JSON que llega de la base de datos
export function formatJson (cosa, tipo){
    let data={};

    switch (tipo) {
        case 'tienda':
            data=formatJsonTienda(cosa);
            break;
        case 'producto': 
            //data=formatProducto(cosa)
            break;
        case 'usuario':
            //data=formatUsuario(cosa)
            break;
        default:
            break;
    }

    return data
}

function formatJsonTienda (tiendas){
    const data = tiendas.map((item) => {
        return {
            id: item.id,
            nombre: item.name,
            direccion: formatJsonDireccion(item.address),
            telefono1: item.telephone1,
            telefono2: item.telephone2,
            email: item.email,
            propietario: item.owner.user.username,
            horario: formatJsonHorario(item.schedules),
            descripcion: item.description,
            address: item.address,
            schedules: item.schedules,

        }
    })
    return data;
}

function formatJsonDireccion (address){
    return address.road_type + " " + address.name + " " + address.number + ", " + address.zip_code + " " + address.town.name + " (" + address.town.state.name.toUpperCase() + ")";
}

function formatJsonHorario (schedules){
    let horario = schedules.map((item) => {
        return item.day_of_week + ": " + item.pivot + " - " + item.closing_time;
    })
    console.log(schedules)
    return horario;
}