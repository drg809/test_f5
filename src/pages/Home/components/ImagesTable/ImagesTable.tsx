import React, { useEffect, useState } from 'react';

import { IconButton, TextField, Button } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from '@/models';
import { removeImage, editImage } from '@/redux/states';
import { AppStore } from '@/redux/store';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export interface ImagesTableInterface {}

const ImagesTable: React.FC<ImagesTableInterface> = () => {
  const pageSize = 5;
  const dispatch = useDispatch();
  const [edit, setEdit] = useState<number>();
  const [title, setTitle] = useState<string>('');

  const stateImages = useSelector((store: AppStore) => store.images);

  const handleOnClickEdit = (id: number) => {
    setEdit(id)
  };

  const handleOnClickSave = () => {
    dispatch(editImage({id: edit, title}))
    setEdit(-1)
  };

  const handleOnClickRemove = (image: Image) => {
    dispatch(removeImage(image));
  };

  const colums = [
    {
      field: '#',
      headerName: '#',
      type: 'actions',
      sortable: false,
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => <>{stateImages.indexOf(params.row) + 1}</>
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {edit === params.row.id ? (
            <div>
              <TextField id={(stateImages.indexOf(params.row) + 1).toString()} autoFocus={edit === params.row.id} value={title ? title : params.value} onChange={e => setTitle(e.target.value)} />
              <Button onClick={handleOnClickSave}>Guadar</Button>
            </div>
          ) : params.value }
        </>
      )
    },
    {
      field: 'image',
      headerName: 'Image',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {<img width='175px' height='110px' src={params.value} />}
        </>
      )
    },
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: 'Options',
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton aria-label="favorites" component="label" onClick={() => handleOnClickEdit(params.row.id)}>
              <BorderColorIcon />
            </IconButton>
          }
          {
            <IconButton aria-label="favorites" component="label" onClick={() => handleOnClickRemove(params.row)}>
              <DeleteIcon />
            </IconButton>
          }
        </>
      )
    }
  ];

  return (
    <DataGrid
      rows={stateImages}
      columns={colums}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
      getRowHeight={() => 'auto'}
    />
  );
};

export default ImagesTable;
