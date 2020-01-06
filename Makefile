.DEFAULT_GOAL	:= help

USERNAME_LOCAL	= "$(shell whoami)"
UID_LOCAL		= "$(shell id -u)"
GID_LOCAL		= "$(shell id -g)"

NODE_IMAGE	= "node_1016_alpine:0.1.0"

build_node_image: ## Build node image: make build_image
	docker build --force-rm --rm \
		--build-arg USERNAME_LOCAL=${USERNAME_LOCAL} \
		--build-arg UID_LOCAL=${UID_LOCAL} \
		--build-arg GID_LOCAL=${GID_LOCAL} \
		-t ${NODE_IMAGE} ./docker

npm: ## Execute npm with node image: make npm COMMAND="start"
	docker run --rm -v $$PWD/app:/app -w="/app" ${NODE_IMAGE} sh -c "npm ${COMMAND}"

## Help ##
help:
	@printf "\033[31m%-25s %-50s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-25s %-50s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-25s\033[0m %-49s \033[34m%s\033[0m\n", $$1, $$2, $$3}'