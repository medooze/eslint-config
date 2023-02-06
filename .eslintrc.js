module.exports = {
	"env"   : {
		"node"      : true,
		"commonjs"  : true,
		"es2021"    : true,
	},
	"plugins"   : ["medooze"],
	"extends"   : "eslint:recommended",
	"overrides" : [
	],
	"parserOptions" : {
		"ecmaVersion": "latest",
	},
	"rules" : {
		"no-unused-vars"            : "off",
		"no-var"                    : "warn",
		"no-void"                   : "warn",
		"no-useless-return"         : "warn",
		"no-mixed-spaces-and-tabs"  : [ "error", "smart-tabs" ],
		"operator-linebreak"        : [ "error", "before" ],
		"linebreak-style"           : [ "error", "unix" ],
		"no-trailing-spaces"        : "error",
		"eol-last"                  : [ "warn", "always" ],
		"no-multiple-empty-lines"   : [
			"warn",
			{
				"max"       : 3,
				"maxBOF"    : 0,
				"maxEOF"    : 1
			}
		],
		"spaced-comment": [
			"off",
			"never",
			{
				"block" : {
					"markers": ["*"],
				},
			}
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase"            : 1,
				"VariableDeclarator"    : "first",
				"CallExpression"        : { "arguments": 1 },
				"FunctionDeclaration"   : { "body": 1, "parameters": 1 },
				"FunctionExpression"    : { "parameters": 1 },
				"ArrayExpression"       : 1,
				"ObjectExpression"      : 1
			},
		],
		"medooze/key-spacing-indent": [
			"error",
			{
				"singleLine":
				{
					"beforeColon"   : false,
					"afterColon"    : true
				},
				"align" :
				{
					"beforeColon"   : true,
					"afterColon"    : true,
					"on"            : "colon",
					"indent"        : 4
 				}
			}
		],
		"arrow-body-style"                  : [ "error", "as-needed" ],
		"function-call-argument-newline"    : [ "error", "consistent" ],
		"medooze/brace-style"               : [ "error", "medooze", { "allowSingleLine": true }],
		"lines-between-class-members"       : [ "error", "always", { "exceptAfterSingleLine": true }],
		"implicit-arrow-linebreak"          : [ "error", "beside" ],
		"arrow-spacing"                     : [ "error", { "before": true, "after": true }],
		"keyword-spacing"                   : [ "error", { "before": true, "after": true }],
		"block-spacing"                     : [ "error", "always" ],
		"space-before-blocks"               : [ "error", "always" ],
		"space-infix-ops"                   : ["error"],
		"comma-spacing"                     : [ "error", { "before": false, "after": true }],
		"switch-colon-spacing"              : [ "error", { "before": false, "after": true }],
		"rest-spread-spacing"               : [ "error", "never" ],
		"array-bracket-spacing"             : [
			"error",
			"always",
			{
				"singleValue"       : false,
				"objectsInArrays"   : false,
				"arraysInArrays"    : false,
			}
		],
		"object-curly-spacing"  : [
			"error",
			"always"
		],
		"object-curly-newline"  : [
			"error",
			{
				"consistent"    : true,
				"minProperties" : 3
			}
		],
		"semi-spacing"                  : "error",
		"space-before-function-paren"   : [ "error", "never" ],
		"template-curly-spacing"        : [ "error", "never" ],

		// syntax
		"quotes"    : [ "error", "double" ],
		"semi"      : [ "off", "always" ],

		// code
		"no-implicit-globals"   : "warn",
		"no-implicit-coercion"  : [ "warn", { "allow": ["!!"] }],
		"camelcase"             : "warn",
		"eqeqeq"                : "error",
	}
};
