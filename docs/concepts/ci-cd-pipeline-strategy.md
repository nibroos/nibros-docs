# Go Jenkins CI/CD Pipeline Strategy

`7 minutes read` · Dec 22, 2024

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
Checking out Revision a4f070deb22cef694646657c5c181009d220de46 (origin/rebase-test)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f a4f070deb22cef694646657c5c181009d220de46 # timeout=10
Commit message: "add: splitting scheduler service"
 > git rev-list --no-walk 37191ed12b87f2c5dd5a65e34ec5d3d14728158e # timeout=10
First time build. Skipping changelog.
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withCredentials
Masking supported pattern matches of $POSTGRES_DB_TEST or $REDIS_DB or $POSTGRES_HOST or $SERVICE_REST_PORT or $VPS_DEPLOY_DIR or $REDIS_PORT or $JWT_SECRET or $VPS_HOST or $REDIS_PASSWORD or $MASTER_SERVICE_GRPC_PORT or $POSTGRES_PASSWORD_TEST or $MASTER_SERVICE_REST_PORT or $POSTGRES_USER or $GATEWAY_PORT or $REDIS_HOST or $REDIS_HOST_TEST or $POSTGRES_USER_TEST or $SERVICE_GRPC_PORT or $POSTGRES_PASSWORD or $POSTGRES_PORT or $POSTGRES_HOST_TEST or $POSTGRES_DB or $REDIS_PASSWORD_TEST or $VPS_USER or $POSTGRES_PORT_TEST or $REDIS_PORT_TEST or $REDIS_DB_TEST or $ACTIVITIES_SERVICE_GRPC_PORT or $ACTIVITIES_SERVICE_REST_PORT
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
SSH_AUTH_SOCK=/tmp/ssh-XXXXXX8FwRgy/agent.3302363
SSH_AGENT_PID=3302366
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_6487594937188714764.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, VPS_DEPLOY_DIR, VPS_HOST, VPS_USER, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh-keyscan -H github.com
# github.com:22 SSH-2.0-159e461a3
# github.com:22 SSH-2.0-159e461a3
# github.com:22 SSH-2.0-159e461a3
# github.com:22 SSH-2.0-159e461a3
# github.com:22 SSH-2.0-159e461a3
+ ssh -A -o StrictHostKeyChecking=no ****@**** ssh-keyscan -H github.com >> ~/.ssh/known_hosts
# github.com:22 SSH-2.0-159e461a3
# github.com:22 SSH-2.0-159e461a3
# github.com:22 SSH-2.0-159e461a3
# github.com:22 SSH-2.0-159e461a3
# github.com:22 SSH-2.0-159e461a3
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
echo Agent pid 3302366 killed;
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
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXhKQAfs/agent.3302417
SSH_AGENT_PID=3302419
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_8808046394074202937.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [POSTGRES_DB_TEST, REDIS_DB, POSTGRES_HOST, SERVICE_REST_PORT, VPS_DEPLOY_DIR, REDIS_PORT, JWT_SECRET, VPS_HOST, REDIS_PASSWORD, MASTER_SERVICE_GRPC_PORT, POSTGRES_PASSWORD_TEST, MASTER_SERVICE_REST_PORT, POSTGRES_USER, GATEWAY_PORT, REDIS_HOST, REDIS_HOST_TEST, POSTGRES_USER_TEST, SERVICE_GRPC_PORT, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_HOST_TEST, POSTGRES_DB, REDIS_PASSWORD_TEST, VPS_USER, POSTGRES_PORT_TEST, REDIS_PORT_TEST, REDIS_DB_TEST, ACTIVITIES_SERVICE_GRPC_PORT, ACTIVITIES_SERVICE_REST_PORT]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                echo "POSTGRES_USER=****" > ****/docker/.env &&
                echo "POSTGRES_PASSWORD=****" >> ****/docker/.env &&
                echo "POSTGRES_DB=****" >> ****/docker/.env &&
                echo "POSTGRES_DB_TEST=****" >> ****/docker/.env &&
                echo "POSTGRES_PORT=****" >> ****/docker/.env &&
                echo "POSTGRES_HOST=****" >> ****/docker/.env &&
                echo "POSTGRES_HOST_TEST=****" >> ****/docker/.env &&
                echo "POSTGRES_USER_TEST=****" >> ****/docker/.env &&
                echo "POSTGRES_PASSWORD_TEST=****" >> ****/docker/.env &&
                echo "POSTGRES_PORT_TEST=****" >> ****/docker/.env &&
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
                echo "REDIS_HOST_TEST=****" >> ****/docker/.env &&
                echo "REDIS_PORT_TEST=****" >> ****/docker/.env &&
                echo "REDIS_PASSWORD_TEST=****" >> ****/docker/.env &&
                echo "REDIS_DB_TEST=1" >> ****/docker/.env &&
                echo "APP_ENV=test" >> ****/docker/.env
                cp ****/docker/.env ****/service/.env &&
                cp ****/docker/.env ****/gateway/.env
              
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 3302419 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build Docker Test Image)
[Pipeline] script
[Pipeline] {
[Pipeline] sshagent
[ssh-agent] Using credentials nibros_do_server
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-XXXXXX88jcE8/agent.3302437
SSH_AGENT_PID=3302440
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_15623128674667459366.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, VPS_DEPLOY_DIR, VPS_HOST, VPS_USER, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                cd **** &&
                docker compose -f docker/docker-compose-test.yml down --remove-orphans &&
                docker compose -f docker/docker-compose-test.yml up --build -d &&
                sleep 5 # Wait for containers to start
              
#0 building with "default" instance using docker driver

#1 [service internal] load .dockerignore
#1 transferring context: 2B 0.0s done
#1 DONE 0.0s

#2 [scheduler internal] load .dockerignore
#2 transferring context: 2B 0.0s done
#2 DONE 0.0s

#3 [service internal] load build definition from Dockerfile.test
#3 transferring dockerfile: 601B 0.1s done
#3 DONE 0.1s

#4 [scheduler internal] load build definition from Dockerfile
#4 transferring dockerfile: 1.58kB 0.1s done
#4 DONE 0.1s

#5 [scheduler internal] load metadata for docker.io/library/golang:1.23-alpine
#5 DONE 1.9s

#6 [scheduler 1/8] FROM docker.io/library/golang:1.23-alpine@sha256:6c5c9590f169f77c8046e45c611d3b28fe477789acd8d3762d23d4744de69812
#6 DONE 0.0s

#7 [scheduler internal] load metadata for docker.io/library/alpine:latest
#7 DONE 1.9s

#8 [scheduler stage-1  1/12] FROM docker.io/library/alpine:latest@sha256:21dc6063fd678b478f57c0e13f47560d0ea4eeba26dfc947b2a4f81f686b9f45
#8 DONE 0.0s

#9 [scheduler internal] load build context
#9 transferring context: 472.08kB 0.1s done
#9 DONE 0.1s

#10 [service internal] load build context
#10 transferring context: 472.08kB 0.1s done
#10 DONE 0.1s

#11 [scheduler builder 2/6] RUN apk add --no-cache make curl
#11 CACHED

#12 [scheduler builder 3/6] RUN go install -tags **** github.com/golang-migrate/migrate/v4/cmd/migrate@v4.15.2
#12 CACHED

#13 [service 2/8] RUN apk add --no-cache make curl ****ql-client
#13 CACHED

#14 [service 3/8] RUN go install -tags **** github.com/golang-migrate/migrate/v4/cmd/migrate@latest
#14 CACHED

#15 [service 6/8] COPY go.mod go.sum ./
#15 CACHED

#16 [service 5/8] WORKDIR /app
#16 CACHED

#17 [service 4/8] RUN ln -s /go/bin/linux_amd64/migrate /usr/local/bin/migrate
#17 CACHED

#18 [service 7/8] RUN go mod download
#18 CACHED

#19 [scheduler builder 4/6] COPY . /workdir
#19 DONE 0.1s

#20 [service 8/8] COPY . .
#20 DONE 0.1s

#21 [scheduler builder 5/6] WORKDIR /workdir
#21 DONE 0.0s

#22 [service] exporting to image
#22 exporting layers 0.2s done
#22 writing image sha256:b7c8b67cc971d301f9850fc74c202807b268b3e79df03f49e6050d8c3859c54b
#22 writing image sha256:b7c8b67cc971d301f9850fc74c202807b268b3e79df03f49e6050d8c3859c54b done
#22 naming to docker.io/library/learning-go-test-service done
#22 DONE 0.2s

#23 [service] resolving provenance for metadata file
#23 DONE 0.0s

#24 [scheduler builder 6/6] RUN go build -ldflags "-s -w" -trimpath -o app .
#24 ...

#25 [load-balancer-learninggo internal] load .dockerignore
#25 transferring context: 2B done
#25 DONE 0.0s

#26 [load-balancer-learninggo internal] load build definition from Dockerfile
#26 transferring dockerfile: 129B 0.0s done
#26 DONE 0.0s

#27 [load-balancer-learninggo internal] load metadata for docker.io/library/nginx:alpine
#27 DONE 0.0s

#28 [load-balancer-learninggo 1/2] FROM docker.io/library/nginx:alpine
#28 DONE 0.0s

#29 [load-balancer-learninggo internal] load build context
#29 transferring context: 910B done
#29 DONE 0.0s

#30 [load-balancer-learninggo 2/2] COPY nginx.conf /etc/nginx/nginx.conf
#30 CACHED

#31 [load-balancer-learninggo] exporting to image
#31 exporting layers done
#31 writing image sha256:2382afb54daea1821d4b1967701c909d2352565b184e929d49325ed55fde9c51 done
#31 naming to docker.io/library/learning-go-test-load-balancer-learninggo done
#31 DONE 0.0s

#32 [load-balancer-learninggo] resolving provenance for metadata file
#32 DONE 0.0s

#24 [scheduler builder 6/6] RUN go build -ldflags "-s -w" -trimpath -o app .
#24 0.537 go: downloading github.com/gofiber/fiber/v2 v2.52.5
#24 0.893 go: downloading github.com/jmoiron/sqlx v1.4.0
#24 1.223 go: downloading github.com/joho/godotenv v1.5.1
#24 1.241 go: downloading github.com/lib/pq v1.10.9
#24 1.277 go: downloading github.com/robfig/cron/v3 v3.0.1
#24 1.292 go: downloading gorm.io/driver/**** v1.5.9
#24 1.304 go: downloading gorm.io/gorm v1.25.11
#24 1.809 go: downloading github.com/google/uuid v1.6.0
#24 1.836 go: downloading github.com/mattn/go-colorable v0.1.13
#24 1.859 go: downloading github.com/mattn/go-isatty v0.0.20
#24 1.878 go: downloading github.com/mattn/go-runewidth v0.0.15
#24 1.897 go: downloading github.com/valyala/bytebufferpool v1.0.0
#24 1.908 go: downloading github.com/valyala/fasthttp v1.51.0
#24 2.131 go: downloading github.com/go-****/****/v8 v8.11.5
#24 2.242 go: downloading github.com/golang-jwt/jwt/v4 v4.5.0
#24 2.276 go: downloading github.com/go-playground/validator/v10 v10.22.1
#24 2.424 go: downloading github.com/thedevsaddam/govalidator v1.9.10
#24 2.688 go: downloading github.com/jackc/pgx/v5 v5.5.5
#24 2.842 go: downloading github.com/jinzhu/now v1.1.5
#24 3.097 go: downloading golang.org/x/sys v0.21.0
#24 3.662 go: downloading github.com/rivo/uniseg v0.2.0
#24 3.682 go: downloading github.com/andybalholm/brotli v1.0.5
#24 3.792 go: downloading github.com/klauspost/compress v1.17.0
#24 7.580 go: downloading github.com/valyala/tcplisten v1.0.0
#24 7.684 go: downloading github.com/cespare/xxhash/v2 v2.3.0
#24 7.704 go: downloading github.com/dgryski/go-rendezvous v0.0.0-20200823014737-9f7001d12a5f
#24 7.718 go: downloading golang.org/x/crypto v0.23.0
#24 8.086 go: downloading github.com/gabriel-vasile/mimetype v1.4.3
#24 11.70 go: downloading github.com/go-playground/universal-translator v0.18.1
#24 11.73 go: downloading github.com/leodido/go-urn v1.4.0
#24 11.88 go: downloading golang.org/x/text v0.15.0
#24 17.35 go: downloading github.com/jackc/pgpassfile v1.0.0
#24 17.36 go: downloading github.com/jackc/pgservicefile v0.0.0-20221227161230-091c0ba34f0a
#24 17.38 go: downloading github.com/jinzhu/inflection v1.0.0
#24 17.47 go: downloading google.golang.org/grpc v1.65.0
#24 18.58 go: downloading google.golang.org/protobuf v1.34.2
#24 18.98 go: downloading github.com/go-playground/locales v0.14.1
#24 20.34 go: downloading github.com/jackc/puddle/v2 v2.2.1
#24 20.38 go: downloading golang.org/x/net v0.25.0
#24 20.98 go: downloading google.golang.org/genproto/googleapis/rpc v0.0.0-20240528184218-531527333157
#24 21.12 go: downloading golang.org/x/sync v0.7.0
#24 DONE 135.8s

#33 [scheduler stage-1  3/12] COPY --from=builder /go/bin/migrate /usr/local/bin/migrate
#33 CACHED

#34 [scheduler stage-1  4/12] COPY --from=builder /usr/local/go /usr/local/go
#34 CACHED

#35 [scheduler stage-1  2/12] RUN apk --no-cache add ca-certificates tzdata     && cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime     && echo "Asia/Bangkok" > /etc/timezone     && apk del tzdata
#35 CACHED

#36 [scheduler stage-1  5/12] RUN mkdir -p /apps/public/pdf /apps/public/csv /apps/public/pictures /apps/public/videos     && chmod -R 755 /apps/public
#36 CACHED

#37 [scheduler stage-1  6/12] RUN addgroup -S appgroup && adduser -S appuser -G appgroup
#37 CACHED

#38 [scheduler stage-1  7/12] COPY --from=builder /workdir/app /bin/app
#38 DONE 0.2s

#39 [scheduler stage-1  8/12] COPY --from=builder /workdir /apps
#39 DONE 0.2s

#40 [scheduler stage-1  9/12] COPY .env /apps/.env
#40 DONE 0.1s

#41 [scheduler stage-1 10/12] COPY --from=builder /usr/bin/make /usr/bin/make
#41 DONE 0.1s

#42 [scheduler stage-1 11/12] RUN mkdir -p /home/appuser && chown -R appuser:appgroup /home/appuser
#42 DONE 0.5s

#43 [scheduler stage-1 12/12] RUN mkdir -p /go && chown -R appuser:appgroup /go
#43 DONE 0.4s

#44 [scheduler] exporting to image
#44 exporting layers
#44 exporting layers 0.5s done
#44 writing image sha256:4fdbb2a2129c6e7ab7cf993fb926fd2e6a77060069e3276834635d1727b781f9
#44 writing image sha256:4fdbb2a2129c6e7ab7cf993fb926fd2e6a77060069e3276834635d1727b781f9 done
#44 naming to docker.io/library/learning-go-test-scheduler done
#44 DONE 0.5s

#45 [scheduler] resolving provenance for metadata file
#45 DONE 0.1s
 Network learning-go-test_learning-test-network  Creating
 Network learning-go-test_learning-test-network  Created
 Container ****-learninggo-test  Creating
 Container service-test  Creating
 Container ****-learninggo-test  Creating
 Container service-test  Created
 Container load-balancer-learninggo-test  Creating
 Container ****-learninggo-test  Created
 Container learning-go-test-scheduler-1  Creating
 Container ****-learninggo-test  Created
 Container learning-go-test-scheduler-1  Created
 Container load-balancer-learninggo-test  Created
 Container ****-learninggo-test  Starting
 Container ****-learninggo-test  Starting
 Container service-test  Starting
 Container ****-learninggo-test  Started
 Container ****-learninggo-test  Started
 Container learning-go-test-scheduler-1  Starting
 Container service-test  Started
 Container load-balancer-learninggo-test  Starting
 Container learning-go-test-scheduler-1  Started
 Container load-balancer-learninggo-test  Started
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 3302440 killed;
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
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXfA91dO/agent.3302787
SSH_AGENT_PID=3302790
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_8997632833313134157.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, VPS_DEPLOY_DIR, VPS_HOST, VPS_USER, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                cd ****/service &&

                echo "Running test migrations on test database..." &&
                make migrate-test-up &&

                echo "Migrations completed."
              
Running test migrations on test database...
Running test migrations up inside Docker container
docker compose -f ../docker/docker-compose-test.yml run --rm \
-e POSTGRES_USER=**** \
-e POSTGRES_PASSWORD=**** \
-e POSTGRES_DB=**** \
-e POSTGRES_PORT=**** \
service \
migrate -path=internal/database/migrations -database ****://****:****@****:****/****?sslmode=disable up
no change
Migrations completed.
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 3302790 killed;
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
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXg2eMGR/agent.3302807
SSH_AGENT_PID=3302810
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_718759000082864626.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, VPS_DEPLOY_DIR, VPS_HOST, VPS_USER, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ echo Running tests..
Running tests..
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                docker exec service-test go test -v /app/internal/tests/... > test_output.log 2>&1 &&
                cat test_output.log
              
=== RUN   TestCreateUser
=== RUN   TestCreateUser/success_create_user
=== RUN   TestCreateUser/error_hash_password
=== RUN   TestCreateUser/error_roleIDs_empty_error
--- PASS: TestCreateUser (0.24s)
    --- PASS: TestCreateUser/success_create_user (0.15s)
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
ok  	github.com/nibroos/elearning-go/service/internal/tests/unit/user_service	0.275s
+ echo Tests completed.
Tests completed.
+ echo Removing test containers...
Removing test containers...
+ ssh -A -o StrictHostKeyChecking=no ****@**** cd **** && docker compose -f docker/docker-compose-test.yml down --remove-orphans
 Container ****-learninggo-test  Stopping
 Container learning-go-test-scheduler-1  Stopping
 Container load-balancer-learninggo-test  Stopping
 Container learning-go-test-scheduler-1  Stopped
 Container learning-go-test-scheduler-1  Removing
 Container learning-go-test-scheduler-1  Removed
 Container ****-learninggo-test  Stopping
 Container load-balancer-learninggo-test  Stopped
 Container load-balancer-learninggo-test  Removing
 Container load-balancer-learninggo-test  Removed
 Container service-test  Stopping
 Container ****-learninggo-test  Stopped
 Container ****-learninggo-test  Removing
 Container ****-learninggo-test  Removed
 Container ****-learninggo-test  Stopped
 Container ****-learninggo-test  Removing
 Container ****-learninggo-test  Removed
 Container service-test  Stopped
 Container service-test  Removing
 Container service-test  Removed
 Network learning-go-test_learning-test-network  Removing
 Network learning-go-test_learning-test-network  Removed
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 3302810 killed;
[ssh-agent] Stopped.
[Pipeline] // sshagent
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Switch to Production Environment)
[Pipeline] script
[Pipeline] {
[Pipeline] sshagent
[ssh-agent] Using credentials nibros_do_server
$ ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXwkPixr/agent.3303058
SSH_AGENT_PID=3303061
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_9006265696492183029.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, VPS_DEPLOY_DIR, VPS_HOST, VPS_USER, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                  sed -i "s/APP_ENV=test/APP_ENV=production/" ****/docker/.env
              
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 3303061 killed;
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
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXQwZEja/agent.3303080
SSH_AGENT_PID=3303082
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_1427845450754625190.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, VPS_DEPLOY_DIR, VPS_HOST, VPS_USER, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                cd **** &&
                docker compose -f docker/docker-compose.yml down --remove-orphans &&
                docker compose -f docker/docker-compose.yml up --build -d > build_output.log 2>&1
              
 Container learning-go-load-balancer-learninggo-1  Stopping
 Container ****-learninggo  Stopping
 Container learning-go-scheduler-1  Stopping
 Container learning-go-scheduler-1  Stopped
 Container learning-go-scheduler-1  Removing
 Container learning-go-scheduler-1  Removed
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
#1 transferring context: 2B 0.0s done
#1 DONE 0.0s

#2 [scheduler internal] load .dockerignore
#2 transferring context: 2B 0.0s done
#2 DONE 0.0s

#3 [service internal] load build definition from Dockerfile
#3 transferring dockerfile: 1.58kB 0.1s done
#3 DONE 0.1s

#4 [scheduler internal] load build definition from Dockerfile
#4 transferring dockerfile: 1.58kB 0.1s done
#4 DONE 0.1s

#5 [service internal] load metadata for docker.io/library/golang:1.23-alpine
#5 DONE 1.7s

#6 [service internal] load metadata for docker.io/library/alpine:latest
#6 DONE 1.7s

#7 [scheduler stage-1  1/12] FROM docker.io/library/alpine:latest@sha256:21dc6063fd678b478f57c0e13f47560d0ea4eeba26dfc947b2a4f81f686b9f45
#7 DONE 0.0s

#8 [scheduler builder 1/6] FROM docker.io/library/golang:1.23-alpine@sha256:6c5c9590f169f77c8046e45c611d3b28fe477789acd8d3762d23d4744de69812
#8 DONE 0.0s

#9 [scheduler internal] load build context
#9 transferring context: 13.00kB 0.0s done
#9 DONE 0.0s

#10 [scheduler stage-1 11/12] RUN mkdir -p /home/appuser && chown -R appuser:appgroup /home/appuser
#10 CACHED

#11 [scheduler stage-1  6/12] RUN addgroup -S appgroup && adduser -S appuser -G appgroup
#11 CACHED

#12 [scheduler stage-1  5/12] RUN mkdir -p /apps/public/pdf /apps/public/csv /apps/public/pictures /apps/public/videos     && chmod -R 755 /apps/public
#12 CACHED

#13 [scheduler builder 5/6] WORKDIR /workdir
#13 CACHED

#14 [scheduler stage-1 10/12] COPY --from=builder /usr/bin/make /usr/bin/make
#14 CACHED

#15 [scheduler stage-1  8/12] COPY --from=builder /workdir /apps
#15 CACHED

#16 [scheduler builder 3/6] RUN go install -tags **** github.com/golang-migrate/migrate/v4/cmd/migrate@v4.15.2
#16 CACHED

#17 [scheduler stage-1  9/12] COPY .env /apps/.env
#17 CACHED

#18 [scheduler stage-1  7/12] COPY --from=builder /workdir/app /bin/app
#18 CACHED

#19 [scheduler builder 6/6] RUN go build -ldflags "-s -w" -trimpath -o app .
#19 CACHED

#20 [scheduler stage-1  3/12] COPY --from=builder /go/bin/migrate /usr/local/bin/migrate
#20 CACHED

#21 [scheduler builder 4/6] COPY . /workdir
#21 CACHED

#22 [scheduler stage-1  4/12] COPY --from=builder /usr/local/go /usr/local/go
#22 CACHED

#23 [scheduler builder 2/6] RUN apk add --no-cache make curl
#23 CACHED

#24 [scheduler stage-1  2/12] RUN apk --no-cache add ca-certificates tzdata     && cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime     && echo "Asia/Bangkok" > /etc/timezone     && apk del tzdata
#24 CACHED

#25 [scheduler stage-1 12/12] RUN mkdir -p /go && chown -R appuser:appgroup /go
#25 CACHED

#26 [service internal] load build context
#26 transferring context: 13.00kB 0.1s done
#26 DONE 0.1s

#27 [scheduler] exporting to image
#27 exporting layers done
#27 writing image sha256:3dfb0087062d217146a99e36a1133791adf9d6ea0058deffa8c6c87453501a84 done
#27 naming to docker.io/library/learning-go-scheduler done
#27 DONE 0.0s

#28 [service] exporting to image
#28 exporting layers done
#28 writing image sha256:948d953901c3c5dbbb924703d200761669f85c1c09db1003716ee2d7c8567826 done
#28 naming to docker.io/library/learning-go-service done
#28 DONE 0.0s

#29 [service] resolving provenance for metadata file
#29 DONE 0.0s

#30 [scheduler] resolving provenance for metadata file
#30 DONE 0.0s

#31 [load-balancer-learninggo internal] load .dockerignore
#31 transferring context: 2B done
#31 DONE 0.0s

#32 [load-balancer-learninggo internal] load build definition from Dockerfile
#32 transferring dockerfile: 129B 0.0s done
#32 DONE 0.0s

#33 [load-balancer-learninggo internal] load metadata for docker.io/library/nginx:alpine
#33 DONE 0.0s

#34 [load-balancer-learninggo 1/2] FROM docker.io/library/nginx:alpine
#34 DONE 0.0s

#35 [load-balancer-learninggo internal] load build context
#35 transferring context: 32B done
#35 DONE 0.0s

#36 [load-balancer-learninggo 2/2] COPY nginx.conf /etc/nginx/nginx.conf
#36 CACHED

#37 [load-balancer-learninggo] exporting to image
#37 exporting layers done
#37 writing image sha256:04e0ffa5b7422889b4b1f188e21c1927c53601836fdf1561bf4b91341625bbe4 done
#37 naming to docker.io/library/learning-go-load-balancer-learninggo done
#37 DONE 0.0s

#38 [load-balancer-learninggo] resolving provenance for metadata file
#38 DONE 0.0s
 Network learning-go_learning-network  Creating
 Network learning-go_learning-network  Created
 Container ****-prod-learninggo  Creating
 Container ****-learninggo  Creating
 Container ****-prod-learninggo  Created
 Container learning-go-scheduler-1  Creating
 Container learning-go-service-1  Creating
 Container ****-learninggo  Created
 Container learning-go-scheduler-1  Created
 Container learning-go-service-1  Created
 Container learning-go-load-balancer-learninggo-1  Creating
 Container learning-go-load-balancer-learninggo-1  Created
 Container ****-learninggo  Starting
 Container ****-prod-learninggo  Starting
 Container ****-learninggo  Started
 Container ****-prod-learninggo  Started
 Container learning-go-scheduler-1  Starting
 Container learning-go-service-1  Starting
 Container learning-go-scheduler-1  Started
 Container learning-go-service-1  Started
 Container learning-go-load-balancer-learninggo-1  Starting
 Container learning-go-load-balancer-learninggo-1  Started
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 3303082 killed;
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
SSH_AUTH_SOCK=/tmp/ssh-XXXXXXnOPK4o/agent.3303120
SSH_AGENT_PID=3303123
Running ssh-add (command line suppressed)
Identity added: /var/jenkins_home/workspace/e-learning/build-test@tmp/private_key_12729906025566533023.key (nibrosmaverick3@gmail.com)
[ssh-agent] Started.
[Pipeline] {
[Pipeline] sh
Warning: A **** was passed to "sh" using Groovy String interpolation, which is insecure.
		 Affected argument(s) used the following variable(s): [REDIS_DB, POSTGRES_HOST, VPS_HOST, REDIS_PASSWORD, POSTGRES_PASSWORD_TEST, POSTGRES_USER, POSTGRES_USER_TEST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_HOST_TEST, POSTGRES_DB, REDIS_PASSWORD_TEST, VPS_USER, POSTGRES_PORT_TEST, REDIS_DB_TEST]
		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
+ ssh -A -o StrictHostKeyChecking=no ****@**** 
                docker exec $(docker ps --filter "name=service" --format "{{.ID}}" | head -n 1) /usr/local/bin/migrate -path /apps/internal/database/migrations -database ****://****:****@****:****/****?sslmode=disable up > migrate_output.log 2>&1 &&
                cat migrate_output.log
              
no change
[Pipeline] }
$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 3303123 killed;
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
DB_URL_TEST=postgres://$(POSTGRES_USER_TEST):$(POSTGRES_PASSWORD_TEST)@$(POSTGRES_HOST_TEST):$(POSTGRES_PORT_TEST)/$(POSTGRES_DB_TEST)?sslmode=disable
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
	-e POSTGRES_USER=$(POSTGRES_USER_TEST) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD_TEST) \
	-e POSTGRES_DB=$(POSTGRES_DB_TEST) \
	-e POSTGRES_PORT=$(POSTGRES_PORT_TEST) \
	service \
	$(MIGRATE_TEST) up

