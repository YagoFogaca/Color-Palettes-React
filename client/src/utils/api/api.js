import axios from 'axios';

axios.defaults.baseURL = 'https://color-palettes-api.herokuapp.com';

export class api {
  static async getAllPalettes() {
    const results = await axios.get('/palette/palettes');
    return results.data;
    try {
    } catch (err) {
      console.log(err);
    }
  }
}
