# Technical Documentation

## Entity Diagrams

```mermaid
erDiagram
    licensee ||--|{ software-licensee: assigned 
    software ||--|{ software-licensee: uses
    software-licensee
```
