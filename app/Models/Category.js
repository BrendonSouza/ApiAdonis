'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  //relacionamentos é só criar um metodo com o nome do model que queremos fazer o relacionamento
  image() {
    return this.belongsTo('App/Models/Image')
  }
  products() {
    return this.belongsToMany('App/Models/Products')
  }
}

module.exports = Category
