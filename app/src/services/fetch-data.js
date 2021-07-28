import axios from 'axios';

const API_BASE = 'http://localhost:8080/';

const typeBuilder = {
    directory: 'dir',
    file: 'file',
}

async function fetchData(type, path) {
    
    const { data } = await axios.get(`${API_BASE}${typeBuilder[type]}${path}`);

    return data;
}

export default fetchData; 