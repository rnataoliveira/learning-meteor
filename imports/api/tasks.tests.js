import { Meteor } from 'meteor/meteor'
import { Random } from 'meteor/meteor'
import { assert } from 'chai'

import { Tasks } from './tasks.js'

if (Meteor.isServer) {
    describe('Tasks', () => {
        describe('methods', () => {
            const userId = Random.id()
            let taskId

            beforeEach(() => {
                Tasks.remove({})
                taskId = Tasks.insert({
                    text: 'test task',
                    createdAt: new Date(),
                    owner: userId,
                    username: 'tmeasday',
                })
            })

            it('can delete owned task', () => {
                const deleteTask = Meteor.isServer.method_handlers['task.remove']

                const invocation = { userId }

                assert.equal(Tasks.find().count, 0)
            })
        })
    })
}