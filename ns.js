module.exports = {
	"clean": [
		`rm -rf lib src/*.js src/*.d.ts coverage`
	],
	"build": [
		`@clean`,
		`tsc -p tsconfig.publish.json`
	]
};