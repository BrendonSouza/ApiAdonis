'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Discount extends Model {
  static get table() {
    return 'coupon_order'
  }
  // primeiro model, depois o nome na tabela coupon order da chave estrangeira
  //por ultimo o nome do campo na tabela order que contem a chave primaria
  order() {
    return this.belongsTo('App/Models/Order', 'order_id', 'id')

  }

  coupon() {
    return this.belongsTo('App/Models/Coupon', 'coupon_id', 'id')
  }
}

module.exports = Discount
