import test from 'ava'
import sinon from 'sinon'
import { push } from 'connected-react-router'
import { type as batchType } from 'redux-batch-middleware'

import { routerMiddleware } from '../src'

test.beforeEach(t => {
  t.context.history = {
    push: sinon.fake()
  }

  t.context.next = sinon.fake()
})

test('pass actions throwght', async t => {
  const action = {
    type: 'WRONG_ACTION'
  }

  routerMiddleware(t.context.history)(null)(t.context.next)(action)

  t.true(t.context.history.push.notCalled)
  t.true(t.context.next.calledOnce)
  t.deepEqual(t.context.next.firstCall.args, [action])
})

test('call history method', async t => {
  const action = push('/hello')

  routerMiddleware(t.context.history)(null)(t.context.next)(action)

  t.true(t.context.history.push.calledOnce)
  t.deepEqual(t.context.history.push.firstCall.args, ['/hello'])
  t.true(t.context.next.calledOnce)
  t.deepEqual(t.context.next.firstCall.args, [action])
})

test('call history in a batch', async t => {
  const action = {
    type: batchType,
    payload: [push('/hello')]
  }

  routerMiddleware(t.context.history)(null)(t.context.next)(action)

  t.true(t.context.history.push.calledOnce)
  t.deepEqual(t.context.history.push.firstCall.args, ['/hello'])
  t.true(t.context.next.calledOnce)
  t.deepEqual(t.context.next.firstCall.args, [action])
})
