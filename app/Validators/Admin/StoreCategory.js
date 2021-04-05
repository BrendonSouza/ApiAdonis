'use strict'

class AdminStoreCategory {
  get rules() {
    return {
      title: 'required',
      description: 'description'
    }
  }
  get messages() {
    return {
      'title.required': 'O nome é obrigatório'
    }
  }
}

module.exports = AdminStoreCategory
