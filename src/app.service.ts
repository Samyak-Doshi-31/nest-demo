import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  postHello(): string {
    return 'Hi World';
  }
  patchHello(): string {
    return 'Hi Patch';
  }
  putHello(): string {
    return 'Hi Put';
  }
  deleteHello(): string {
    return 'Hi Delete';
  }

}
