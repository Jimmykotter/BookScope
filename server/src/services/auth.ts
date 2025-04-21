import type { Request } from "express";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

interface JwtPayload {
  _id: unknown;
  username: string;
  email: string;
}

export const authenticateToken = ({ req }: { req: Request }) => {
  let token = req.headers.authorization;

  if (token) {
    token = token.split(" ")[1];
  }

  if (!token) {
    return req;
  }

  try {
    const { data }: any = jwt.verify(token, process.env.JWT_SECRET_KEY || "", {
      maxAge: "2hr",
    });
    // If the token is valid, attach the user data to the request object
    req.user = data as JwtPayload;
  } catch (err) {
    // If the token is invalid, log an error message
    console.error(err);
  }

  // Return the request object
  return req;
};

export const signToken = (username: string, email: string, _id: unknown) => {
  const payload = { data: { username, email, _id } };
  const secretKey = process.env.JWT_SECRET_KEY || "";

  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};
export class AuthenticationError extends GraphQLError {
  constructor(message: string) {
    super(message, undefined, undefined, undefined, ["UNAUTHENTICATED"]);
    Object.defineProperty(this, "name", { value: "AuthenticationError" });
  }
}
