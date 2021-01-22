'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  //imagem de destaque
  image() {
    return this.belongsTo('App/Models/Image')
  }
  //galeria de imagens aqui.
  images() {
    return this.belongsToMany('App/Models/Image')
  }
  //relacionamento entre os produtos e as categorias
  categories() {
    return this.belongsToMany('App/Models/Category')
  }

  coupons() {
    return this.belongsToMany('App/Models/Coupon')
  }
}
module.exports = Product
