.PHONY: dev start build lint install clean db-migrate db-push db-seed db-studio db-reset help

# Default target
.DEFAULT_GOAL := help

# Development
dev: ## Start development server
	npm run dev

start: ## Start production server
	npm run start

build: ## Build for production
	npm run build

lint: ## Run ESLint
	npm run lint

# Dependencies
install: ## Install dependencies
	npm install

clean: ## Remove node_modules and .next
	rm -rf node_modules .next

reinstall: clean install ## Clean and reinstall dependencies

# Database
db-migrate: ## Run Prisma migrations (dev)
	npm run db:migrate

db-push: ## Push schema to database without migrations
	npm run db:push

db-seed: ## Seed the database
	npm run db:seed

db-studio: ## Open Prisma Studio
	npm run db:studio

db-generate: ## Generate Prisma client
	npx prisma generate

db-reset: ## Reset database (drop, migrate, seed)
	npx prisma migrate reset

# Setup
setup: install db-generate ## Initial project setup

# Help
help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'
