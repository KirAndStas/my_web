import queryString from 'query-string';

export async function get(url, params) {
    const query = params ? `?${queryString.stringify(params)}` : '';
    const data  = await request({ url, method: 'GET', query });

    return data;
}

async function request({ url, method, query, data }) {
    const resp = await fetch(
        `${url}${query ? query : ''}`,
        {
            method,
            body : method !== 'GET' ? JSON.stringify({ data }) : undefined
        }
    );

    const json = await resp.json();

    return json;
}

