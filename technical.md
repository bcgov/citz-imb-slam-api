# Technical Documentation

## Entity Diagrams

```mermaid
erDiagram
    licensee ||--|| assigned-license: is
    licensee {
        string id "uuid"
        string title
        string publisher
        string administrator
        date created
        date modified
    }
    software ||--|| assigned-license: has
    
```
