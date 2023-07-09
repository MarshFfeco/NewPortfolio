/* eslint-disable prettier/prettier */
import axios from "axios";

export type Respos = {
  name: string, created: string, description: string, url: string, visibility
  : string, language: string
};

export class Service {
  Response: Respos[] = []
  constructor(private url: string) { }

  async getUser() {
    try {
      const response = await axios.get(this.url);
      for (let i = 0; i < response.data.length; i++) {
        this.Response.push({
          name: response.data[i].name,
          created: Intl.DateTimeFormat('pt-br').format(new Date(response.data[i].created_at)),
          description: response.data[i].description ? response.data[i].description : "nada de descrição",
          visibility: response.data[i].visibility,
          url: response.data[i].html_url,
          language: response.data[i].language
        });
      }

      return this.Response
    } catch (error) {
      // console.error(error);
    }
  }
}
