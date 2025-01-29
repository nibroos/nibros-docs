# Jenkins Essentials

`7 minutes read` · Dec 22, 2024

Tech: `Docker`, `Linux`, `Jenkins`, `Makefile`, `Git`, `GitHub`

This document outlines the Jenkins CI/CD pipeline essentials for automating the deployment process. Jenkins is an open-source automation server that helps automate the building, testing, and deployment of software projects.

## Jenkins Guest Account

For the demo, You can use the guest account to access the Jenkins server to see the pipeline in action!

**Server URL**: [Jenkins Server](https://deploy.nibros.tech)
- **Username**: `guest`
- **Password**: `guest`

## Pre-requisites

Before setting up the Jenkins pipeline, ensure the following pre-requisites are met:

- **VPS**: Virtual Private Server (VPS) is available for deployment.
- **Docker**: Docker is installed on the VPS.
- **Docker Compose**: Docker Compose is installed on the VPS.
- **SSH Key**: SSH key is generated and added to the VPS for secure access.
- **Running Production Containers**: Ensure that the production containers are running on the VPS (if its initial deployment).

## How to install Jenkins

1. **Create Dockerfile**

Create a file named `Dockerfile` and paste the following content into it:

:::details Dockerfile
```dockerfile
FROM jenkins/jenkins:lts

# Switch to root user to install dependencies
USER root

# Install curl and nano
RUN apt-get update && apt-get install -y curl nano rsync

# Switch to the Jenkins user
USER jenkins

# Install bun
RUN curl -fsSL https://bun.sh/install | bash

# Add bun to PATH
ENV BUN_INSTALL="/var/jenkins_home/.bun"
ENV PATH="${BUN_INSTALL}/bin:${PATH}"
```
:::

2. **Build Docker Image**
Navigate to the directory where your Dockerfile is located and run the following command to build the Docker image:

```bash
docker build -t jenkins-custom:lts .
```

3. **Run Docker Container**
Once the image is built, you can run a container using the following command:

```bash
docker run -d -p 8060:8080 -p 50000:50000 --name jenkins custom-jenkins:lts
```

- `-d`: Run the container in detached mode.
- `-p 8060:8080`: Map port 8060 on the host to port 8080 in the container.
- `-p 50000:50000`: Map port 50000 on the host to port 50000 in the container.
- `--name jenkins`: Assign the name `jenkins` to the container.
- `custom-jenkins:lts`: The name of the Docker image.

4. **Access Jenkins**

Once the container is running, you can access the Jenkins web UI by navigating to `http://<your-server-ip>:8080` in your web browser.

5. **Unlock Jenkins**

To unlock Jenkins, you will need to retrieve the initial admin password from the container. Run the following command to get the password:

```bash
docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

optionally, you can use the following command to copy the password to your clipboard:

```bash
docker exec jenkins /bin/bash
```

```bash
cat /var/jenkins_home/secrets/initialAdminPassword | pbcopy
```

Copy the password and paste it into the Jenkins web UI to unlock Jenkins.

6. **Install Plugins**

After unlocking Jenkins, you will be prompted to install plugins. Select the "Install suggested plugins" option to install the recommended plugins.

7. **Create Admin User**

Once the plugins are installed, you will be prompted to create an admin user. Fill in the required details to create the admin user.

8. **Jenkins Dashboard**

After creating the admin user, you will be redirected to the Jenkins dashboard, where you can create a new pipeline.

## Recommended Jenkins Plugins

The following Jenkins plugins are recommended for setting up the CI/CD pipeline:

### Role-based Authorization Strategy

Allows you to define roles and assign permissions to users.

How to install:
1. Go to `Manage Jenkins` > `Manage Plugins`.
2. Click on the `Available` tab.
3. Search for `Role-based Authorization Strategy`.
4. Restart Jenkins after installing the plugin, use the following command:

```bash
docker restart jenkins
```

6. Go to `Manage Jenkins` > `Security` > `Authorization` and select `Role-Based Strategy`.

## Conclusion

Setting up a Jenkins CI/CD pipeline is essential for automating the deployment process and ensuring consistency across different environments. By following the steps outlined in this document, you can create a Jenkins pipeline for your project and automate the build, test, and deployment process.

Have fun delivering your project! 🚀