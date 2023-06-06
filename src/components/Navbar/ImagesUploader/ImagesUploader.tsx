import React, { useState, useCallback } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { IconButton, TextField, Button, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useDropzone } from 'react-dropzone'
import { imageToBase64 } from '@/utilities';

export interface ImagesUploaderInterface { }

const ImagesUploader: React.FC<ImagesUploaderInterface> = () => {
  const [image, setImage] = useState<File>();
  const [title, setTitle] = useState<string>('');
  const [preview, setPreview] = useState<string>('');

  const onDrop = useCallback((acceptedFiles: any) => {
    setImage(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleOnClick = async () => {
    await imageToBase64(image)
  }

  return (
    <>
      <DialogTitle>Sube una imagen</DialogTitle>
      <DialogContent>
        {preview != '' && <img className='imageUploader__preview' src={preview} />}
        <TextField fullWidth id='title' label='Título de la imagen'  margin='dense' variant='outlined' onChange={e => setTitle(e.target.value)} />
        <div className='imageUploader__div' {...getRootProps()}>
          <IconButton color='primary' aria-label='favorites' component='label'>
            <UploadFileIcon />
          </IconButton>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Arrastra la imágen aquí ...</p> :
              <p>Arrastra la imagen aquí, o pulsa para seleccionarla</p>
          }
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClick} >Subir</Button>
      </DialogActions>
    </>
  );
};

export default ImagesUploader;
