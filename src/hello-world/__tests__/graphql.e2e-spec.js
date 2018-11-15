import request from 'supertest';

import api from '~/api';

describe('Hello World', () => {
  afterEach(async () => {
    await api.close();
  });

  it('should get a hello world', async () => {
    const { statusCode, text } = await request(api)
      .post('/__/graphql')
      .send({ query: 'query { helloWorld }' });

    expect(statusCode).toBe(200);
    expect(text).toBe('Hello, World!');
  });
});
