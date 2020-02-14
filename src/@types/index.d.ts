type data = {
  verb: string;
  path: string;
  expires: number;
  body?: object;
};

type apiData = {
  id: string;
  secret: string;
  mode: redMode;
};

type redMode = 'testnet' | 'mainnet';
