import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:9191/api/osm'
 });
