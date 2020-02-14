import { createHmac } from 'crypto';

namespace Utils {
  export class Time {
    public static current() {
      const date = new Date();

      const currentTime = {
        unix: Math.round(date.getTime() / 1000),
        utc: date.toISOString()
      };

      return currentTime;
    }
  }

  export class Security {
    public static signature(
      secret: string,
      { verb, path, expires, body = {} }: data
    ): string {
      return createHmac('sha256', secret)
        .update(verb + path + expires.toFixed(0) + JSON.stringify(body))
        .digest('hex');
    }
  }
}

export default Utils;
