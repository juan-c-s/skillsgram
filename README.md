# Welcome to Skillsgram
This is a comprehensive guide for setting up and running this project. If you want to have more details about how the project works under the hood, feel free to visit the README of frontend and backend.

## 1. Docker Installation
If you already have docker, you can skip this section
1. Download the installer using the download buttons at the top of the page, or from the release notes.
```sh
https://www.docker.com/get-started/
```
2. Double-click Docker.dmg to open the installer, then drag the Docker icon to the Applications folder. 
3. By default, Docker Desktop is installed at /Applications/Docker.app.

4. Double-click Docker.app in the Applications folder to start Docker.

5. The Docker menu displays the Docker Subscription Service Agreement.

6. Select Accept to continue. Note that Docker Desktop won't run if you do not agree to the terms. You can choose to accept the terms at a later date by opening Docker Desktop.
7. From the installation window, select Use recommended settings (Requires password).
8. Select Finish and enter password

## 2. Clone the repo

Cloning the app refers to copying the remote repository to your own computer. Think of it as downloading a google drive file

### Cloning a Repository using GitHub Desktop

#### Prerequisites
- GitHub desktop app downloaded on your device. If you don't have the app, refer to the GithubCLI (Commmand Line Interface) guide using the terminal or download the app at:
    ```bash
    https://desktop.github.com/
    ```
- Visual Studio Code app downloaded. If you don't have the app, download it going to the following link
    ```sh
    https://code.visualstudio.com/download
    ```

#### Steps
1. Go to the following link to have access to the project. 
```bash
https://github.com/juan-c-s/skillsgram
```
2. click on the **clone** button and select "Open with github Desktop"
3. Once you have github Desktop App open, it will prompt you to clone the repository. Click on the **clone** button
4. You should have the skillsgram respository selected on your github app.
5. Go ahead and click **Open in Visual Studio Code**


### Cloning a Repository from Command Line using Git
This guide will walk you through the steps to clone a repository from the command line using Git.

#### Prerequisites

- Git installed on your system. You can download and install Git from the [official website](https://git-scm.com/).
- If you don't have Visual Studio Code app, download it going to the following link
```sh
https://code.visualstudio.com/download
```
#### Steps

1. **Open your Terminal or Command Prompt**: Open your terminal or command prompt application. This could be Terminal on macOS, Command Prompt or PowerShell on Windows, or any terminal emulator on Linux.

2. **Navigate to the directory where you want to clone the repository**: Use the `cd` command to navigate to the directory where you want the cloned repository to be stored. For example:
   ```bash
   cd path/to/your/directory
   ```
3. Copy-paste the following command in the terminal
    ```bash
    git clone https://github.com/juan-c-s/skillsgram
    ```

## 3. Run Docker Build
1. Open new file explorer and drag and drop your skillsgram folder to the Visual Studio Code app.
2. Right click in the file Explorer below the last file or folder. Click on Open on Integrated Terminal. Another way is using the menu app bar where you can access File, Edit or View items. There is one called Terminal. Hover over Terminal and click **New Terminal**

3. This step will take a little long because it will install all the project's dependencies or files needed to run project.
```bash
docker compose build
```
Wait for about 3-5 minutes, time for a stretch

## 4. Run the project
Execute this command to set up the project
```bash
docker compose up
```

## 5. Project Ready
Open your browser and go to the following page
```bash
http://localhost:3000/
```
You should now be in the login Page.


/
This is the login page, if not register, click on create account
![Screenshot 2024-05-06 at 10 43 45 AM](https://github.com/juan-c-s/skillsgram/assets/63207344/44250221-aecd-4f3d-9e11-1bc6bc64b7c4)

/register
![Screenshot 2024-05-06 at 10 44 06 AM](https://github.com/juan-c-s/skillsgram/assets/63207344/68bbdbb1-316a-4041-800f-033396bcac10)
There is a random image generator link in case you do not have a profile image link available. Fill in the details and click register you should be headed to your profile page.


/profile:id
![Screenshot 2024-05-06 at 10 47 36 AM](https://github.com/juan-c-s/skillsgram/assets/63207344/b8d69b62-3e8b-4a18-b1b2-399bd8513136)
This page will have your profile which you registered earlier and at the right side, you will have a **spider chart** of your skills. Since you don't have skills yet, it is empty. Below the chart, you can add skills to associate to the profile id of current user profile page. When you click on **Add Skill**, the **spider chart** will update

/home
![Screenshot 2024-05-06 at 10 45 13 AM](https://github.com/juan-c-s/skillsgram/assets/63207344/a3e93384-5ba3-4561-a4a0-f3dbc139542d)
This page will have a grid of the users created until now, each profile description has a link to profile button to redirect to its profile page. 


Improvement:
- Authentication + middleware + Authenticating Navigation with token would improve security
- Create an Admin page for the company with analytics about skills
- Make an autocomplete field when adding a skill. This could help to reduce the repeated skills on the db
- Create a db seeder to initialize it with data
- Make the design responsive

