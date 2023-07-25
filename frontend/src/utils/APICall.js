import axios from 'axios';

const GetData = async (URL) => {
  let headers;

  if (localStorage.getItem('token')) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  } else {
    headers = {
      'Content-Type': 'application/json',
    };
  }
  return axios({
    method: 'GET',
    url: `${URL}`,
    headers,
  })
    .then((response) => response)
    .catch((error) =>
      error.code === 'ECONNABORTED' ? (error = { status: 500 }) : error.response
    );
};

const PostData = async (URL, data) => {
  return axios({
    method: 'POST',
    url: `${URL}`,
    data: { ...data },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response)
    .catch((error) =>
      error.code === 'ECONNABORTED' ? (error = { status: 500 }) : error.response
    );
};

const PostDataToken = async (URL, data) => {
  return axios({
    method: 'POST',
    url: `${URL}`,
    data: { ...data },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => response)
    .catch((error) =>
      error.code === 'ECONNABORTED' ? (error = { status: 500 }) : error.response
    );
};

const PatchDataToken = async (URL, data) => {
  return axios({
    method: 'PATCH',
    url: `${URL}`,
    data: { ...data },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => response)
    .catch((error) =>
      error.code === 'ECONNABORTED' ? (error = { status: 500 }) : error.response
    );
};

export { GetData, PostData, PostDataToken, PatchDataToken };
