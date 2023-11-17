// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {}

export default function main() {
  let response

  group('page_1 - https://svelte-library-auth-3-0.vercel.app/', function () {
    response = http.get('https://svelte-library-auth-3-0.vercel.app/favicon.png', {
      headers: {
        referer: 'https://svelte-library-auth-3-0.vercel.app/auth/login',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://node-library-spg2.onrender.com/api/v1/auth/login',
      '{"email":"emma@example.com","password":"5Kgtbu30"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'content-type': 'application/json',
          referer: 'https://svelte-library-auth-3-0.vercel.app/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options('https://node-library-spg2.onrender.com/api/v1/auth/login', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'content-type',
        'access-control-request-method': 'POST',
        origin: 'https://svelte-library-auth-3-0.vercel.app',
        'sec-fetch-mode': 'cors',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://node-library-spg2.onrender.com/api/v1/books', {
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTU2MjUxNzJlMDRkMWJlMzU5NjUzM2IiLCJmaXJzdE5hbWUiOiJFbW1hbnVlbCIsImxhc3ROYW1lIjoiRXhhbXBsZSIsImlhdCI6MTcwMDE0NDcyOSwiZXhwIjoxNzAxODcyNzI5fQ.vmqpYOvsedtXPrbyf1KTYabjiFUmqvnGVe6SFx7dYs0',
        referer: 'https://svelte-library-auth-3-0.vercel.app/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.options('https://node-library-spg2.onrender.com/api/v1/books', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://svelte-library-auth-3-0.vercel.app',
        'sec-fetch-mode': 'cors',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    response = http.post(
      'https://node-library-spg2.onrender.com/api/v1/books',
      '{"title":"In the chest of a woman","content":"There live a woman called Sister Ataa. She had a 20year old son called Trice","genre":"african culture"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTU2MjUxNzJlMDRkMWJlMzU5NjUzM2IiLCJmaXJzdE5hbWUiOiJFbW1hbnVlbCIsImxhc3ROYW1lIjoiRXhhbXBsZSIsImlhdCI6MTcwMDE0NDcyOSwiZXhwIjoxNzAxODcyNzI5fQ.vmqpYOvsedtXPrbyf1KTYabjiFUmqvnGVe6SFx7dYs0',
          'content-type': 'application/json',
          referer: 'https://svelte-library-auth-3-0.vercel.app/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options('https://node-library-spg2.onrender.com/api/v1/books', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://svelte-library-auth-3-0.vercel.app',
        'sec-fetch-mode': 'cors',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://node-library-spg2.onrender.com/api/v1/books', {
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTU2MjUxNzJlMDRkMWJlMzU5NjUzM2IiLCJmaXJzdE5hbWUiOiJFbW1hbnVlbCIsImxhc3ROYW1lIjoiRXhhbXBsZSIsImlhdCI6MTcwMDE0NDcyOSwiZXhwIjoxNzAxODcyNzI5fQ.vmqpYOvsedtXPrbyf1KTYabjiFUmqvnGVe6SFx7dYs0',
        referer: 'https://svelte-library-auth-3-0.vercel.app/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })

  // Automatically added sleep
  sleep(1)
}

export function handleSummary(data) {
  return {
    "AddBook.html": htmlReport(data),
  };
}