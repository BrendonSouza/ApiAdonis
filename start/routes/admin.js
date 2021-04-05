'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.group(() => {
  //categories resource
  Route.resource('categories', 'CategoryController').apiOnly().validator(new Map([
    [['categories.store'], ['Admin/StoreCategory']],
    [['categories.update'], ['Admin/StoreCategory']]
  ]))
  Route.resource('products', 'ProductController')



}).prefix('v1/admin').namespace('Admin')