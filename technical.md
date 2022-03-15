# Technical Documentation

## Entity Diagrams

```mermaid
erDiagram
    licensee [||--|{ software-licensee: assigned license]
    software ||--|{ software-licensee: uses
    software-licensee
```
