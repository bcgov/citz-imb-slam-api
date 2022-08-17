# Technical Documentation

All id fields are of type UUID

## Entity Diagram

```mermaid
erDiagram
    licensee ||--o{ assigned-license: "is assigned"
    software ||--o{ assigned-license: "is assigned to"
    licensee {
        string id
        string name
        string email
        string role
        string notes
        date created
        date modified
    }
    software {
        string id
        string title
        string publisher
        string administrator
        string notes
        number quantity
        date renewal
        date created
        date modified
    }
    assigned-license {
        string id
        string licenseeId
        string softwareId
        date created
        date modified
    }

```
