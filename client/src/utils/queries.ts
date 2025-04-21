import { gql } from "@apollo/client";

export const ME = gql `query Query {
    me {
      _id
    }
  }`;
