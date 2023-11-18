import request from '../utils/request';

export function mathpixText(data: any) {
  return request({
    url: 'https://api.mathpix.com/v3/text',
    method: 'post',
    data: data,
  });
}
