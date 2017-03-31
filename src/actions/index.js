import axios from 'axios';

const ROOT_URL = 'http://hipsterjesus.com/api?paras=';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = (num) => {
  const url = `${ROOT_URL}${num}&html=true`
  const request = axios.get(url);

  return {
    type: FETCH_DATA,
    payload: request
  }
}


// http://hipsterjesus.com/api?paras=${this.state.paras}&html=${this.state.html}
