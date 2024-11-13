pipeline {
    agent any

    environment {
        GIT_REPO = 'git@github.com:nibroos/nibros-docs.git'
        SSH_CREDENTIALS_ID = '2dcfa3e4-fa4d-4702-a362-4ace13f87646'
        VPS_USER = credentials('vps-user-27')
        VPS_HOST = credentials('vps-host-27')
        VPS_DEPLOY_DIR = credentials('vps-deploy-dir-nibros-docs')
        BUN_INSTALL = credentials('bun-install')
        PATH = "${BUN_INSTALL}/bin:${env.PATH}"
        BUILD_DIR = "build-${env.BUILD_ID}"
    }

    stages {
        stage('Checkout') {
            steps {
                cleanWs()
                sshagent(credentials: [SSH_CREDENTIALS_ID]) {
                    sh("mkdir -p ${BUILD_DIR}")
                    dir("${BUILD_DIR}") {
                        sh('git clone ${GIT_REPO} .')
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir("${BUILD_DIR}") {
                    sh('bun install')
                }
            }
        }

        stage('Generate Static Files') {
            steps {
                dir("${BUILD_DIR}") {
                    sh('bun run docs:build')
                }
            }
        }

        stage('Clean Workspace') {
            steps {
                dir("${BUILD_DIR}") {
                    sh('ls -A | grep -v docs | xargs rm -rf')
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                sshagent(credentials: [SSH_CREDENTIALS_ID]) {
                    dir("${BUILD_DIR}") {
                        sh('rsync -avz --delete docs/.vitepress/dist/ $VPS_USER@$VPS_HOST:$VPS_DEPLOY_DIR')
                    }
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