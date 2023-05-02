import React, { useState, useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

function Upload( { setProductPic } ) {

    const [newImage, setNewImage] = useState([]);
    const [data, setData] = useState({});
    const [totalSize, setTotalSize] = useState(0);
    const toast = useRef(null);
    const fileUploadRef = useRef(null);

    useEffect(() => {
        setProductPic(newImage);
        // console.log('data en Upload: ', data);
        console.log('newImage en Upload: ', newImage);
    }, [newImage, data]);

    const onTemplateSelect = (e) => {

        //lo que estaba:
        let _totalSize = totalSize;
        const files = Array.from(e.files);
        // console.log('files: ', files);

        const fileObjects = [];

        files.map((file) => {
            fileObjects.push(file);
        });

        // console.log('fileObjects: ', fileObjects)
        setNewImage(prevImage => [{...prevImage, ...fileObjects}]);

        // puede que haya que cambiar el setter por algo como esto: setNewImage(prevImage => [...prevImage, fileObjects]);

        /* Formato de fileObjects:
        Al seleccionar un elemento:
        {"objectURL": "blob:http://localhost:3000/a5884298-8260-4841-a774-6e1eaaecb471"}

        Al hacer selección múltiple:
        [
            {"objectURL": "blob:http://localhost:3000/a5884298-8260-4841-a774-6e1eaaecb471"},
            {"objectURL": "blob:http://localhost:3000/e075731a-75d0-49f9-a6c4-40672500ee1a"},
        ]
        */

        files.forEach(file => {
            _totalSize += file.size;
        });

        setTotalSize(_totalSize);

        //No permite selección múltiple simultánea
        //setNewImage(prevImage => [{...prevImage, file: e.files[0]}]);
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
                {cancelButton}
                <ProgressBar value={value} displayValueTemplate={() => `${formatedValue} / 1 MB`} style={{ width: '300px', height: '20px', marginLeft: 'auto' }}></ProgressBar>
            </div>
        );
    }

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
                name="upload"
                multiple
                accept="image/*"
                maxFileSize={1000000}
                onSelect={onTemplateSelect}
                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                cancelOptions={cancelOptions}
            />

        </div>
    )
}

export default Upload
