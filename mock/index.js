/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { faker } from '@faker-js/faker/locale/zh_CN';

const typeDefs = `#graphql
  type UserType {
  """用户id"""
  id: String!

  """用户名称"""
  name: String!

  """用户描述"""
  desc: String!

  """账户信息"""
  account: String!
}

type Query {
  """根据ID查询用户"""
  find(id: String!): UserType!
}

type Mutation {
  """新增用户"""
  create(params: UserInput!): Boolean!

  """更新用户"""
  update(id: String!, params: UserInput!): Boolean!

  """删除一个用户"""
  del(id: String!): Boolean!
}

input UserInput {
  name: String!
  desc: String!
}
`;

const resolvers = {
  UserType: {
    // name: () => faker.person.lastName() + faker.person.firstName(),
    name: () => faker.person.fullName(),
  },
};

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'hello',
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true,
  }),
});

await startStandaloneServer(server, { listen: { port: 8888 } });
