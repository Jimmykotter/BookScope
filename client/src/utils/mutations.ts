import { gql } from "@apollo/client";

export const ADD_USER = gql`mutation Mutation($input: UserInput!) {
  addUser(input: $input) {
    token
  }
}`;
export const LOGIN = gql`mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}`;
export const SAVE_BOOK = gql`mutation Mutation($input: BookInput!) {
  saveBook(input: $input) {
    bookCount
  }
}`;

export const REMOVE_BOOK = gql`mutation RemoveBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
    bookCount
  }
}`;

// mutaitons are
// adduser
// login
// remove book
// save book
