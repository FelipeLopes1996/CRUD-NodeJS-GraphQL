// import db from '../config/database'
const db = require("../config/database");

module.exports = {
  Query: {
    async getUser(_, { id }) {
      return await db("users").where({ id }).first();
    },
    async getUsers() {
      return await db("users");
    },
  },
  Mutation: {
    async createUser(_, { input }) {
      const resultado = await db("users").insert({
        name: input.name,
        email: input.email,
        password: input.password,
      });

      const id = resultado[0];
      return await db("users").where({ id }).first();
    },

    async updateUser(_, { id, input }) {
      const user = await db("users").where({ id });
      if (!user) {
        return false;
      }
      return await db("users").where({ id }).update({
        name: input.name,
        email: input.email,
        password: input.password,
      });
    },

    async destroyUser(_, {id}) {
      const user = await db("users").where({ id })
      if (!user) {
        return false
      }
      return await db("users").where({ id }).delete()
    },
  }
};