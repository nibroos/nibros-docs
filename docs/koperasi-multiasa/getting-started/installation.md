# Installation

## Prerequisites

- PHP 8.0.2 or higher
- Node.js 16 or above
- MySQL 8.0.2

## Setup

1. Setup environment. copy the .env.example then  change the name to .env and some of the value of it based on your environment <br>

::: details Laravel .env 
```json
APP_NAME="Koperasi Multiasa"
APP_ENV="local"
APP_KEY=
APP_DEBUG=true 
APP_URL="http://koperasi.test"

// ..

DB_CONNECTION=mysql 
DB_HOST=localhost 
DB_PORT=3307
DB_DATABASE=ubikar_local 
DB_USERNAME=root 
DB_PASSWORD= 

SANCTUM_STATEFUL_DOMAIN="localhost,localhost:3000,127.0.0.1,127.0.0.1:3000,127.0.0.1:8000,::1,koperasi"  // FRONTEND DOMAIN
FRONTEND_URL="http://192.168.1.7:63893" // FRONTEND BASE URL

MAX_FLAT_LOAN_CONTRACT=1 // MAX FLAT LOAN CONTRACT IN COOPERATIVE POLICY
MAX_DOWN_LOAN_CONTRACT=1 // MAX DOWN LOAN CONTRACT IN COOPERATIVE POLICY
```
:::

::: details Nuxt .env 

BASE_URL is the url of your laravel project
```json
BASE_URL=http://koperasi.test
```
:::

2. Get the generated laravel key in order to fill the APP_KEY value on your .env

``` sh
php artisan key:generate
```

3. Run command to install the dependency and do the migration
``` sh
composer install
php artisan migrate:fresh --seed
npm install
```

