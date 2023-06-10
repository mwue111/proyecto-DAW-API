import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';

function Avatar( {users, table} ) {
    // console.log('users en avatar: ', users);

    const [avatar, setAvatar] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${users.id}`)
            .then(res => {
                if(res.data.length){
                    res.data.map((item) => {
                        console.log('item: ',item)
                        setAvatar(item.url);
                    })
                }
                else{
                    // console.log('El usuario no tiene avatar');
                }
            })
            .catch(err => console.log('Ha ocurrido un error: ', err))
            .finally(() => {
                setIsLoading(false);
            })
    })

    if(isLoading){
        return <ProgressSpinner style={{width: '20%', height: '20%'}} strokeWidth='5' />
    }

    return(
        <div>
            <img src={process.env.NEXT_PUBLIC_BACKEND_URL + avatar}
                alt={`imagen de perfil de ${users.username}`}
                style={{ width: 86, borderRadius: 15}}
            />
        </div>
    )

}

export default Avatar;
