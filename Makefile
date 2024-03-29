#!make
include .env
export

default:	| setup build

init:
	cp .env.dist .env

setup:
	npm install

build:
	npm run build

serve:
	./node_modules/.bin/coveops serve \
		--org-id $(COVEO_ORG_ID) \
		--token $(COVEO_TOKEN) \
		--port $(SERVER_PORT)

pack: 
	npm pack

publish:
	npm publish --access public

	
.PHONY: default init setup build serve pack publish