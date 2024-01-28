import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShare = () => {
    setOpen(false);
    props.updateCurView(9);
  };

  return (
    <React.Fragment>
      <Button style={{ color: "#00e676" , borderColor: '#00e676', fontWeight: 'bold', borderWidth: '2px'}} variant="outlined" onClick={handleClickOpen}>
        SHARE YOUR PROGRESS
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle style={{ color: "#00e676" , fontWeight: 'bold', fontSize: '40px'}}>Job-related</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: '10px' ,color: "gray", fontSize: '15px'}}>
            6 weeks staying habitual for job-related
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="content"
            label="Share your thoughts:"
            variant ="outlined"
            multiline
            fullWidth
            color="success"
            style={{  height: '100px', width: '100%' }}
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#00e676" , fontWeight: 'bold', fontSize: '15px'}} >Cancel</Button>
          <Button onClick={handleShare} type="submit" style={{ color: "#00e676" , fontWeight: 'bold', fontSize: '15px'}}>SHARE</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}