.PHONY: migrate-test-down
migrate-test-down:
	@echo "Running test migrations down inside Docker container"
	docker compose -f ../docker/docker-compose-test.yml run --rm \
	-e POSTGRES_USER=$(POSTGRES_USER_TEST) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD_TEST) \
	-e POSTGRES_DB=$(POSTGRES_DB_TEST) \
	-e POSTGRES_PORT=$(POSTGRES_PORT_TEST) \
	service \
	$(MIGRATE_TEST) down 1

.PHONY: migrate-test-force
migrate-test-force:
	@echo "Running test migrations force inside Docker container"
	docker compose -f ../docker/docker-compose-test.yml run --rm \
	-e POSTGRES_USER=$(POSTGRES_USER_TEST) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD_TEST) \
	-e POSTGRES_DB=$(POSTGRES_DB_TEST) \
	-e POSTGRES_PORT=$(POSTGRES_PORT_TEST) \
	service \
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
      SERVICE_TYPE: main

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
      - "${REDIS_PORT:-6379}:6379"
    volumes:
      - ./redis.conf:/usr/local/etc/redis/redis.conf
    command: ["redis-server", "/usr/local/etc/redis/redis.conf", "--requirepass", "${REDIS_PASSWORD}"]
    environment:
      REDIS_PASSWORD: ${REDIS_PASSWORD}

  scheduler:
    build:
      context: ../service
      dockerfile: Dockerfile
    networks:
      - learning-network
    depends_on:
      - postgres
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
      SERVICE_TYPE: scheduler

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

  load-balancer-learninggo:
    build:
      context: ../gateway
      dockerfile: Dockerfile
    container_name: load-balancer-learninggo-test
    volumes:
      - ../gateway/nginx-test.conf:/etc/nginx/nginx.conf # Use test NGINX config
    ports:
      - "50071:50051" # Expose gRPC port
      - "4071:4001"   # Expose HTTP REST port
    networks:
      - learning-test-network
    depends_on:
      - service

  service:
    build: 
      context: ../service
      dockerfile: Dockerfile.test
    networks:
      - learning-test-network
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
      REDIS_HOST: ${REDIS_HOST_TEST}
      REDIS_PORT: ${REDIS_PORT_TEST}
      REDIS_PASSWORD: ${REDIS_PASSWORD_TEST}
      REDIS_DB: ${REDIS_DB_TEST} # Use test Redis DB
      SERVICE_TYPE: main
  
  postgres:
    image: postgres:13-alpine
    container_name: postgres-learninggo-test
    environment:
      POSTGRES_USER: ${POSTGRES_USER_TEST:-postgres}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD_TEST:-secret}
      POSTGRES_DB: ${POSTGRES_DB_TEST:-learningdb}
    networks:
      - learning-test-network
    ports:
      - "5433:5432"
    volumes:
      - postgres-test-data:/var/lib/postgresql/data

  redis:
    image: "redis:alpine"
    container_name: redis-learninggo-test
    networks:
      - learning-test-network
    ports:
      - "6380:6379"
    volumes:
      - ./redis.conf:/usr/local/etc/redis/redis.conf
    command: ["redis-server", "/usr/local/etc/redis/redis.conf", "--requirepass", "${REDIS_PASSWORD_TEST}"]
    environment:
      REDIS_PASSWORD: ${REDIS_PASSWORD_TEST} # Use test Redis password

  scheduler:
    build:
      context: ../service
      dockerfile: Dockerfile
    networks:
      - learning-test-network
    depends_on:
      - postgres
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
      REDIS_HOST: ${REDIS_HOST_TEST}
      REDIS_PORT: ${REDIS_PORT_TEST}
      REDIS_PASSWORD: ${REDIS_PASSWORD_TEST}
      REDIS_DB: ${REDIS_DB_TEST} # Use test Redis DB
      SERVICE_TYPE: scheduler

