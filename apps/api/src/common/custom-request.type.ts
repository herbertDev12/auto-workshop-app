import { Request } from 'express';

type CustomRequestInfo = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

export type CustomRequest = (Request & CustomRequestInfo) | CustomRequestInfo;
