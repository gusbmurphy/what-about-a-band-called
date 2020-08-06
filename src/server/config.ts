export const localDbUrl = "mongodb://127.0.0.1:27017/wababc";
export const dbUrl = process.env.MONGODB_URI || localDbUrl;
export const port = process.env.PORT || 7777;
export const sessionSecret = process.env.SESS_SECRET || "session!secret";
export const sessionName = process.env.SESS_NAME || "session!name";
export const sessionLifetime = process.env.SESS_LIFETIME || String(1000 * 60 * 60 * 2);