volumes:
  postgres-test-data:

networks:
  learning-test-network:
    driver: bridge
```
:::

:::tip 💡 Tips
- You can use **shared network** between the production and test environments, the **test containers** should communicate with the **production database and Redis instance**. Ensure that the test containers are configured to use the **test database and Redis DB**. The **test containers** use different database and Redis configurations to avoid conflicts with the production environment.
- The production must be running for the tests to pass, you can also use a separate network for the test environment to avoid this, by creating new service on the test environment that will run the database and redis similar to the production environment. Im not creating a new service for the test environment because the resources are limited, for the real world scenario you should create a new service for the test environment.
- Since the main app potentially scales, the **scheduler** service must be running in **different container**, We don't want to run into issues where the main app is running in multiple instances and the scheduler is running in one of the instances, this will cause the scheduler to run multiple times, which is not what we want. 


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
        echo "POSTGRES_USER_TEST=${POSTGRES_USER_TEST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "POSTGRES_PASSWORD_TEST=${POSTGRES_PASSWORD_TEST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "POSTGRES_PORT_TEST=${POSTGRES_PORT_TEST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
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
        echo "REDIS_HOST_TEST=${REDIS_HOST_TEST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "REDIS_PORT_TEST=${REDIS_PORT_TEST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "REDIS_PASSWORD_TEST=${REDIS_PASSWORD_TEST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "REDIS_DB_TEST=${REDIS_DB_TEST}" >> ${VPS_DEPLOY_DIR}/docker/.env &&
        echo "APP_ENV=${APP_ENV}" >> ${VPS_DEPLOY_DIR}/docker/.env
        cp ${VPS_DEPLOY_DIR}/docker/.env ${VPS_DEPLOY_DIR}/service/.env &&
        cp ${VPS_DEPLOY_DIR}/docker/.env ${VPS_DEPLOY_DIR}/gateway/.env
      '
    """
  }
  ```
  :::

