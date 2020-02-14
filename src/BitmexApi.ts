import axios from 'axios';
import { redUrls } from 'enumerations';
import Utils from 'utils';

class BitmexApi {
  private id: string;
  private secret: string;
  private url: string;

  constructor({ id, secret, mode }: apiData) {
    this.id = id;
    this.secret = secret;
    this.url = mode === 'testnet' ? redUrls.testnet : redUrls.mainnet;
  }

  apiKeys(ascResult: boolean = true) {
    const expires = Utils.Time.current().utc + 60;

    return axios.get(`${this.url}?reverse`, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'api-expires': expires,
        'api-key': this.id,
        'api-signature': Utils.Security.signature(this.secret, 'GET', expires)
      }
    });
  }
}

export default BitmexApi;
