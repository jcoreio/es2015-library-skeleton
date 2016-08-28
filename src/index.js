// @flow

export function handler(event: Object, context: Object, callback: Function) {
  console.log('Hello from Lambda: ', event)
  callback(undefined, 'Hello from Lambda: ' + JSON.stringify(event))
}
