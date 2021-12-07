import { SERVER_URL } from 'config/config';
import { fetchWrapper } from 'helpers';

export const booksService = {
    getAll,
};

function getAll() {
    return fetchWrapper.get(SERVER_URL);
}