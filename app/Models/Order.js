'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

  static boot() {
    /*
      Fazendo desse jeito, Como addHook não está referenciado na classe Order, pegamos o metodo por herança da classe Model
    */
    super.boot()
    this.addHook('afterFind', 'OrderHook.updateValues')
    this.addHook('afterPaginate', 'OrderHook.updateCollectionValues')
  }

  items() {
    return this.hasMany('App/Models/OrderItem')
  }
  coupons() {
    return this.hasMany('App/Models/Coupon')
  }
  discounts() {
    return this.hasMany('App/Models/Discount')
  }
  user() {
    return this.hasMany('App/Models/User', 'user_id', 'id')
  }
}

module.exports = Order
