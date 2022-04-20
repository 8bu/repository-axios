import { describe, expect, it } from 'vitest'
import { createRepository } from '../src'

describe('Axios repository', () => {
  const coreApi = createRepository('https://622f7a673ff58f023c21c7fb.mockapi.io')

  it('GET', async() => {
    const users = (await coreApi.GET<any[]>('/users')).data
    expect(users).toBeInstanceOf(Array)
    expect(users.length).toBeGreaterThanOrEqual(30)
  })
})
