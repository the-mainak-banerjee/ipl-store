import { useEffect } from 'react'
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts';

export const useToast = () => {
    const { showToast } = useAuth()

    useEffect(() => {
        if(showToast === 'signup'){
          toast.success('Signed Up Succesfully')
        }else if(showToast === 'login'){
          toast.success(`Loggedin Successfully`)
        }
    }, [showToast])
}

