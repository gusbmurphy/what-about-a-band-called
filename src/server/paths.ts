export const serverUrl = process.env.NODE_ENV == "production" ? "" : "http://localhost:7777";
export const authenticate = "/api/authenticate";
export const postBands = "/api/bands";
export const modifyBand = "/api/band/modify";
export const newBand = "/api/band/new";
export const createUser = "/api/create-user";
export const getUsername = "/api/usernames/get";
export const getUserRecords = "/api/users/get";