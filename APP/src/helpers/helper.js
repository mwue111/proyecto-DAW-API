//funciones para tareas específicas

//1. Función para formatear el JSON que llega de la base de datos
export function formatJson (cosa, tipo){
    let data={};

    switch (tipo) {
        case 'tienda':
            data=formatJsonTienda(cosa);
            break;
        case 'producto':
            data=formatJsonProducto(cosa)
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
            direccion: item.address != null ?formatJsonDireccion(item.address):"no hay dirección",
            telefono1: item.telephone1,
            telefono2: item.telephone2,
            email: item.email,
            propietario: item.owner.user.username,
            user_id: item.user_id,
            horario: formatJsonHorarioCadena(item.schedules),
            descripcion: item.description,
            address: item.address,
            schedules: item.schedules,
            deleted: item.deleted,
            updated_at: item.updated_at
        }
    })
    return data;
}

export function formatJsonDireccion (address){
    if(address == null) return "no hay dirección";
    return address.road_type + " " + address.name + " " + address.number + ", " + address.zip_code + " " + address.town.name + " (" + address.town.state.name.toUpperCase() + ")";
}

export function formatJsonHorario (schedules){
    let horario = [];
    if(schedules == null) return ["no hay horario"];
    schedules.map((item) => {
        horario.push(formatJsonDia(item.day_of_week) + ": " + item.time_slot.open_time + " - " + item.time_slot.closed_time + " \n");
    })
    return horario;
}

export function formatJsonHorarioCadena (schedules){
    let horario = '';
    schedules.map((item) => {
        horario+=formatJsonDia(item.day_of_week) + ": " + item.time_slot.open_time + " - " + item.time_slot.closed_time + " \n";
    })
    return horario;
}

export function formatJsonHorarioDia (schedules){
    if(schedules == null) return "no hay horario";
    let horario='Cerrado';
    let schedule=schedules?.filter((item) => {
        if(item.day_of_week === (new Date().getDay())){
            return item;
        }
    })
    schedule=schedule[0];
    if(schedule)
        horario = formatJsonDia(schedule.day_of_week) + ": " + schedule.time_slot.open_time + " - " + schedule.time_slot.closed_time + " \n";
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
    console.log('oldData: ', oldData);
    console.log('newData: ', newData);

    Object.keys(oldData).map(item => {
        if(!Array.isArray(oldData[item])){
            if(typeof(oldData[item]) === 'object'){
                Object.keys(oldData[item]).map(subItem => {
                    if(oldData[item][subItem] !== newData[item][subItem]){

                        if(subItem !== 'town'){

                            if(!changed[item]){
                                changed[item] = {};
                            }

                            changed[item][subItem] = newData[item][subItem];
                        }

                        else{
                            Object.keys(oldData[item][subItem]).map(infraItem => {
                                if(oldData[item][subItem][infraItem] !== newData[item][subItem][infraItem] && infraItem !== 'state'){

                                    if(!changed[item]){
                                        changed[item] = {};
                                    }

                                    if(!changed[item]['town_id']){
                                        changed[item]['town_id'] = {};
                                    }

                                    changed[item]['town_id'] = newData[item][subItem]['id'];

                                }
                            })
                        }

                    }
                })
            }
            else{
                if(item === 'user_id' && oldData[item] !== newData[item]){
                    changed[item] = newData[item];
                }
                else if(oldData[item] !== newData[item]){
                    changed[item] = newData[item];
                }
            }
        }
        else{
            // console.log('oldData[item] en else: ', oldData[item]);
            if(item === 'tags'){

                let oldTagsId = [];

                for(let i = 0; i < oldData[item].length; i++){
                    oldTagsId.push(oldData[item][i].id);
                }

                if(oldTagsId.toString() !== newData[item].toString()){
                    changed[item] = newData[item];
                }
            }

            if(item === 'product_img' && JSON.stringify(oldData[item]) !== JSON.stringify(newData[item])){
                changed[item] = newData[item];
            }

        }
    })

    changed = headersDB(changed);
    return changed;
}

export function headersDB(oldHeaders){
    Object.keys(oldHeaders).map(item => {
        switch(item){
            case 'nombre': oldHeaders['name'] = oldHeaders[item]; delete oldHeaders[item]; break;
            case 'telefono1': oldHeaders['telephone1'] = oldHeaders[item]; delete oldHeaders[item]; break;
            case 'telefono2': oldHeaders['telephone2'] = oldHeaders[item]; delete oldHeaders[item]; break;
            case 'descripcion': oldHeaders['description'] = oldHeaders[item]; delete oldHeaders[item]; break;
            case 'marca': oldHeaders['brand'] = oldHeaders[item]; delete oldHeaders[item]; break;
            case 'categoria': oldHeaders['category'] = oldHeaders[item]; delete oldHeaders[item]; break;
        }});
    return oldHeaders;
}

export function objectProfoundCopy(object){
    return JSON.parse(JSON.stringify(object));
}

///////////////////////////////////////////
// PRODUCTO
///////////////////////////////////////////
function formatJsonProducto (productos){
    const data = productos.map((item) => {
        return {
            id: item.id,
            nombre: item.name,
            descripcion: item.description,
            tienda: item.stores,
            deleted: item.deleted,
            marca: item.brand?.name,
            categoria: item.category.name,
            tags: item.tags,
            product_img: item.product_img,
        }
    })
    return data;
}

///////////////////////////////////////////
// SearchBar
///////////////////////////////////////////

export function productStoreFilterFormatter(productList, storeList){
    let data = [
        {
            label: 'Productos',
            items: []
        },
        {
            label: 'Tiendas',
            items: []
        }

    ];
    if(storeList.length >0 && productList.length >0){
        storeList.map((item) => {
            data[1].items.push({
                label: item.name,
                value: item.name,
                id: item.id,
                type: 'tienda'
            })
        })
        productList.map((item) => {
            data[0].items.push({
                label: item.name,
                value: item.name,
                id: item.id,
                type: 'producto'
            })
        })
    }
    return data;
}

export function getTagColor(tag){
    let color = 'bg-blue-200 text-blue-700';
    switch (tag) {
        case 'Vegano':color = 'bg-green-200 text-green-700';
            break;

        default:
            break;
    }
    return color;
}