### 3. **Build Docker Test Image**
  - Brings down any existing test containers.
  - Brings up test containers using Docker Compose.
  - Waits for the containers to start.

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
    """
  }
  ```
  :::

### 4. **Run Migrations on Test DB**
  - Runs database migrations on the test database.

  :::details View Script
  ```bash
  sshagent(credentials: [SSH_CREDENTIALS_ID]) {
    sh """
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
        cd ${VPS_DEPLOY_DIR}/service &&

        echo "Running test migrations on test database..." &&
        make migrate-test-up &&

        echo "Migrations completed."
      '
    """
  }
  ```
  :::


### 5. **Running Tests**
  - Runs tests on the service-test container.
  - Outputs the test log.
  - Brings down the test containers after running tests.

  :::details View Script
  ```bash
  sshagent(credentials: [SSH_CREDENTIALS_ID]) {
    sh """
      echo "Running tests.."

      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
        docker exec service-test go test -v /app/internal/tests/... > test_output.log 2>&1 &&
        cat test_output.log
      '
      echo "Tests completed."

      echo "Removing test containers..."
      ssh -A -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} 'cd ${VPS_DEPLOY_DIR} && docker compose -f docker/docker-compose-test.yml down --remove-orphans'
    """
  }
  ```
  :::

### 6. **Build & Deploy**
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

### 7. **Run Migrations on Prod DB**
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