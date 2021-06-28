import get from 'lodash/fp/get'

export const handler = async (event) => {
  const obj = {
    message: 'Hello from Lambda! GH-Action, now with TS! - Hello World'
  }
  const response = {
      statusCode: 200,
      body: get('message', obj),
  };
  return response;
};
