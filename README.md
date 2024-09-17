# CalendarTest

Hey all :wave: here is how I was able to deploy the test website to firebase for hosting. This a gathered documentation from Firebase website.

# Get started with Firebase Hosting

Firebase Hosting gives you a fast, secure, and reliable way to host your app's static assets (HTML, CSS, JavaScript, media files, etc.) as well as to serve dynamic content and host microservices.

Our production-grade hosting is backed by a global content delivery network (CDN). Hosting serves your content over SSL, by default, and can be used with your own custom domain or on your project's subdomains at no cost on web.app and firebaseapp.com.

## Before you begin

Before you can set up Firebase Hosting, you need to create a Firebase project.

## Step 1: Install the Firebase CLI

Visit the Firebase CLI documentation to learn how to install the CLI or update to its latest version.

## Step 2: Initialize your project

To connect your local project files to your Firebase project, run the following command from the root of your local project directory:

```ruby
firebase init hosting
```

During project initialization, from the Firebase CLI prompts:

1. Select a Firebase project to connect to your local project directory.

The selected Firebase project is your "default" Firebase project for your local project directory. To connect additional Firebase projects to your local project directory, set up project aliases.

2. Specify a directory to use as your public root directory.

This directory contains all your publicly served static files, including your index.html file and any other assets that you want to deploy to Firebase Hosting.

- The default for the public root directory is called public.

  - You can specify your public root directory now or you can specify it later in your firebase.json configuration file.
  - If you select the default and don't already have a directory called public, Firebase creates it for you.
    
- If you don't already have a valid index.html file or 404.html file in your public root directory, Firebase creates them for you.

3. Choose a configuration for your site.

If you select to make a one-page app, then Firebase automatically adds rewrite configurations for you.
At the end of initialization, Firebase automatically creates and adds two files to the root of your local app directory:

- A firebase.json configuration file that lists your project configuration. Learn more about this file on the configure hosting behavior page.
- A .firebaserc file that stores your project aliases.
  
## Step 3: Deploy to your site

```ruby
firebase init hosting:github
```

3. Follow the CLI prompts, and the command will automatically take care of setting up the GitHub Action:

- Creates a service account in your Firebase project with permission to deploy to Firebase Hosting.
- Encrypts that service account's JSON key and uploads it to the specified GitHub repository as a GitHub secret.
- Writes GitHub workflow yaml configuration files that reference the newly created secret. These files configure the GitHub Action to deploy to Firebase Hosting.
  
4. In GitHub, create a new branch and commit the workflow yaml files created by the CLI.
5. Publish the branch to your GitHub repository.
6. Merge the branch.
That's it! Any subsequent PR in this GitHub repo will automatically get its own "preview URL"!

## Learn more about the GitHub Action

- Firebase maintains the "Deploy to Firebase Hosting" GitHub Action as an open-source project. View the source code.
- The "Deploy to Firebase Hosting" GitHub Action allows for further configuration, like customizing the expiry date for a preview channel or setting a non-live channel to deploy to when a PR is merged. Learn about the available configuration options.
- Learn more about GitHub Actions, in general.
