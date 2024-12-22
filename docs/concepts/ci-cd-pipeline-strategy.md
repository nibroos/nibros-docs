# Go Jenkins CI/CD Pipeline Strategy

`7 minutes read`

Tech: `Go`, `Fiber`, `PostgreSQL`, `Docker`, `Linux`, `DigitalOcean`, `Jenkins`, `golang-migrate`, `Docker Compose`, `Makefile`, `Git`, `GitHub`

This document outlines the Jenkins CI/CD pipeline for the e-learning Go project. The pipeline script is designed to automate the deployment process, ensuring that the application is built, tested, and deployed consistently across different environments.

## Jenkins Guest Account

For the demo, You can use the guest account to access the Jenkins server to see the pipeline in action!

**Server URL**: [Jenkins Server](https://deploy.nibros.tech)
- **Username**: `guest`
- **Password**: `guest`

## Success Output

Here is the output of the Jenkins pipeline when the build and deployment process is successful.

:::details Click to see the Jenkins Success Pipeline Output
```bash
Started by an SCM change
Obtained Jenkinsfile from git git@github.com:nibroos/elearning-go.git
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins
 in /var/jenkins_home/workspace/e-learning/build-test
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
The recommended git tool is: git
using credential 2dcfa3e4-fa4d-4702-a362-4ace13f87646
Cloning the remote Git repository
Cloning repository git@github.com:nibroos/elearning-go.git
 > git init /var/jenkins_home/workspace/e-learning/build-test # timeout=10
Fetching upstream changes from git@github.com:nibroos/elearning-go.git
 > git --version # timeout=10
 > git --version # 'git version 2.39.5'
using GIT_SSH to set credentials 
Verifying host key using known hosts file
 > git fetch --tags --force --progress -- git@github.com:nibroos/elearning-go.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url git@github.com:nibroos/elearning-go.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
Avoid second fetch
 > git rev-parse origin/rebase-test^{commit} # timeout=10
Checking out Revision c3917b181e7a8ed0055820c588aa748e1114ffa2 (origin/rebase-test)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f c3917b181e7a8ed0055820c588aa748e1114ffa2 # timeout=10
Commit message: "add: adding scheduler mechanism"
 > git rev-list --no-walk 3ecaf6ffac26501fb7a855a67ac55761fec30706 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withCredentials
Masking supported pattern matches of $POSTGRES_USER or $GATEWAY_PORT or $POSTGRES_DB_TEST or $REDIS_HOST or $REDIS_DB or $POSTGRES_HOST or $SERVICE_REST_PORT or $SERVICE_GRPC_PORT or $POSTGRES_PASSWORD or $POSTGRES_PORT or $POSTGRES_HOST_TEST or $POSTGRES_DB or $VPS_DEPLOY_DIR or $VPS_USER or $REDIS_PORT or $JWT_SECRET or $VPS_HOST or $REDIS_PASSWORD or $MASTER_SERVICE_GRPC_PORT or $REDIS_DB_TEST or $MASTER_SERVICE_REST_PORT or $ACTIVITIES_SERVICE_GRPC_PORT or $ACTIVITIES_SERVICE_REST_PORT
[Pipeline] {
[Pipeline] withEnv
Warning: A **** was passed to "withEnv" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Clone Repository on VPS)
[Pipeline] script
[Pipeline] {
[Pipeline] sshagent
[ssh-agent] Using credentials nibros_do_server
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXJyLzos/agent.1999516
SSH_AGENT_PID=1999519
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_11825708093952072062.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, POSTGRES_HOST_TEST, VPS_DEPLOY_DIR, VPS_USER, VPS_HOST, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh-keyscan -H github.com
# github.com:22 SSH-2.0-62798ca88
# github.com:22 SSH-2.0-62798ca88
# github.com:22 SSH-2.0-62798ca88
# github.com:22 SSH-2.0-62798ca88
# github.com:22 SSH-2.0-62798ca88
+ ssh -A -o StrictHostKeyChecking=no ****@**** ssh-keyscan -H github.com >> ~/.ssh/known_hosts
# github.com:22 SSH-2.0-62798ca88
# github.com:22 SSH-2.0-62798ca88
# github.com:22 SSH-2.0-62798ca88
# github.com:22 SSH-2.0-62798ca88
# github.com:22 SSH-2.0-62798ca88
+ echo Testing SSH connection...
Testing SSH connection...
+ ssh -A -o StrictHostKeyChecking=no ****@**** source ~/.bashrc; echo "SSH connection successful!"
SSH connection successful!
+ echo Cloning repository...
Cloning repository...
+ ssh -A -o StrictHostKeyChecking=no ****@**** rm -rf **** &&
              git clone -b rebase-test git@github.com:nibroos/elearning-go.git ****
Cloning into ****...
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 1999519 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Create .env File)
[Pipeline] script
[Pipeline] {
[Pipeline] sshagent
[ssh-agent] Using credentials nibros_do_server
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXi50nm2/agent.1999570
SSH_AGENT_PID=1999573
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_9952666229671425599.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [POSTGRES_USER, GATEWAY_PORT, POSTGRES_DB_TEST, REDIS_HOST, REDIS_DB, POSTGRES_HOST, SERVICE_REST_PORT, SERVICE_GRPC_PORT, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_HOST_TEST, POSTGRES_DB, VPS_DEPLOY_DIR, VPS_USER, REDIS_PORT, JWT_SECRET, VPS_HOST, REDIS_PASSWORD, MASTER_SERVICE_GRPC_PORT, REDIS_DB_TEST, MASTER_SERVICE_REST_PORT, ACTIVITIES_SERVICE_GRPC_PORT, ACTIVITIES_SERVICE_REST_PORT]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                echo "POSTGRES_USER=****" > ****/docker/.env &&
                echo "POSTGRES_PASSWORD=****" >> ****/docker/.env &&
                echo "POSTGRES_DB=****" >> ****/docker/.env &&
                echo "POSTGRES_DB_TEST=****" >> ****/docker/.env &&
                echo "POSTGRES_PORT=****" >> ****/docker/.env &&
                echo "POSTGRES_HOST=****" >> ****/docker/.env &&
                echo "POSTGRES_HOST_TEST=****" >> ****/docker/.env &&
                echo "GATEWAY_PORT=****" >> ****/docker/.env &&
                echo "SERVICE_GRPC_PORT=****" >> ****/docker/.env &&
                echo "SERVICE_REST_PORT=****" >> ****/docker/.env &&
                echo "MASTER_SERVICE_GRPC_PORT=****" >> ****/docker/.env &&
                echo "MASTER_SERVICE_REST_PORT=****" >> ****/docker/.env &&
                echo "ACTIVITIES_SERVICE_GRPC_PORT=****" >> ****/docker/.env &&
                echo "ACTIVITIES_SERVICE_REST_PORT=****" >> ****/docker/.env &&
                echo "JWT_SECRET=****" >> ****/docker/.env &&
                echo "REDIS_HOST=****" >> ****/docker/.env &&
                echo "REDIS_PORT=****" >> ****/docker/.env &&
                echo "REDIS_PASSWORD=****" >> ****/docker/.env &&
                echo "REDIS_DB=0" >> ****/docker/.env &&
                echo "REDIS_DB_TEST=1" >> ****/docker/.env &&
                cp ****/docker/.env ****/service/.env &&
                cp ****/docker/.env ****/gateway/.env
              
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 1999573 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Running Tests)
[Pipeline] script
[Pipeline] {
[Pipeline] sshagent
[ssh-agent] Using credentials nibros_do_server
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXeofABn/agent.1999590
SSH_AGENT_PID=1999593
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_1784991915455964963.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, POSTGRES_HOST_TEST, VPS_DEPLOY_DIR, VPS_USER, VPS_HOST, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                cd **** &&
                docker compose -f docker/docker-compose-test.yml down --remove-orphans &&
                docker compose -f docker/docker-compose-test.yml up --build -d &&
                sleep 5 # Wait for containers to start
              
time="2024-12-15T10:49:34Z" level=warning msg="Warning: No resource found to remove for project \"learning-go-test\"."
#0 building with "default" instance using docker driver

#1 [service-test internal] load .dockerignore
#1 transferring context: 2B 0.0s done
#1 DONE 0.0s

#2 [service-test internal] load build definition from Dockerfile.test
#2 transferring dockerfile: 601B 0.0s done
#2 DONE 0.0s

#3 [service-test internal] load metadata for docker.io/library/golang:1.23-alpine
#3 DONE 1.9s

#4 [service-test 1/8] FROM docker.io/library/golang:1.23-alpine@sha256:6c5c9590f169f77c8046e45c611d3b28fe477789acd8d3762d23d4744de69812
#4 DONE 0.0s

#5 [service-test internal] load build context
#5 transferring context: 472.84kB 0.1s done
#5 DONE 0.1s

#6 [service-test 2/8] RUN apk add --no-cache make curl ****ql-client
#6 CACHED

#7 [service-test 3/8] RUN go install -tags **** github.com/golang-migrate/migrate/v4/cmd/migrate@latest
#7 CACHED

#8 [service-test 4/8] RUN ln -s /go/bin/linux_amd64/migrate /usr/local/bin/migrate
#8 CACHED

#9 [service-test 5/8] WORKDIR /app
#9 CACHED

#10 [service-test 6/8] COPY go.mod go.sum ./
#10 DONE 0.1s

#11 [service-test 7/8] RUN go mod download
#11 DONE 16.4s

#12 [service-test 8/8] COPY . .
#12 DONE 0.1s

#13 [service-test] exporting to image
#13 exporting layers
#13 exporting layers 4.6s done
#13 writing image sha256:4f30f72c74689429fb6aebc03d0b57717959a04d8ea2879b2842dfaf4734faf6
#13 writing image sha256:4f30f72c74689429fb6aebc03d0b57717959a04d8ea2879b2842dfaf4734faf6 done
#13 naming to docker.io/library/learning-go-test-service-test done
#13 DONE 4.6s

#14 [service-test] resolving provenance for metadata file
#14 DONE 0.0s

#15 [load-balancer-learninggo-test internal] load .dockerignore
#15 transferring context: 2B done
#15 DONE 0.0s

#16 [load-balancer-learninggo-test internal] load build definition from Dockerfile
#16 transferring dockerfile: 129B 0.0s done
#16 DONE 0.0s

#17 [load-balancer-learninggo-test internal] load metadata for docker.io/library/nginx:alpine
#17 DONE 0.0s

#18 [load-balancer-learninggo-test 1/2] FROM docker.io/library/nginx:alpine
#18 DONE 0.0s

#19 [load-balancer-learninggo-test internal] load build context
#19 transferring context: 910B done
#19 DONE 0.0s

#20 [load-balancer-learninggo-test 2/2] COPY nginx.conf /etc/nginx/nginx.conf
#20 CACHED

#21 [load-balancer-learninggo-test] exporting to image
#21 exporting layers done
#21 writing image sha256:110178e1252f92dca5dd59118a4130db05bdd3ec8ad19e0bcf6f05f29555ff1b done
#21 naming to docker.io/library/learning-go-test-load-balancer-learninggo-test done
#21 DONE 0.0s

#22 [load-balancer-learninggo-test] resolving provenance for metadata file
#22 DONE 0.0s
 Container service-test  Creating
 Container service-test  Created
 Container learning-go-test-load-balancer-learninggo-test-1  Creating
 Container learning-go-test-load-balancer-learninggo-test-1  Created
 Container service-test  Starting
 Container service-test  Started
 Container learning-go-test-load-balancer-learninggo-test-1  Starting
 Container learning-go-test-load-balancer-learninggo-test-1  Started
+ echo Running tests..
Running tests..
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                docker exec service-test go test -v /app/internal/tests/... > test_output.log 2>&1 &&
                cat test_output.log
              
=== RUN   TestCreateUser
=== RUN   TestCreateUser/success_create_user
=== RUN   TestCreateUser/error_hash_password
=== RUN   TestCreateUser/error_roleIDs_empty_error
--- PASS: TestCreateUser (0.22s)
    --- PASS: TestCreateUser/success_create_user (0.14s)
    --- PASS: TestCreateUser/error_hash_password (0.00s)
    --- PASS: TestCreateUser/error_roleIDs_empty_error (0.00s)
=== RUN   TestDeleteUser
=== RUN   TestDeleteUser/success
--- PASS: TestDeleteUser (0.01s)
    --- PASS: TestDeleteUser/success (0.00s)
=== RUN   TestGetUserById
=== RUN   TestGetUserById/success
=== RUN   TestGetUserById/repository_error
=== RUN   TestGetUserById/context_timeout
--- PASS: TestGetUserById (0.00s)
    --- PASS: TestGetUserById/success (0.00s)
    --- PASS: TestGetUserById/repository_error (0.00s)
    --- PASS: TestGetUserById/context_timeout (0.00s)
=== RUN   TestGetUsers
=== RUN   TestGetUsers/returned_data_without_filter
=== RUN   TestGetUsers/returned_data_with_filter
=== RUN   TestGetUsers/returned_no_data_with_filter_that_total_0
=== RUN   TestGetUsers/repository_returns_error
--- PASS: TestGetUsers (0.00s)
    --- PASS: TestGetUsers/returned_data_without_filter (0.00s)
    --- PASS: TestGetUsers/returned_data_with_filter (0.00s)
    --- PASS: TestGetUsers/returned_no_data_with_filter_that_total_0 (0.00s)
    --- PASS: TestGetUsers/repository_returns_error (0.00s)
=== RUN   TestUpdateUser
=== RUN   TestUpdateUser/success_update_user
=== RUN   TestUpdateUser/error_roleIDs_empty
--- PASS: TestUpdateUser (0.01s)
    --- PASS: TestUpdateUser/success_update_user (0.00s)
    --- PASS: TestUpdateUser/error_roleIDs_empty (0.00s)
PASS
ok  	github.com/nibroos/elearning-go/service/internal/tests/unit/user_service	0.245s
+ echo Tests completed.
Tests completed.
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 1999593 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Run Migrations on Test DB)
[Pipeline] script
[Pipeline] {
[Pipeline] sshagent
[ssh-agent] Using credentials nibros_do_server
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXwZr34j/agent.1999935
SSH_AGENT_PID=1999937
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_4303304420822451816.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, POSTGRES_HOST_TEST, VPS_DEPLOY_DIR, VPS_USER, VPS_HOST, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                cd ****/service &&

                echo "Running test migrations on test database..." &&
                make migrate-test-up &&

                echo "Migrations completed."
                echo "Downing test migrations..."

                echo "Removing test containers..."
                docker compose -f ****/docker/docker-compose-test.yml down --remove-orphans
              
Running test migrations on test database...
Running test migrations up inside Docker container
docker compose -f ../docker/docker-compose-test.yml run --rm \
-e POSTGRES_USER=**** \
-e POSTGRES_PASSWORD=**** \
-e POSTGRES_DB=**** \
-e POSTGRES_PORT=**** \
service-test \
migrate -path=internal/database/migrations -database ****://****:****@****:****/****?sslmode=disable up
20241214234820/u create_schedulers_table (39.843517ms)
Migrations completed.
Downing test migrations...
Removing test containers...
 Container learning-go-test-load-balancer-learninggo-test-1  Stopping
 Container learning-go-test-load-balancer-learninggo-test-1  Stopped
 Container learning-go-test-load-balancer-learninggo-test-1  Removing
 Container learning-go-test-load-balancer-learninggo-test-1  Removed
 Container service-test  Stopping
 Container service-test  Stopped
 Container service-test  Removing
 Container service-test  Removed
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 1999937 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build & Deploy)
[Pipeline] script
[Pipeline] {
[Pipeline] sshagent
[ssh-agent] Using credentials nibros_do_server
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-XXXXXX7U5ZXD/agent.1999965
SSH_AGENT_PID=1999968
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_17896647481720075301.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, POSTGRES_HOST_TEST, VPS_DEPLOY_DIR, VPS_USER, VPS_HOST, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                cd **** &&
                docker compose -f docker/docker-compose.yml down --remove-orphans &&
                docker compose -f docker/docker-compose.yml up --build -d > build_output.log 2>&1
              
 Container ****-learninggo  Stopping
 Container learning-go-load-balancer-learninggo-1  Stopping
 Container ****-learninggo  Stopped
 Container ****-learninggo  Removing
 Container ****-learninggo  Removed
 Container learning-go-load-balancer-learninggo-1  Stopped
 Container learning-go-load-balancer-learninggo-1  Removing
 Container learning-go-load-balancer-learninggo-1  Removed
 Container learning-go-service-1  Stopping
 Container learning-go-service-1  Stopped
 Container learning-go-service-1  Removing
 Container learning-go-service-1  Removed
 Container ****-prod-learninggo  Stopping
 Container ****-prod-learninggo  Stopped
 Container ****-prod-learninggo  Removing
 Container ****-prod-learninggo  Removed
 Network learning-go_learning-network  Removing
 Network learning-go_learning-network  Removed
+ ssh -A -o StrictHostKeyChecking=no ****@**** cat ****/build_output.log
#0 building with "default" instance using docker driver

#1 [service internal] load .dockerignore
#1 transferring context: 2B done
#1 DONE 0.0s

#2 [service internal] load build definition from Dockerfile
#2 transferring dockerfile: 1.58kB 0.0s done
#2 DONE 0.0s

#3 [service internal] load metadata for docker.io/library/golang:1.23-alpine
#3 DONE 0.9s

#4 [service internal] load metadata for docker.io/library/alpine:latest
#4 DONE 1.9s

#5 [service stage-1  1/12] FROM docker.io/library/alpine:latest@sha256:21dc6063fd678b478f57c0e13f47560d0ea4eeba26dfc947b2a4f81f686b9f45
#5 DONE 0.0s

#6 [service builder 1/6] FROM docker.io/library/golang:1.23-alpine@sha256:6c5c9590f169f77c8046e45c611d3b28fe477789acd8d3762d23d4744de69812
#6 DONE 0.0s

#7 [service internal] load build context
#7 transferring context: 13.00kB 0.0s done
#7 DONE 0.0s

#8 [service builder 2/6] RUN apk add --no-cache make curl
#8 CACHED

#9 [service builder 3/6] RUN go install -tags **** github.com/golang-migrate/migrate/v4/cmd/migrate@v4.15.2
#9 CACHED

#10 [service builder 4/6] COPY . /workdir
#10 DONE 0.1s

#11 [service builder 5/6] WORKDIR /workdir
#11 DONE 0.0s

#12 [service builder 6/6] RUN go build -ldflags "-s -w" -trimpath -o app .
#12 0.228 go: downloading github.com/gofiber/fiber/v2 v2.52.5
#12 0.493 go: downloading github.com/jmoiron/sqlx v1.4.0
#12 0.843 go: downloading github.com/joho/godotenv v1.5.1
#12 0.860 go: downloading github.com/lib/pq v1.10.9
#12 0.910 go: downloading github.com/robfig/cron/v3 v3.0.1
#12 0.927 go: downloading gorm.io/driver/**** v1.5.9
#12 0.940 go: downloading gorm.io/gorm v1.25.11
#12 1.362 go: downloading github.com/google/uuid v1.6.0
#12 1.383 go: downloading github.com/mattn/go-colorable v0.1.13
#12 1.401 go: downloading github.com/mattn/go-isatty v0.0.20
#12 1.417 go: downloading github.com/mattn/go-runewidth v0.0.15
#12 1.437 go: downloading github.com/valyala/bytebufferpool v1.0.0
#12 1.447 go: downloading github.com/valyala/fasthttp v1.51.0
#12 1.652 go: downloading github.com/go-****/****/v8 v8.11.5
#12 1.703 go: downloading github.com/golang-jwt/jwt/v4 v4.5.0
#12 1.729 go: downloading github.com/go-playground/validator/v10 v10.22.1
#12 1.793 go: downloading github.com/thedevsaddam/govalidator v1.9.10
#12 2.066 go: downloading github.com/jackc/pgx/v5 v5.5.5
#12 2.173 go: downloading github.com/jinzhu/now v1.1.5
#12 2.340 go: downloading golang.org/x/sys v0.21.0
#12 3.112 go: downloading github.com/rivo/uniseg v0.2.0
#12 3.129 go: downloading github.com/andybalholm/brotli v1.0.5
#12 3.382 go: downloading github.com/klauspost/compress v1.17.0
#12 7.230 go: downloading github.com/valyala/tcplisten v1.0.0
#12 7.415 go: downloading github.com/cespare/xxhash/v2 v2.3.0
#12 7.432 go: downloading github.com/dgryski/go-rendezvous v0.0.0-20200823014737-9f7001d12a5f
#12 7.441 go: downloading golang.org/x/crypto v0.23.0
#12 7.619 go: downloading github.com/gabriel-vasile/mimetype v1.4.3
#12 10.80 go: downloading github.com/go-playground/universal-translator v0.18.1
#12 10.82 go: downloading github.com/leodido/go-urn v1.4.0
#12 10.95 go: downloading golang.org/x/text v0.15.0
#12 12.04 go: downloading github.com/jackc/pgpassfile v1.0.0
#12 12.05 go: downloading github.com/jackc/pgservicefile v0.0.0-20221227161230-091c0ba34f0a
#12 12.21 go: downloading github.com/jinzhu/inflection v1.0.0
#12 12.27 go: downloading google.golang.org/grpc v1.65.0
#12 12.71 go: downloading google.golang.org/protobuf v1.34.2
#12 12.97 go: downloading github.com/go-playground/locales v0.14.1
#12 13.86 go: downloading github.com/jackc/puddle/v2 v2.2.1
#12 13.89 go: downloading golang.org/x/net v0.25.0
#12 14.25 go: downloading google.golang.org/genproto/googleapis/rpc v0.0.0-20240528184218-531527333157
#12 14.27 go: downloading golang.org/x/sync v0.7.0
#12 DONE 109.1s

#13 [service stage-1  2/12] RUN apk --no-cache add ca-certificates tzdata     && cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime     && echo "Asia/Bangkok" > /etc/timezone     && apk del tzdata
#13 CACHED

#14 [service stage-1  3/12] COPY --from=builder /go/bin/migrate /usr/local/bin/migrate
#14 CACHED

#15 [service stage-1  4/12] COPY --from=builder /usr/local/go /usr/local/go
#15 CACHED

#16 [service stage-1  5/12] RUN mkdir -p /apps/public/pdf /apps/public/csv /apps/public/pictures /apps/public/videos     && chmod -R 755 /apps/public
#16 CACHED

#17 [service stage-1  6/12] RUN addgroup -S appgroup && adduser -S appuser -G appgroup
#17 CACHED

#18 [service stage-1  7/12] COPY --from=builder /workdir/app /bin/app
#18 DONE 0.2s

#19 [service stage-1  8/12] COPY --from=builder /workdir /apps
#19 DONE 0.2s

#20 [service stage-1  9/12] COPY .env /apps/.env
#20 DONE 0.0s

#21 [service stage-1 10/12] COPY --from=builder /usr/bin/make /usr/bin/make
#21 DONE 0.1s

#22 [service stage-1 11/12] RUN mkdir -p /home/appuser && chown -R appuser:appgroup /home/appuser
#22 DONE 0.5s

#23 [service stage-1 12/12] RUN mkdir -p /go && chown -R appuser:appgroup /go
#23 DONE 0.2s

#24 [service] exporting to image
#24 exporting layers
#24 exporting layers 0.4s done
#24 writing image sha256:b92a31a42d35e53ba46578f4ff8826c6df18e8166a363645abbde63b4cf7579b done
#24 naming to docker.io/library/learning-go-service done
#24 DONE 0.4s

#25 [service] resolving provenance for metadata file
#25 DONE 0.0s

#26 [load-balancer-learninggo internal] load .dockerignore
#26 transferring context: 2B done
#26 DONE 0.0s

#27 [load-balancer-learninggo internal] load build definition from Dockerfile
#27 transferring dockerfile: 129B done
#27 DONE 0.0s

#28 [load-balancer-learninggo internal] load metadata for docker.io/library/nginx:alpine
#28 DONE 0.0s

#29 [load-balancer-learninggo 1/2] FROM docker.io/library/nginx:alpine
#29 DONE 0.0s

#30 [load-balancer-learninggo internal] load build context
#30 transferring context: 32B done
#30 DONE 0.0s

#31 [load-balancer-learninggo 2/2] COPY nginx.conf /etc/nginx/nginx.conf
#31 CACHED

#32 [load-balancer-learninggo] exporting to image
#32 exporting layers done
#32 writing image sha256:04e0ffa5b7422889b4b1f188e21c1927c53601836fdf1561bf4b91341625bbe4 done
#32 naming to docker.io/library/learning-go-load-balancer-learninggo done
#32 DONE 0.0s

#33 [load-balancer-learninggo] resolving provenance for metadata file
#33 DONE 0.0s
 Network learning-go_learning-network  Creating
 Network learning-go_learning-network  Created
 Container ****-learninggo  Creating
 Container ****-prod-learninggo  Creating
 Container ****-prod-learninggo  Created
 Container learning-go-service-1  Creating
 Container ****-learninggo  Created
 Container learning-go-service-1  Created
 Container learning-go-load-balancer-learninggo-1  Creating
 Container learning-go-load-balancer-learninggo-1  Created
 Container ****-prod-learninggo  Starting
 Container ****-learninggo  Starting
 Container ****-prod-learninggo  Started
 Container learning-go-service-1  Starting
 Container ****-learninggo  Started
 Container learning-go-service-1  Started
 Container learning-go-load-balancer-learninggo-1  Starting
 Container learning-go-load-balancer-learninggo-1  Started
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 1999968 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Run Migrations on Prod DB)
[Pipeline] script
[Pipeline] {
[Pipeline] sshagent
[ssh-agent] Using credentials nibros_do_server
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-XXXXXX25yUB7/agent.2000224
SSH_AGENT_PID=2000227
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_8878516423096678773.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [POSTGRES_USER, REDIS_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_HOST_TEST, POSTGRES_DB, VPS_USER, VPS_HOST, REDIS_PASSWORD, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                docker exec $(docker ps --filter "name=service" --format "{{.ID}}" | head -n 1) /usr/local/bin/migrate -path /apps/internal/database/migrations -database ****://****:****@****:****/****?sslmode=disable up > migrate_output.log 2>&1 &&
                cat migrate_output.log
              
20241214234820/u create_schedulers_table (26.412367ms)
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 2000227 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Declarative: Post Actions)
[Pipeline] cleanWs
[WS-CLEANUP] Deleting project workspace...
[WS-CLEANUP] Deferred wipeout is used...
[WS-CLEANUP] done
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // withCredentials
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```
:::

## Pre-requisites

Before setting up the Jenkins pipeline, ensure the following pre-requisites are met:

- **Jenkins Server**: Jenkins server is set up and running.
- **VPS**: Virtual Private Server (VPS) is available for deployment.
- **Docker**: Docker is installed on the VPS.
- **Docker Compose**: Docker Compose is installed on the VPS.
- **Git Repository**: Git repository is set up for the project.
- **SSH Key**: SSH key is generated and added to the VPS for secure access.
- **Running Production Containers**: Ensure that the production containers are running on the VPS (if its initial deployment).
- **Makefile**: The Makefile contains commands for running migrations, tests, and building the application.

:::details View Makefile (Go)
```makefile
# Makefile

# Load environment variables from .env
ifneq (,$(wildcard ./.env))
  include .env
  export
endif

# Variables
DB_URL=postgres://$(POSTGRES_USER):$(POSTGRES_PASSWORD)@$(POSTGRES_HOST):$(POSTGRES_PORT)/$(POSTGRES_DB)?sslmode=disable
DB_URL_TEST=postgres://$(POSTGRES_USER):$(POSTGRES_PASSWORD)@$(POSTGRES_HOST):$(POSTGRES_PORT)/$(POSTGRES_DB_TEST)?sslmode=disable
MIGRATE_DIR=internal/database/migrations
MIGRATE=migrate -path=$(MIGRATE_DIR) -database $(DB_URL)
MIGRATE_TEST=migrate -path=$(MIGRATE_DIR) -database $(DB_URL_TEST)
PROTO_DIR=internal/proto
GENERATED_PROTO_DIR=internal/proto/generated
PROTO_FILES=$(wildcard $(PROTO_DIR)/*.proto)
SEEDER_DIR=internal/database/seeders

# Commands
.PHONY: migrate-create
migrate-create:
	@echo "Creating migration file: $(MIGRATE_DIR)/$(name)"
	docker compose -f ../docker/docker-compose-dev.yml run --rm \
	-e POSTGRES_USER=$(POSTGRES_USER) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	-e POSTGRES_DB=$(POSTGRES_DB) \
	-e POSTGRES_PORT=$(POSTGRES_PORT) \
	service \
	$(MIGRATE) create -ext sql -dir internal/database/migrations $(name)

.PHONY: migrate-up
migrate-up:
	@echo "Running migrations up inside Docker container"
	docker compose -f ../docker/docker-compose-dev.yml run --rm \
	-e POSTGRES_USER=$(POSTGRES_USER) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	-e POSTGRES_DB=$(POSTGRES_DB) \
	-e POSTGRES_PORT=$(POSTGRES_PORT) \
	service \
	$(MIGRATE) up

.PHONY: migrate-down
migrate-down:
	@echo "Running migrations down inside Docker container"
	docker compose -f ../docker/docker-compose-dev.yml run --rm \
	-e POSTGRES_USER=$(POSTGRES_USER) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	-e POSTGRES_DB=$(POSTGRES_DB) \
	-e POSTGRES_PORT=$(POSTGRES_PORT) \
	service \
	$(MIGRATE) down 1

.PHONY: migrate-force
migrate-force:
	@echo "Running migrations force inside Docker container"
	docker compose -f ../docker/docker-compose-dev.yml run --rm \
	-e POSTGRES_USER=$(POSTGRES_USER) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	-e POSTGRES_DB=$(POSTGRES_DB) \
	-e POSTGRES_PORT=$(POSTGRES_PORT) \
	service \
	$(MIGRATE) force $(v-force)

.PHONY: migrate-test-up
migrate-test-up:
	@echo "Running test migrations up inside Docker container"
	docker compose -f ../docker/docker-compose-test.yml run --rm \
	-e POSTGRES_USER=$(POSTGRES_USER) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	-e POSTGRES_DB=$(POSTGRES_DB_TEST) \
	-e POSTGRES_PORT=$(POSTGRES_PORT) \
	service-test \
	$(MIGRATE_TEST) up

.PHONY: migrate-test-down
migrate-test-down:
	@echo "Running test migrations down inside Docker container"
	docker compose -f ../docker/docker-compose-test.yml run --rm \
	-e POSTGRES_USER=$(POSTGRES_USER) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	-e POSTGRES_DB=$(POSTGRES_DB_TEST) \
	-e POSTGRES_PORT=$(POSTGRES_PORT) \
	service-test \
	$(MIGRATE_TEST) down 1

.PHONY: migrate-test-force
migrate-test-force:
	@echo "Running test migrations force inside Docker container"
	docker compose -f ../docker/docker-compose-test.yml run --rm \
	-e POSTGRES_USER=$(POSTGRES_USER) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	-e POSTGRES_DB=$(POSTGRES_DB_TEST) \
	-e POSTGRES_PORT=$(POSTGRES_PORT) \
	service-test \
	$(MIGRATE_TEST) force $(v-force)

.PHONY: seed-create
seed-create:
ifndef name
	$(error name is undefined. Usage: make seed-create name=<seeder_name>)
endif
	TIMESTAMP=$$(date +%Y%m%d%H%M%S); \
	echo "Creating seeder file: $(SEEDER_DIR)/$${TIMESTAMP}_$(name).sql"; \
	echo "BEGIN;" > $(SEEDER_DIR)/$${TIMESTAMP}_$(name).sql; \
	echo "INSERT INTO ..." >> $(SEEDER_DIR)/$${TIMESTAMP}_$(name).sql; \
	echo "COMMIT;" >> $(SEEDER_DIR)/$${TIMESTAMP}_$(name).sql

.PHONY: seed-run
seed-run:
ifndef file
	$(error file is undefined. Usage: make seed-run file=<seeder_file>)
endif
	@echo "Running seeder file: $(SEEDER_DIR)/$(file) inside Docker container"
	docker compose -f ../docker/docker-compose-dev.yml run --rm \
	-v $(PWD)/$(SEEDER_DIR):/seeders \
	service \
	psql postgres://$(POSTGRES_USER):$(POSTGRES_PASSWORD)@postgres:$(POSTGRES_PORT)/$(POSTGRES_DB)?sslmode=disable -f internal/database/seeders/$(file)

# Build the Go application
.PHONY: build
build:
	go build -o bin/app cmd/main.go

# Run the application
.PHONY: run
run: build
	./bin/app

# Generate Go code from proto files
.PHONY: proto
proto:
	protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative $(PROTO_FILES)

# This target sets up environment variables and runs the migrations up
.PHONY: init-env
init-env:
	@echo "Setting up environment variables..."
	@source .env && $(MAKE) migrate-up
```
:::

:::details Dockerfile (Production)
```dockerfile
FROM golang:1.23-alpine AS builder

RUN apk add --no-cache make curl

# Install golang-migrate
RUN go install -tags 'postgres' github.com/golang-migrate/migrate/v4/cmd/migrate@v4.15.2

COPY . /workdir
WORKDIR /workdir

ENV CGO_CPPFLAGS="-D_FORTIFY_SOURCE=2 -fstack-protector-all"
ENV GOFLAGS="-buildmode=pie"

# Specify output binary name explicitly
RUN go build -ldflags "-s -w" -trimpath -o app .

FROM alpine:latest

# Install necessary packages
RUN apk --no-cache add ca-certificates tzdata \
    && cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
    && echo "Asia/Bangkok" > /etc/timezone \
    && apk del tzdata

# Copy the migrate CLI
COPY --from=builder /go/bin/migrate /usr/local/bin/migrate

# Copy the go binary and set GOROOT
COPY --from=builder /usr/local/go /usr/local/go
ENV GOROOT=/usr/local/go
ENV PATH=$PATH:/usr/local/go/bin

# Create a public directory for temporary files
RUN mkdir -p /apps/public/pdf /apps/public/csv /apps/public/pictures /apps/public/videos \
    && chmod -R 755 /apps/public

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder /workdir/app /bin/app
COPY --from=builder /workdir /apps

# Copy the .env file
COPY .env /apps/.env

# Copy the make command
COPY --from=builder /usr/bin/make /usr/bin/make

# Create a writable home directory for the non-root user
RUN mkdir -p /home/appuser && chown -R appuser:appgroup /home/appuser
ENV HOME=/home/appuser

RUN mkdir -p /go && chown -R appuser:appgroup /go
# USER appuser

ENTRYPOINT ["/apps/app"]
```
:::

:::details docker-compose.yml
```yaml
name: learning-go

services:

  load-balancer-learninggo:
    build:
      context: ../gateway
      dockerfile: Dockerfile
    volumes:
      - ./logs/nginx:/var/log/nginx
    ports:
      - "50061:50051" # Expose gRPC port
      - "4011:4001"   # Expose HTTP REST port
    networks:
      - learning-network
    depends_on:
      - service

  service:
    build: 
      context: ../service
      dockerfile: Dockerfile
    networks:
      - learning-network
    depends_on:
      - postgres
    volumes:
      - public-data:/apps/public
    ports:
      - "50051"
      - "4001"
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_DB_TEST: ${POSTGRES_DB_TEST}
      POSTGRES_PORT: ${POSTGRES_PORT}
      POSTGRES_HOST: ${POSTGRES_HOST}
      GATEWAY_PORT: ${GATEWAY_PORT}
      SERVICE_GRPC_PORT: ${SERVICE_GRPC_PORT}
      SERVICE_REST_PORT: ${SERVICE_REST_PORT}
      MASTER_SERVICE_GRPC_PORT: ${MASTER_SERVICE_GRPC_PORT}
      MASTER_SERVICE_REST_PORT: ${MASTER_SERVICE_REST_PORT}
      ACTIVITIES_SERVICE_GRPC_PORT: ${ACTIVITIES_SERVICE_GRPC_PORT}
      ACTIVITIES_SERVICE_REST_PORT: ${ACTIVITIES_SERVICE_REST_PORT}
      JWT_SECRET: ${JWT_SECRET}
      REDIS_HOST: ${REDIS_HOST}
      REDIS_PORT: ${REDIS_PORT}
      REDIS_PASSWORD: ${REDIS_PASSWORD}
      REDIS_DB: ${REDIS_DB}

  postgres:
    image: postgres:13-alpine
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-postgres}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-secret}
      POSTGRES_DB: ${POSTGRES_DB:-learningdb}
    container_name: postgres-prod-learninggo
    networks:
      - learning-network
    ports:
      - "${POSTGRES_PORT:-5432}:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data

  redis:
    image: "redis:alpine"
    container_name: redis-learninggo
    networks:
      - learning-network
    ports:
      - "6379:6379"
    volumes:
      - ./redis.conf:/usr/local/etc/redis/redis.conf
    command: ["redis-server", "/usr/local/etc/redis/redis.conf", "--requirepass", "${REDIS_PASSWORD}"]
    environment:
      REDIS_PASSWORD: ${REDIS_PASSWORD}

volumes:
  postgres-data:
  public-data:

networks:
  learning-network:
    driver: bridge
```
:::

:::details Dockerfile.test (Test)
```dockerfile
FROM golang:1.23-alpine AS builder

RUN apk add --no-cache make curl postgresql-client

# Install golang-migrate
RUN go install -tags 'postgres' github.com/golang-migrate/migrate/v4/cmd/migrate@latest
RUN ln -s /go/bin/linux_amd64/migrate /usr/local/bin/migrate

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the source code
COPY . .

# Run the tests
CMD ["go", "run", "main.go"]
```
:::

:::details docker-compose-test.yml
```yaml
name: learning-go-test

services:

  load-balancer-learninggo-test:
    build:
      context: ../gateway
      dockerfile: Dockerfile
    volumes:
      - ../gateway/nginx-test.conf:/etc/nginx/nginx.conf # Use test NGINX config
    ports:
      - "50071:50051" # Expose gRPC port
      - "4071:4001"   # Expose HTTP REST port
    networks:
      - learning-go_learning-network
    depends_on:
      - service-test

  service-test:
    build: 
      context: ../service
      dockerfile: Dockerfile.test
    networks:
      - learning-go_learning-network
    ports:
      - "50051"
      - "4001"
    container_name: service-test
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB_TEST} # Use test DB
      POSTGRES_PORT: ${POSTGRES_PORT}
      POSTGRES_HOST: ${POSTGRES_HOST_TEST}
      GATEWAY_PORT: ${GATEWAY_PORT}
      SERVICE_GRPC_PORT: ${SERVICE_GRPC_PORT}
      SERVICE_REST_PORT: ${SERVICE_REST_PORT}
      MASTER_SERVICE_GRPC_PORT: ${MASTER_SERVICE_GRPC_PORT}
      MASTER_SERVICE_REST_PORT: ${MASTER_SERVICE_REST_PORT}
      ACTIVITIES_SERVICE_GRPC_PORT: ${ACTIVITIES_SERVICE_GRPC_PORT}
      ACTIVITIES_SERVICE_REST_PORT: ${ACTIVITIES_SERVICE_REST_PORT}
      JWT_SECRET: ${JWT_SECRET}
      REDIS_HOST: ${REDIS_HOST}
      REDIS_PORT: ${REDIS_PORT}
      REDIS_PASSWORD: ${REDIS_PASSWORD}
      REDIS_DB: ${REDIS_DB_TEST} # Use test Redis DB

networks:
  learning-go_learning-network:
    external: true  # Use existing network from production
```
:::

:::tip Note
Since the **network is shared** between the production and test environments, the **test containers** should communicate with the **production database and Redis instance**. Ensure that the test containers are configured to use the **test database and Redis DB**. The **test containers** use different database and Redis configurations to avoid conflicts with the production environment.
:::

## Pipeline Stages

The Jenkins pipeline script consists of the following stages:

### 1. **Clone Repository on VPS**
  - Adds GitHub to known hosts.
  - Tests SSH connection to the VPS.
  - Clones the specified Git repository into the deployment directory on the VPS.

  :::details View Script
  ```bash
  sshagent(credentials: [SSH_CREDENTIALS_ID]) {
    sh """
      # Add known hosts for GitHub
      ssh-keyscan -H github.com >> ~/.ssh/known_hosts
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} 'ssh-keyscan -H github.com >> ~/.ssh/known_hosts'
      
      # Test SSH connection first
      echo "Testing SSH connection..."
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} 'source ~/.bashrc; echo "SSH connection successful!"'
      
      # Clone the repository
      echo "Cloning repository..."
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} 'rm -rf ${VPS_DEPLOY_DIR} &&
      git clone -b rebase-test ${GIT_REPO} ${VPS_DEPLOY_DIR}'
    """
  }
  ```
  :::

### 2. **Create .env File**
  - Creates a .env file in the docker directory with environment variables.
  - Copies the .env file to the service and gateway directories.

  :::details View Script
  ```bash
  sshagent(credentials: [SSH_CREDENTIALS_ID]) {
    sh """
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
        echo "POSTGRES_USER=${POSTGRES_USER}" > ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "POSTGRES_PASSWORD=${POSTGRES_PASSWORD}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "POSTGRES_DB=${POSTGRES_DB}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "POSTGRES_DB_TEST=${POSTGRES_DB_TEST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "POSTGRES_PORT=${POSTGRES_PORT}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "POSTGRES_HOST=${POSTGRES_HOST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "POSTGRES_HOST_TEST=${POSTGRES_HOST_TEST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "GATEWAY_PORT=${GATEWAY_PORT}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "SERVICE_GRPC_PORT=${SERVICE_GRPC_PORT}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "SERVICE_REST_PORT=${SERVICE_REST_PORT}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "MASTER_SERVICE_GRPC_PORT=${MASTER_SERVICE_GRPC_PORT}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "MASTER_SERVICE_REST_PORT=${MASTER_SERVICE_REST_PORT}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "ACTIVITIES_SERVICE_GRPC_PORT=${ACTIVITIES_SERVICE_GRPC_PORT}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "ACTIVITIES_SERVICE_REST_PORT=${ACTIVITIES_SERVICE_REST_PORT}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "JWT_SECRET=${JWT_SECRET}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "REDIS_HOST=${REDIS_HOST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "REDIS_PORT=${REDIS_PORT}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "REDIS_PASSWORD=${REDIS_PASSWORD}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "REDIS_DB=${REDIS_DB}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "REDIS_DB_TEST=${REDIS_DB_TEST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        cp ${VPS_DEPLOY_DIR}/docker/.env ${VPS_DEPLOY_DIR}/service/.env &&
        cp ${VPS_DEPLOY_DIR}/docker/.env ${VPS_DEPLOY_DIR}/gateway/.env
      '
    """
  }
  ```
  :::

### 3. **Running Tests**
  - Brings down any existing test containers.
  - Brings up test containers using Docker Compose.
  - Runs Go tests inside the service-test container and outputs the results.

  :::details View Script
  ```bash
  sshagent(credentials: [SSH_CREDENTIALS_ID]) {
    sh """
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
        cd ${VPS_DEPLOY_DIR} &&
        docker compose -f docker/docker-compose-test.yml down --remove-orphans &&
        docker compose -f docker/docker-compose-test.yml up --build -d &&
        sleep 5 # Wait for containers to start
      '

      echo "Running tests.."

      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
        docker exec service-test go test -v /app/internal/tests/... > test_output.log 2>&1 &&
        cat test_output.log
      '
      echo "Tests completed."
    """
  }
  ```
  :::

### 4. **Run Migrations on Test DB**
  - Runs database migrations on the test database.
  - Brings down the test containers after migrations.

  :::details View Script
  ```bash
  sshagent(credentials: [SSH_CREDENTIALS_ID]) {
    sh """
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
        cd ${VPS_DEPLOY_DIR}/service &&

        echo "Running test migrations on test database..." &&
        make migrate-test-up &&

        echo "Migrations completed."
        echo "Downing test migrations..."

        echo "Removing test containers..."
        docker compose -f ${VPS_DEPLOY_DIR}/docker/docker-compose-test.yml down --remove-orphans
      '
    """
  }
  ```
  :::

### 5. **Build & Deploy**
  - Brings down any existing containers.
  - Builds and deploys the application using Docker Compose.
  - Outputs the build log.

  :::details View Script
  ```bash
  sshagent(credentials: [SSH_CREDENTIALS_ID]) {
    sh """
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
        cd ${VPS_DEPLOY_DIR} &&
        docker compose -f docker/docker-compose.yml down --remove-orphans &&
        docker compose -f docker/docker-compose.yml up --build -d > build_output.log 2>&1
      '
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} 'cat ${VPS_DEPLOY_DIR}/build_output.log'
    """
  }
  ```
  :::

### 6. **Run Migrations on Prod DB**
  - Runs database migrations on the production database.
  - Outputs the migration log.

  :::details View Script
  ```bash
  sshagent(credentials: [SSH_CREDENTIALS_ID]) {
    sh """
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
        docker exec \$(docker ps --filter "name=service" --format "{{.ID}}" | head -n 1) /usr/local/bin/migrate -path /apps/internal/database/migrations -database postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?sslmode=disable up > migrate_output.log 2>&1 &&
        cat migrate_output.log
      '
    """
  }
  ```
  :::

## Environment Variables

The pipeline script uses the following environment variables:

- `GIT_REPO`: Git repository URL.
- `SSH_CREDENTIALS_ID`: SSH credentials ID for accessing the VPS.
- `VPS_USER`: VPS user credentials.
- `VPS_HOST`: VPS host credentials.
- `VPS_DEPLOY_DIR`: Deployment directory on the VPS.
- `POSTGRES_*`: PostgreSQL database credentials and configuration.
- `GATEWAY_PORT`, `SERVICE_GRPC_PORT`, `SERVICE_REST_PORT`, `MASTER_SERVICE_GRPC_PORT`, `MASTER_SERVICE_REST_PORT`, `ACTIVITIES_SERVICE_GRPC_PORT`, `ACTIVITIES_SERVICE_REST_PORT`: Service ports.
- `REDIS_*`: Redis database credentials and configuration.
- `JWT_SECRET`: JWT secret for authentication.
- `BUILD_DIR`: Directory for build artifacts.

## Post Actions

The pipeline script includes the following post-build actions:

- Always cleans the workspace after the build.
- On failure, keeps the previous build up and running.

## Extras

- **Docker Compose Scaling**: The Docker Compose file allows scaling the service containers based on the environment. By specifying the number of replicas, the service can be scaled horizontally. For example:
```bash
docker compose -f docker/docker-compose.yml up --scale service=3
```

## Conclusion

The Jenkins CI/CD pipeline script for the e-learning Go project automates the deployment process, ensuring that the application is **built, tested, and deployed consistently**. By following this pipeline, the development team can streamline the deployment process and deliver updates more efficiently. The script can be customized further to include additional stages or actions based on project requirements.

In summary, the pipeline script performs the following actions:

1. **Clones the repository** on the VPS.
2. **Creates the .env file** with environment variables.
3. **Runs tests** on the service-test container.
4. **Runs migrations** on the test database.
5. **Builds and deploys** the application using Docker Compose.
6. **Runs migrations** on the production database.
7. **Cleans the workspace** after the build.

These can be your reference to create your own CI/CD pipeline strategy for your project, not just for Go projects. 

Have fun delivering your project! 🚀