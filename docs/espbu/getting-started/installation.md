# Installation

## Prerequisites

- PHP 8.0.2 or higher
- Node.js version 8.9 or above
- MySQL 8.0.2
- wkhtmltopdf, if export PDF is needed. Take a look at [Laravel Snappy Docs](https://github.com/barryvdh/laravel-snappy)

## Setup

1. Setup environment. copy the .env.example then  change the name to .env and some of the value of it based on your environment <br>

```json
APP_NAME="E-SPBU"
APP_ENV="local"
APP_KEY=
APP_DEBUG=true 
APP_URL="http://espbu.test"

// ..

DB_CONNECTION=mysql 
DB_HOST=localhost 
DB_PORT=3307
DB_DATABASE=ubikar_local 
DB_USERNAME=root 
DB_PASSWORD= 

// ..

WKHTML_PDF_BINARY="C:/wkhtmltopdf/bin/wkhtmltopdf.exe"
```
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

