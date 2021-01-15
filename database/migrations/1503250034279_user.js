'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 80)
      table.string('surname',200)
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      //não curti esse relacionamento eu faria o inverso. Colocaria uma fk de user em image e nao pre
      //cisaria de outra migration só para setar o relacionamento
      table.integer('image_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
