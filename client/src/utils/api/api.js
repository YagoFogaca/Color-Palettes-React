import axios from 'axios';

axios.defaults.baseURL = 'https://color-palettes-api.herokuapp.com';

export class api {
  static async getAllPalettes() {
    try {
      const results = await axios.get('/palette/palettes');
      return results.data;
    } catch (err) {
      console.log(err);
    }
  }
}
