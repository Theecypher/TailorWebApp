import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import { useState, type ChangeEvent, type FormEvent } from 'react';

type UserFormData = {
  name: string;
  email: string;
};

type UserFormDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
};

export default function UserFormDialog({
  open,
  onClose,
  onSubmit,
}: UserFormDialogProps) {
  const [form, setForm] = useState<UserFormData>({
    name: '',
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>User Form</DialogTitle>

      <form onSubmit={handleSubmit}>
      <h1 className='flex self flex- self- flex-col sel self justify-self-end'>hello</h1>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
