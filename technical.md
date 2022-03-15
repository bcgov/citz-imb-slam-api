# Technical Documentation

## Entity Diagrams

```mermaid
erDiagram
    licensee ||--|{ software-licensee: is assigned {
        string id
        string title
        string publisher
        string administrator
        date created
        date modified
    }
    software ||--|{ software-licensee: assigned to {
        string id
        string title
        string publisher
        string administrator
        date created
        date modified
    }
    software-licensee {
        string id
        string title
        string publisher
        string administrator
        date created
        date modified
    }
```