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

1. Github Desktop App cloning
If you don't have the github desktop app, refer to the GithubCLI guide or download the app at:
```bash
https://desktop.github.com/
```
Go to the following link to have access to the project. 
```bash
https://github.com/juan-c-s/skillsgram
```
- click on the **clone** button and select "Open with github Desktop"
- Once you have github Desktop App open, it will prompt you to clone the repository. Click on the **clone** button
- You should have the skillsgram respository selected on your github app.
- Go ahead and click **Open in Visual Studio Code**
- If you don't have Visual Studio Code app, download it going to the following link
```sh
https://code.visualstudio.com/download
```
2. Github CLI cloning
### Cloning a Repository from Command Line using Git
This guide will walk you through the steps to clone a repository from the command line using Git.

#### Prerequisites

- Git installed on your system. You can download and install Git from the [official website](https://git-scm.com/).

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
4. Change Directory with 
    ```bash
    cd skillsgram
    ```

This repo has 2 main folders: frontend/ and backend/. 
**Frontend/** folder has all the visual part of the app in React.js.
**Backend/** folder has server-side part of the app in FastApi.

## 2. Run Docker Build
This step will take a little long because it will install all the project's dependencies
```bash
docker compose build
```
Wait for about 3-5 minutes, time for a stretch

## 3 Run the project
Execute this command to set up the project
```bash
docker compose up
```
