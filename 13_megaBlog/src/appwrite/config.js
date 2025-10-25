import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // ✅ Create a new post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostsCollectionId,
        slug, // document ID to use
        { title, slug, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  // ✅ Update post by slug (document ID)
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostsCollectionId,
        slug, // document ID to update
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  }

  // ✅ Delete post by slug (document ID)
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostsCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false; // return false on failure
    }
  }

  // ✅ Fetch a post by slug (document ID)
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostsCollectionId,
        slug
      );
    } catch (error) {
      console.error("Error fetching post:", error);
      return null; // null indicates not found or failed
    }
  }

  // ✅ Fetch all active posts
  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwritePostsCollectionId,
        queries
      );
    } catch (error) {
      console.error("Error fetching posts:", error);
      return null;
    }
  }

  // ✅ Upload file to Appwrite storage bucket
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("File upload failed:", error);
      return null;
    }
  }

  // ✅ Delete file from bucket
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("File delete failed:", error);
      return false;
    }
  }

  // ✅ Get file preview URL
  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.error("File preview failed:", error);
      return null;
    }
  }

  // ✅ Get file download URL
  getFileDownload(fileId) {
    try {
      return this.bucket.getFileDownload(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.error("File download failed:", error);
      return null;
    }
  }
}

// Export a singleton instance
const service = new Service();
export default service;
