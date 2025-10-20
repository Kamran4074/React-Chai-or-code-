 const conf={
    appwriteUrl : String(import.meta.env.VITE_APPWRIITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRIITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_DATABASE_ID),
    appwriteTableId:String(import.meta.env.VITE_APPWRIITE_TABLE_ID),
    appwriteBucketId:String(import.meta.env.VITE_BUCKET_ID)
 }

 export default conf