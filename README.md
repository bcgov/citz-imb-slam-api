![GitHub](https://img.shields.io/github/license/bcgov/citz-imb)
[![CICD SLAM-API](https://github.com/bcgov/citz-imb-slam-api/actions/workflows/CICD.yml/badge.svg)](https://github.com/bcgov/citz-imb-slam-api/actions/workflows/CICD.yml)

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](<Redirect-URL>)
The project is in the very early stages of development. The codebase will be changing frequently.


# Software Licence and Application Management (SLAM-API)
This is the API Server (backend) for the [SLAM application](https://github.com/bcgov/citz-imb-slam-app)

## How to Use
Nestjs/crud is used to generate the API Endpoints.  It provides much more functionality than just vanilla endpoints - such as filtering, sorting, etc.  [Check out their documentation](https://github.com/nestjsx/crud/wiki/Requests)
## How to Contribute

Please note that this project is released with a [Contributor Code of Conduct](Code_of_Conduct.md). By participating in this project you agree to abide by its terms.

### Developer workstation setup

First create a local `.env` at the root of the repository based off [.env.template](.env.template). 

run

```bash
docker-compose up -d
```

You should see a slam-api and slam-db container in your Docker Desktop.

### CICD Pipeline
 Commits and Pull Requests to the Main branch trigger the CICD pipeline.  The Pipeline will build the image, run tests, and deploy to prod.  If the commit contains the __#release__ in the commit message, it will deploy to the test environment.  After User Acceptance Testing is approved, it will deploy to production.  Deployment to both test and prod trigger a notification in our Teams workspace.