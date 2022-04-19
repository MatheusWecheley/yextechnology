import Api from './api';

const BarberService = {
    register: (params) => Api.post('/admin', params),
}

export default BarberService;