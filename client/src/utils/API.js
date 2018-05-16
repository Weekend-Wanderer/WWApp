import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password, zipcode, lat, lng) => {
    return axios.post('api/signup', {username: username, email: email, password: password, zipcode: zipcode, lat: lat, lng: lng});
  }
};
