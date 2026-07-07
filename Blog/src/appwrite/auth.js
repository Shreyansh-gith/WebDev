import conf from '../conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();  //Used to establish the connection to your Appwrite server
    account;

    constructor() {  //This is a special method that runs automatically 
        // when you create a new instance of the class. It’s used to set up the initial properties of the object
        // Inside a class, 'this' refers to the specific instance of the object being created.
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);  //Used to handle user authentication features (signup, login, sessions)
    }

    async createAccount({email, password, name}){ // writing like this helps in moving to different backends without changing much of code, except the inner code of existing backend service
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // return userAccount; or
                // call another method
                return this.login({email,password})
            }
            else{
                return userAccount;
            }
        } catch(error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch(error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try{
            await this.account.deleteSessions();
        } catch(error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();  // Instead of exporting the raw AuthService class, 
// the file creates an instance of it (authService) and exports that instance.
// This is called the 'Singleton Pattern'. No matter how many 
// different components (Navbar, Login Page, Settings Page) import this file, 
// they will all share the exact same instance, running on the exact same client connection.

export default authService;