# Express App Deployment Guide

This guide will walk you through deploying your Express.js application to Vercel, a cloud platform for static sites and serverless functions. 

## Prerequisites

Before you begin, make sure you have the following:

- Node.js installed on your local machine.
- A Vercel account. If you don't have one, you can sign up for free at [Vercel](https://vercel.com).

## Deployment Steps

1. **Clone the Repository:**
   ``````sh
   git clone <repository-url>
   cd <project-directory>
    ```
2. **Install Dependencies:**
    ```sh
    npm install
    ```
3. **Test Locally:**</br>
    Before deploying, ensure your app runs correctly locally:
    ```sh
    npm start
    ```

4. **Create Vercel Account:**</br>
    If you haven't already, sign up for a Vercel account at Vercel.

5. **Install Vercel CLI:**</br>
    Install Vercel CLI globally on your machine:
    ```sh
    npm install -g vercel
    ```
6. **Login to Vercel CLI:**</br>
    Login to your Vercel account using the following command and follow the prompts:
    ```sh
    vercel login
    ``` 


7. **Deploy to Vercel:**</br>
    On ce logged in, navigate to your project directory in the terminal and deploy your app using the following command:
    ```sh
    vercel
    ```

**Follow the Prompts:**</br>
During the deployment process, you will be prompted to confirm deployment settings. Accept the default settings or configure as needed.

**Access Your App:**</br>
Once deployed, Vercel will provide you with a URL where your app is hosted. You can access your app using this URL.

**Use th app url to read the swiggy data**