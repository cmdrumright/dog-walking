# DeShawn's Dog Walking

## Dependancy Graph
```mermaid
flowchart TD
    main["main"]
    Walkers(["Walkers"])
    CityList(["CityList"])
    Assignments(["Assignments"])
    RegisterdPets(["RegisterdPets"])
    database[("database")]
    main-->Walkers
    main-->CityList
    main-->Assignments
    main-->RegisterdPets
    Walkers-->database
    CityList-->database
    Assignments-->database
    RegisterdPets-->database
```

## Sequence Diagram
```mermaid
sequenceDiagram
    participant main
    participant Walkers
    participant CityList
    participant RegisteredPets
    participant Assignments
    participant Database
    main->>Walkers: I need the function reference for generating HTML for cities
    Walkers-->>main: Gladly.
    main->>CityList: I need the function reference for generating HTML for cities
    CityList-->>main: Sure! Here you go.
    main->>RegisteredPets: Provide the HTML generation function for pets
    RegisteredPets-->>main: Here is my wonderful RegisteredPets function.
    main->>Assignments: May I have the HTML generation function for assignments
    Assignments-->>main: Absolutely.
    Note right of main: Invoke CityList function
    CityList-->>Database: I need all the city objects
    Database-->>CityList: Here's a copy of them
    loop
        CityList->>CityList: Convert each object to an `<li>`
    end
    CityList-->>main: Here's all the generated HTML
    Note right of main: Invoke Walkers function
    Walkers-->>Database: I need all the walker objects
    Database-->>Walkers: Here's a copy of them
    loop
        Walkers->>Walkers: Convert each object to an `<li>`
    end
    Walkers-->>main: Here's all the generated HTML
    Note right of main: Invoke RegisteredPets function
    RegisteredPets-->>Database: I need all the pet objects
    Database-->>RegisteredPets: Here's a copy of them
    loop
        RegisteredPets->>RegisteredPets: Convert each object to an `<li>`
    end
    RegisteredPets-->>main: Here's all the generated HTML
    Note right of main: Invoke Assignments function
    Assignments-->>Database: I need all the assignment objects
    Database-->>Assignments: Here's a copy of them
    loop
        Assignments->>Assignments: Convert each object to an `<li>`
    end
    Assignments-->>main: Here's all the generated HTML
    Note right of main: Update the innerHTML of the <main> element in the DOM.
```

## Entity Relationship Diagram
```mermaid
erDiagram
    WALKER |o--o{ PET : walks
    WALKER {
        int id PK "Generated id"
        string name "full name"
        string email
        string city
    }
    PET {
        int id PK
        string name 
        int walkerId FK
    }
```
