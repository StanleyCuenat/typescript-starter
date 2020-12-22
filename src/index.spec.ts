import { exampleFunction } from './index'

describe('Example function test', () => {
    test('should return "hello world"', () => {
        expect(exampleFunction('hello')).toEqual('hello world')
    })
})
