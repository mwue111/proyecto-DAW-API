import React, { useState, useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import axios from 'axios';

//https://stackoverflow.com/questions/60389073/how-to-upload-files-using-primereact-fileupload-component

function Upload( {item, setProductPic } ) {
    //console.log('oldImages: ', oldImages);
    //console.log('Subida desde la tabla ',table);

    //const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/archivo'; //PUT: archivo.update

    const [newImage, setNewImage] = useState([]);
    const [totalSize, setTotalSize] = useState(0);
    const toast = useRef(null);
    const fileUploadRef = useRef(null);

    useEffect(() => {
        setProductPic(newImage);
    }, [newImage]);

    // const onUpload = () => {
    //     toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    // }

    const onTemplateSelect = (e) => {

        let _totalSize = totalSize;
        const files = Array.from(e.files);

        const fileObjects = files.map((file) =>
            file.objectURL
        );

        setNewImage(prevImage => [...prevImage, ...fileObjects]);

        files.forEach(file => {
            _totalSize += file.size;
        });

        setTotalSize(_totalSize);

    }

/*-------------------------- esto no debería hacerse aquí
    const onTemplateUpload = (e) => {

        let _totalSize = 0;
        const files = Array.from(e.files);

        files.forEach(file => {
            _totalSize += (file.size || 0);
        });

        console.log('newImage: ', newImage);

        for(let i = 0; i < newImage.length; i++){
            uploadFile(newImage[i]);
        }

        setTotalSize(_totalSize);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    const uploadFile = (img) => {

        axios.post(url, {
                'user_id': 7,   //esto debería ser dinámico (que lo gestione el back - no pasarlo)->cookie
                'url': img,
                'type': 'product_imgs',
                'deleted': 0,
                'product_id': item.id
            }, {'Content-Type': 'application/json'});
    }
//------------------------- fin --*/

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    }

    const onTemplateClear = () => {
        setTotalSize(0);
    }

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {/* {uploadButton} */}
                {cancelButton}
                <ProgressBar value={value} displayValueTemplate={() => `${formatedValue} / 1 MB`} style={{ width: '300px', height: '20px', marginLeft: 'auto' }}></ProgressBar>
            </div>
        );
    }

    //Aquí: cambiar el botón rojo de borrar
    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={80} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                    </span>
                </div>
                <div className="flex-auto mr-2">
                    <span>
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>

                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <Tag value={props.formatSize} severity="warning" />

                    <Button type="button" icon="pi pi-times" className="p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
                </div>
            </div>
        )
    }

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image ml-20 p-5" style={{ 'fontSize': '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ 'fontSize': '1.2em', color: 'var(--text-color-secondary)' }} className="my-auto mx-auto ml-3">Arrastra una imagen aquí</span>
            </div>
        )
    }

    const chooseOptions = {
        icon: 'pi pi-fw pi-images',
        iconOnly: true,
        className: 'custom-choose-btn p-button-rounded p-button-outlined ui-button-flat',
        style: {width: '40px'}
    };

    // const uploadOptions = {
    //     icon: 'pi pi-fw pi-cloud-upload',
    //     iconOnly: true,
    //     className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
    //     style: {width: '40px'}
    // };

    const cancelOptions = {
        icon: 'pi pi-fw pi-times',
        iconOnly: true,
        className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
        style: {width: '40px'}
    };

    return (
        <div>
            <Toast ref={toast}></Toast>

            <FileUpload
                ref={fileUploadRef}
                name="upload[]"
                //url={url}
                multiple
                accept="image/*"
                maxFileSize={1000000}

                //onUpload={onTemplateUpload}
                onSelect={onTemplateSelect}

                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                //uploadOptions={uploadOptions}
                cancelOptions={cancelOptions}
            />

        </div>
    )
}

export default Upload
