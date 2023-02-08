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

function formatProduct(producto){
    //const data = producto.map
}

function formatJsonTienda (tiendas){
    //console.log('tiendas en helper: ', tiendas);
    const data = tiendas.map((item) => {
        return {
            id: item.id,
            nombre: item.name,
            direccion: formatJsonDireccion(item.address), //cambiado de direccion a address para recibir un objeto en TableAdmin
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
        console.log('1. oldData[item]: ', oldData[item]);
        if(!Array.isArray(oldData[item])){
            if(typeof(oldData[item]) === 'object'){ //address
                Object.keys(oldData[item]).map(subItem => {
                    console.log('2. Objetos de oldData[item]: oldData[item][subItem]: ', oldData[item][subItem])
                    if(oldData[item][subItem] !== newData[item][subItem]){  //store[address][name, ...]
                        console.log(typeof(oldData[item][subItem]));
                        //para acceder a town:
                        if(oldData[item][subItem] === 'object'){
                            //no entra
                            console.log('entra');
                            Object.keys(oldData[item][subItem].map(infraItem => {
                                console.log('3. Objetos de oldData[item][subitem]: ', oldData[item][subItem][infraItem])
                                if(oldData[item][subItem][infraItem] !== newData[item][subItem][infraItem]){
                                    //Esto estaba fuera de lo nuevo
                                    if(!changed[item]){
                                        changed[item] = {};
                                    }
                                    changed[item][subItem][infraItem] = newData[item][subItem][infraItem];
                                    //changed[item][subItem] = ...
                                }
                            }))
                        }
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
    console.log('objeto que llega desde edit item: ', object)
    return JSON.parse(JSON.stringify(object));
}

///////////////////////////////////////////
// PRODUCTO
///////////////////////////////////////////
function formatJsonProducto (productos){
    const data = productos.map((item) => {
        console.log(item)
        return {
            id: item.id,
            nombre: item.name,
            descripcion: item.description,
            imágenes: item.images,
            tienda: item.stores,
        }
    })
    console.log(data)
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
