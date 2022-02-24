```
oc process -f ./deploy-db-template.yml -p NAMESPACE=${{ secrets.OPENSHIFT_NAMESPACE }} | oc apply -f -
```

oc process -f ./deploy-db-template.yml -p NAMESPACE=ca94a8-tools | oc apply -f -

oc process -f ./deploy-api-template.yml -p NAMESPACE=ca94a8-tools -p TAG=8e793f0 -p PORT=3000 | oc apply -f -

docker run --name slam-db -p 5432:5432 -e POSTGRES_PASSWORD=snowball -e POSTGRES_DB=slam-db -d postgres:14.2-alpine3.15