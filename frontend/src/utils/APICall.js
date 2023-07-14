import axios from 'axios';

const PostData = async (URL, data) => {
  return axios({
    method: 'post',
    url: `${URL}`,
    data: { ...data },
    timeout: 1000,
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
    method: 'post',
    url: `${URL}`,
    data: { ...data },
    timeout: 1000,
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


export { PostData, PostDataToken };
