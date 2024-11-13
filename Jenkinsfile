pipeline {
    agent any

    environment {
        GIT_REPO = 'git@github.com:nibroos/nibros-portfolio.git'
        SSH_CREDENTIALS_ID = '2dcfa3e4-fa4d-4702-a362-4ace13f87646'
        VPS_USER = credentials('vps-user-27')
        VPS_HOST = credentials('vps-host-27')
        VPS_DEPLOY_DIR = credentials('vps-deploy-dir-nibros-docs')
        BUN_INSTALL = credentials('bun-install')
        PATH = "${BUN_INSTALL}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                sshagent(credentials: [SSH_CREDENTIALS_ID]) {
                    sh 'git clone ${GIT_REPO} .'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'bun install'
            }
        }

        stage('Generate Static Files') {
            steps {
                sh 'bun run generate'
            }
        }

        stage('Clean Workspace') {
            steps {
                sh 'find . -maxdepth 1 ! -name \'.output\' ! -name \'.\' -exec rm -rf {} +'
            }
        }

        stage('Deploy to VPS') {
            steps {
                sshagent(credentials: [SSH_CREDENTIALS_ID]) {
                    sh """
                    rsync -avz --delete .output/ ${VPS_USER}@${VPS_HOST}:${VPS_DEPLOY_DIR}
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}