import MESSCODE from '../constants/MessageCode';
import { toast } from 'react-toastify';

export const showMessage = code => {
    let mes = MESSCODE[code];
    if (code === 200) {
        toast.success(mes, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    } else {
        toast.error(mes, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
}
