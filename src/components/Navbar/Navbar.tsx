import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { ImagesUploader } from './ImagesUploader';

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <ImagesUploader />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mis im&aacute;genes favoritas
          </Typography>
          <IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
            <UploadFileIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
