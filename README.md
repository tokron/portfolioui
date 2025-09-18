# portfolioui

portfolio in development 
system architecture 

frontend - portfolioui (react)
backend - portfolio (springBoot3)

DB if needed - postgres

flowchart LR
    subgraph Frontend [Frontend - React (PortfolioUI)]
        UI[Portfolio UI] -->|REST API Calls| API
    end

    subgraph Backend [Backend - Spring Boot 3 (Portfolio)]
        API[Spring Boot API] --> DB[(PostgreSQL)]
    end
