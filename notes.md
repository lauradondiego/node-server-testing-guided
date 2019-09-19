- npm i -D supertest jest
- npx jest --init (creates jest.config.js file) click no for everything and choose node on the terminal
- work in server.spec.js

# testing

# testing a fuction

function fn() { return true}

const result = fn()
check that result is true

# what about an endpoint in an api

make a request to the endpoint: const response = await axios.get(url)

check that the response is what you expect
