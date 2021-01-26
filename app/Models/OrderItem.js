'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {
  static get traits() {
    return [App / Models / Traits / NoTimestamps]
  }
  product() {
    return this.belongsTo('App/Models/Products')
  }
  order() {
    return this.belongsTo('App/Models/Orders')
  }
}

module.exports = OrderItem

