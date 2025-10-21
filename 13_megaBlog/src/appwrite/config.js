import conf from "../conf.js";
import{Client,ID,Databases,Storage,Query} from "appwrite";

export class Service{
    client= new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases= new Databases(this.client);
            this.bucket= new Storage(this.client);
    }

    // Create a new post
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug, // document ID to use
                {title,slug,content,featuredImage,status,userId}
            )
            
        } catch (error) {
            throw error;
        }
    }

    // Update post by slug (document ID)
    async updatePost(slug,{title,content,featuredImage,status}){ //slug is document ID which we want to update
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug, // document ID to update
                {title,content,featuredImage,status}
            )
        } catch (error) {
            throw error;
        }
    }

    // Delete post by slug (document ID)
    async deletePost(slug){
        try {
                await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug // document ID to delete
            )
            return true; // if deletion is successful
        }
        catch (error) {
            throw error;
            return false; // if deletion fails
        }
    }
    
    // Fetch post by slug (document ID)
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                slug // document ID to fetch
            )
        } catch (error) {
            throw error;
            return false; // if fetching fails
        }
    }

    // Fetch all posts
    async getAllPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwritePostsCollectionId,
                // [
                //     Query.orderDesc("createdAt")
                // ] or queries
                queries
            )
        } catch (error) {
            throw error;
            return false; // if fetching fails
        }
    }

    // Upload file to Appwrite storage bucket
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw new Error("File upload failed");
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error;
            return false;
        }   
    }

    async getFileDownload(fileId){
        try {
            return this.bucket.getFileDownload(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error;
            return false;
        }
    }
}

const service= new Service();
export default service;