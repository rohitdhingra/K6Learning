import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: '2m', target: 10000 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: '1m', target: 0 }
 ],
};

export default () => {
  const urlRes = http.get('https://test-api.k6.io');
  sleep(1);
};