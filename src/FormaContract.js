import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    }

    const handleSave = () => {

    }
    return (
      <div style={{marginLeft:'15px'}}>
        <Button style={{margin:'15px',}} variant="contained"  color="primary" onClick={handleClickOpen}>
            Добавить Договор
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Новый Договор</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="number"
              label="Номер Договора"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="topic"
              label="Предмет"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="organization"
              label="Организация"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="member"
              label="Участники"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="project"
              label="Проект"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="date"
              label="Дата Договора"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions style={{margin:'10px'}}>
            <Button variant="contained" onClick={handleClose} color="primary">
              Закрыть
            </Button>
            <Button variant="contained" onClick={handleSave} color="primary">
              Сохранить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }