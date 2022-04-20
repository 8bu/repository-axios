# @8bu/axios

[![NPM version](https://img.shields.io/npm/v/@8bu/axios?color=a1b858&label=)](https://www.npmjs.com/package/@8bu/axios)

## Usage

```typescript
import { createApiClient, createRepository } from '@8bu/axios'

const BASE_URL = 'https://622f7a673ff58f023c21c7fb.mockapi.io'

// If you want to use axios instance without wrapper
const client = createApiClient(BASE_URL)

// If you want to use wrapper with built-in param serializer & bigint parser
const coreApi =  createRepository(BASE_URL)
const users = (await coreApi.GET<User[]>('/users')).data

```

## License

[MIT](./LICENSE) License © 2022 [8bu](https://github.com/8bu)
