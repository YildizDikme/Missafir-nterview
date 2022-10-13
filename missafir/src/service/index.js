import axios from 'axios'
import { toast } from 'react-toastify'

class Service {
    Request = async (config) => {
        this.onStart();

        try {
            const response = await axios({
                ...config,
                baseURL: process.env.REACT_APP_BASE_URL
            })

            const { data } = response
            if (data) {
                this.onSuccess(data)
            }
        } catch (error) {
            console.error(error)
            this.onError(error);
        } finally {
            this.onFinish();
        }
    }

    // lifecycle
    onStart = () => {

    }

    onFinish = () => {

    }

    onSuccess = (data) => {
        toast.success("Cevap başarıyla geldi!")
    }

    onError = (error) => {
        // toast.error(error)
    }
}

export default Service