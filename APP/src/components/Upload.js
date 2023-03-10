import React, { useState, useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

//https://stackoverflow.com/questions/60389073/how-to-upload-files-using-primereact-fileupload-component

function Upload( {item, table, setProductPic, oldImages} ) {
    //console.log('oldImages: ', oldImages);
    //console.log('Subida desde la tabla ',table);
    const prevImages = [...oldImages];
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/archivo'; //PUT: archivo.update

    const [newImage, setNewImage] = useState([]);
    const [totalSize, setTotalSize] = useState(0);
    const toast = useRef(null);
    const fileUploadRef = useRef(null);

    useEffect(() => {
        setProductPic(newImage);

    }, [newImage]);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    const onTemplateSelect = (e) => {
        console.log('onTemplateSelect');
        const fileUrl = [];
        let _totalSize = totalSize;
        const files = Array.from(e.files);

        files.forEach(file => {
            fileUrl.push(file.objectURL);
            _totalSize += file.size;
            console.log('fileUrl: ', fileUrl);
        });

        setNewImage(fileUrl);

        setTotalSize(_totalSize);
    }

    const onTemplateUpload = (e) => {

        let _totalSize = 0;
        const files = Array.from(e.files);

        files.forEach(file => {
            _totalSize += (file.size || 0);
            console.log('_totalSize: ', _totalSize);
        });

        //Esto no tendría que ser aquí sino al guardar en dialogProduct
        console.log('prevImages: ', prevImages);
        console.log('newImage: ', newImage);

        //Al añadir nuevas imágenes: juntar las imágenes antiguas y las nuevas en un array y mandarlas al padre para que éste las envíe a ProductController -> comprobar que las imágenes que se metan en productos tendrán que meterse en files

        //Otra opción: si el length de productPic en el padre es mayor de 0 es que hay imágenes nuevas

        setTotalSize(_totalSize);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

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
                {uploadButton}
                {cancelButton}
                <ProgressBar value={value} displayValueTemplate={() => `${formatedValue} / 1 MB`} style={{ width: '300px', height: '20px', marginLeft: 'auto' }}></ProgressBar>
            </div>
        );
    }

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
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

    const uploadOptions = {
        icon: 'pi pi-fw pi-cloud-upload',
        iconOnly: true,
        className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
        style: {width: '40px'}
    };

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
                url={url}
                multiple
                accept="image/*"
                maxFileSize={1000000}
                onUpload={onTemplateUpload}
                onSelect={onTemplateSelect}
                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                uploadOptions={uploadOptions}
                cancelOptions={cancelOptions}
            />

        </div>
    )
}

export default Upload
