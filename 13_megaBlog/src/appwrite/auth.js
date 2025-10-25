import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // ✅ Create account and auto-login
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // Log the user in immediately after signup
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Error creating account:", error);
      throw error;
    }
  }

  // ✅ Create email/password session (login)
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session; // 👈 return session so caller can verify
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  // ✅ Get the current logged-in user
  async getCurrentUser() {
    try {
      const user = await this.account.get(); // 👈 get current user
      return user;
    } catch (error) {
      // If not logged in, Appwrite throws 401
      console.warn("No active session found:", error);
      return null; // 👈 important: prevent unhandled rejection
    }
  }

  // ✅ Logout
  async logout() {
    try {
      await this.account.deleteSession("current"); // 👈 specify "current" session
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
