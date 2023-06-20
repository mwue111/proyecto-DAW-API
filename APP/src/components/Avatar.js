import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';

function Avatar( {users, table} ) {

    // const oldAvatar = users.avatar[0];
    // users.files = oldAvatar;


    const [avatar, setAvatar] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // const [hasAvatar, setHasAvatar] = useState(false);

    useEffect(() => {
        // if(users.files){
        //     setHasAvatar(users.files.url);
        //     // console.log('tiene avatar: ', users.files.url);
        // }

        // console.log('Qué se está mandando: ', process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${users.id}`);
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${users.id}`)
            .then(res => {
                setAvatar(res.data.url);
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
            {/* {isLoading ? <ProgressSpinner style={{width: '20%', height: '20%'}} strokeWidth='5' /> :

                <img src={process.env.NEXT_PUBLIC_BACKEND_URL + hasAvatar}
                    alt={`imagen de perfil de ${users.username}`}
                    style={{ width: 86, borderRadius: 15}}
                />
            } */}
        </div>
    )

}

export default Avatar;
