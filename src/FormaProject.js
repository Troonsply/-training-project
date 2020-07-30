import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    maxWidth: '100vw',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
      };    

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
            Добавить Проект
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Новый Проект</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Наименование Проекта"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="organization"
              label="Организация Проекта"
              type="text"
              fullWidth
            />
            <FormControl className={classes.formControl} fullWidth>
                <InputLabel id="demo-mutiple-name-label">Участники Проекта</InputLabel>
                <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input />}
                MenuProps={MenuProps}
                >
                {names.map((name) => (
                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <TextField
              margin="dense"
              id="dateProject"
              label="Дата Проекта"
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