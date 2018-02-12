import crypto from 'crypto';
import { TIMESTAMP, API_PRIVATE, API_PUBLIC } from '../../env/global_constants';

export default function apiUrlSuperHeros() {
    let tsprivkeypubkey = TIMESTAMP + API_PRIVATE + API_PUBLIC;
    let hash = crypto.createHash('md5').update(tsprivkeypubkey).digest('hex');
    let apiUrl = 'https://gateway.marvel.com/v1/public/characters?ts=' + TIMESTAMP + '&apikey=' + API_PUBLIC + '&hash=' + hash;

    return apiUrl;
}