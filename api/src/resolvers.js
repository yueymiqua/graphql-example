/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your schema
 */

module.exports = {
  Query: {
    pets(parent, {input}, ctx, info) {
      return ctx.models.Pet.findMany(input);
    },
    pet(parent, {input}, ctx, info) {
      console.log('Query => pet')
      return ctx.models.Pet.findOne(input);
    },
    users(parent, {input}, ctx, info) {
      return ctx.models.User.findOne(input);
    }
  },
  Mutation: {
    newPet(parent, {input}, ctx) {
      const pet = ctx.models.Pet.create(input)
      return pet;
    }
  },
  Pet: {
    owner(pet, _, ctx) {
      console.log('PET => owner')
      return ctx.models.User.findOne()
    }
  },
  User: {
    pets(user, _, ctx) {
      console.log('USER => pet')
      return ctx.models.Pet.findMany()
    }
  }
}
