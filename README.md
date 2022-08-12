![GitHub](https://img.shields.io/github/license/bcgov/citz-imb)
[![CICD SLAM-API](https://github.com/bcgov/citz-imb-slam-api/actions/workflows/CICD.yml/badge.svg)](https://github.com/bcgov/citz-imb-slam-api/actions/workflows/CICD.yml)

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](Redirect-URL)
The project is in the very early stages of development. The codebase will be changing frequently.

# Software Licence and Application Management (SLAM-API)

This is the API Server (backend) for the [SLAM application](https://github.com/bcgov/citz-imb-slam-app)

## How to Use

Nestjs/crud is used to generate the API Endpoints. It provides much more functionality than just vanilla endpoints - such as filtering, sorting, etc. [Check out their documentation](https://github.com/nestjsx/crud/wiki/Requests)

## How to Contribute

Please note that this project is released with a [Contributor Code of Conduct](Code_of_Conduct.md). By participating in this project you agree to abide by its terms.

### Developer workstation setup

Create a .env file at the root of the project directory.

Copy the list of variables from the .env-template into your .env file.

| Variable            | Required | Development Value |
| ------------------- | :------: | ----------------: |
| POSTGRES_USER       |    Y     |          postgres |
| POSTGRES_PASSWORD   |    Y     |          snowball |
| POSTGRES_DB         |    Y     |           slam_db |
| POSTGRES_HOST       |    Y     |          postgres |
| POSTGRES_SYNCRONIZE |    Y     |              true |
| POSRGRES_PORT       |          |              5432 |

Run the following command into local terminal:

```
docker-compose up --build postgres slam-api pg-admin
```

The following output in terminal should show that all components of the SLAM! Application are healthy docker containers.

### CICD Pipeline

Commits and Pull Requests to the Main branch trigger the CICD pipeline. The Pipeline will build the image, run tests, and deploy to prod. If the commit contains the **#release** in the commit message, it will deploy to the test environment. After User Acceptance Testing is approved, it will deploy to production. Deployment to both test and prod trigger a notification in our Teams workspace.
