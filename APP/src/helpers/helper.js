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
            user_id: item.user_id,
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
    // console.log('oldData: ', oldData);
    // console.log('newData: ', newData);
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

                        else{   //si subItem ES town:
                            Object.keys(oldData[item][subItem]).map(infraItem => {
                                if(oldData[item][subItem][infraItem] !== newData[item][subItem][infraItem] && infraItem !== 'state'){
                                    //console.log('3. Objetos de oldData[item][subItem]: ', oldData[item][subItem][infraItem]);

                                    if(!changed[item]){                 //crear primero [item]...
                                        changed[item] = {};
                                    }

                                    if(!changed[item]['town_id']){      //... y luego town_id
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
                    //newData[item] = newData[item]['id'];// si se descomenta, quitar la línea 151 en tableAdmin
                    changed[item] = newData[item];
                }
                else if(oldData[item] !== newData[item]){
                        changed[item] = newData[item];
                }
            }
        }
        else{
            //revisar tags: aparecen como cambios aunque no se hayan tocado
            if(item === 'tags' && oldData[item] !== newData[item]){
                changed[item] = newData[item];
            }

            // console.log('item: ', item);
            // console.log('newData[item]: ', newData[item]);
            // console.log('oldData[item]: ', oldData[item]);
        }
    })

    changed = headersDB(changed);

    console.log('changed: ', changed);
    return changed;
}

export function headersDB(oldHeaders){
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

///////////////////////////////////////////
// PRODUCTO
///////////////////////////////////////////
function formatJsonProducto (productos){
    const data = productos.map((item) => {
        //console.log('item en helper: ', item)
        return {
            id: item.id,
            nombre: item.name,
            descripcion: item.description,
            tienda: item.stores,
            deleted: item.deleted,
            marca: item.brand.name,
            categoria: item.category.name,
            tags: item.tags,
            imagenes: item.product_img,

        }
    })
    //console.log('data: ', data)
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
