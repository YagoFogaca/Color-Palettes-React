import axios from 'axios';

axios.defaults.baseURL = 'https://color-palettes-api.herokuapp.com';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

export class api {
  static async getAllPalettes() {
    try {
      const results = await axios.get('/palette/palettes');
      return results.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async updatePalette(palette) {
    try {
      const paletteUpdated = await axios.patch(
        '/palette/update-palette/' + palette.id,
        palette,
      );
      return paletteUpdated;
    } catch (err) {
      console.log(err);
    }
  }

  static async login(user) {
    try {
      const userLogin = await axios.post('/user/login', user);
      return userLogin;
    } catch (err) {
      console.log(err);
    }
  }

  static async updateUser(user) {
    try {
      const userUpdated = await axios.patch(
        '/palette/update-palette/' + user.id,
        user,
      );

      return userUpdated;
    } catch (err) {
      console.log(err);
    }
  }
}
