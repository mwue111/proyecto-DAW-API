//funciones para tareas específicas

//1. Función para formatear el JSON que llega de la base de datos
export function formatJson (cosa, tipo){
    let data={};

    switch (tipo) {
        case 'tienda':
            //console.log('cosa en helper: ', cosa);
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

function formatProduct(producto){
    //const data = producto.map
}

function formatJsonTienda (tiendas){
    //console.log('tiendas en helper: ', tiendas);
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
            deleted: item.deleted,
            updated_at: item.updated_at
        }
    })
    return data;
}

function formatJsonDireccion (address){
    return address.road_type + " " + address.name + " " + address.number + ", " + address.zip_code + " " + address.town.name + " (" + address.town.state.name.toUpperCase() + ")";
}

function formatJsonHorario (schedules){
    let horario = '';
    schedules.map((item) => {
        horario += formatJsonDia(item.day_of_week) + ": " + item.time_slot.open_time + " - " + item.time_slot.closed_time + " \n";
    })
    return horario;
}
function formatJsonDia(day){
    let dia="";
    switch (day) {
        case 1:
            dia="Lunes";
            break;
        case 2:
            dia="Martes";
            break;
        case 3:
            dia="Miércoles";
            break;
        case 4:
            dia="Jueves";
            break;
        case 5:
            dia="Viernes";
            break;
        case 6:
            dia="Sábado";
            break;
        case 7:
            dia="Domingo";
            break;
        default:
            break;
    }
    return dia;
}

//2. Función para sustituir sólo los campos cambiados y mandarlos a la BD
export function changedJson(oldData, newData){
    let changed = {};

    Object.keys(oldData).map(item => {
        if(!Array.isArray(oldData[item])){
            if(typeof(oldData[item]) === 'object'){ //address
                Object.keys(oldData[item]).map(subItem => {
                    if(oldData[item][subItem] !== newData[item][subItem] && subItem !== 'town'){  //store[address][name, ...] //here
                        if(!changed[item]){
                            changed[item] = {};
                        }
                        changed[item][subItem] = newData[item][subItem];
                    }
                })
            }
            else{
                if(oldData[item] !== newData[item]){
                    changed[item] = newData[item];
                }
            }
        }
    })

    changed = headersDB(changed);

    return changed;

}

function headersDB(oldHeaders){
    Object.keys(oldHeaders).map(item => {
        switch(item){
            case 'nombre': oldHeaders['name'] = oldHeaders[item]; delete oldHeaders[item]; break;
            case 'telefono1': oldHeaders['telephone1'] = oldHeaders[item]; delete oldHeaders[item]; break;
            case 'telefono2': oldHeaders['telephone2'] = oldHeaders[item]; delete oldHeaders[item]; break;
            case 'descripcion': oldHeaders['description'] = oldHeaders[item]; delete oldHeaders[item]; break;
        }});
    return oldHeaders;
}

export function objectProfoundCopy(object){
    return JSON.parse(JSON.stringify(object));
}
