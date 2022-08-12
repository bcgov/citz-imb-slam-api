# Database Setup

Only needs to be completed once per namespace, unless configuration changes.

Does not need to be done again if database schema (ie tables, columns, etc.) changes. Dev environment will automatically update. Process for updating test and prod to be developed.

1. Setup OpenShift Secrets

    - Secret name = slam_db
    - Keys:
        - POSTGRES_DB - the name of the database
        - POSTGRES_PASSWORD - the password for the database
        - POSTGRES_USER - the name of the user for the database
        - POSTGRES_SYNCHRONIZE - set to true for dev environment, false for test and prod

2. Login to OC command line, changing to the openshift directory

3. Run the following, changing _<OPENSHIFT_NAMESPACE>_ for the appropriate namespace

```
oc process -f ./deploy-db-template.yml -p NAMESPACE=<OPENSHIFT_NAMESPACE> | oc apply -f -
```
