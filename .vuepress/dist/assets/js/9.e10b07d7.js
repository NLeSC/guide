(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{211:function(e,t,o){"use strict";o.r(t);var r=o(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"code-quality"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-quality"}},[e._v("#")]),e._v(" Code Quality")]),e._v(" "),o("p",[e._v("There are several ways to improve software quality and find bugs quickly and easily.\nBy following a set of conventions, code will look 'cleaner' and be more understandable.\nIt will also help spot syntax errors and other errors early, without having to run or compile all the time.")]),e._v(" "),o("h2",{attrs:{id:"coding-style"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#coding-style"}},[e._v("#")]),e._v(" Coding style")]),e._v(" "),o("p",[e._v("A coding style gives guidance on those parts of programming that are irrelevant to the compiler or interpreter.\nFor instance, what do you call your variables? do you use spaces or tabs for indentation? Where do you put comments? etc.")]),e._v(" "),o("p",[e._v("Here is a very nice article about why coding styles matter, and increase software quality:\n"),o("a",{attrs:{href:"http://coding.smashingmagazine.com/2012/10/25/why-coding-style-matters/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improving software quality, why Coding Style Matters"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("For style guides see the different languages in "),o("router-link",{attrs:{to:"/best_practices/language_guides/languages_overview.html"}},[e._v("the Language Guides")]),e._v(".\nGoogle has a style guide for most languages "),o("a",{attrs:{href:"https://code.google.com/p/google-styleguide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("google style guide page"),o("OutboundLink")],1),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"editorconfig"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#editorconfig"}},[e._v("#")]),e._v(" Editorconfig")]),e._v(" "),o("p",[e._v("Use "),o("a",{attrs:{href:"http://editorconfig.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("editorconfig"),o("OutboundLink")],1),e._v(" to adhere to the basic code style rules.")]),e._v(" "),o("p",[e._v("Using editor config is not necessary, but saves a lot of time and keeps developers from straying\nfrom the style of choice and helps to avoid some problems caused by formatting differences\n(line ending, tabs vs spaces).")]),e._v(" "),o("p",[e._v("There is support for editorconfig in most editors.\nThe "),o("a",{attrs:{href:"http://editorconfig.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Editorconfig website"),o("OutboundLink")],1),e._v(" provides plugins for your editor of choice.\nIf you use eclipse, use "),o("a",{attrs:{href:"https://github.com/ncjones/editorconfig-eclipse",target:"_blank",rel:"noopener noreferrer"}},[e._v("this plugin"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The eScience Center has a "),o("a",{attrs:{href:"https://raw.githubusercontent.com/NLeSC/exemplum/master/.editorconfig",target:"_blank",rel:"noopener noreferrer"}},[e._v("shared editor config file"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"automatic-code-formatters-and-linters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#automatic-code-formatters-and-linters"}},[e._v("#")]),e._v(" Automatic code formatters and linters")]),e._v(" "),o("p",[e._v("These are small programs that check if your code follows a specific coding style.\nSome code formatters can find more issues (unused variables, missing documentation, ...)\nThey are often langauge dependent, and can be integrated with an editor.")]),e._v(" "),o("h2",{attrs:{id:"online-software-quality-improvement-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#online-software-quality-improvement-tools"}},[e._v("#")]),e._v(" Online software quality improvement tools")]),e._v(" "),o("p",[e._v("There are several web services that analyze code and make the quality of the code visible.")]),e._v(" "),o("p",[e._v("Code quality analysis services are web applications which have the following features:")]),e._v(" "),o("ul",[o("li",[e._v("Automaticly analyse your code after a Github push")]),e._v(" "),o("li",[e._v("Usually free for open source projects")]),e._v(" "),o("li",[e._v("Most supports multiple programming languages, but not every language will have the same level of features")]),e._v(" "),o("li",[e._v("Grade or score for the quality of all of the code in the repository")]),e._v(" "),o("li",[e._v("List of issues with the code, grouped by severity")]),e._v(" "),o("li",[e._v("Drill down to location of issue")]),e._v(" "),o("li",[e._v("Default list of checks which the service provider finds the best practice")]),e._v(" "),o("li",[e._v("Can be configured to make the list of checks more strict or relaxed")]),e._v(" "),o("li",[e._v("Can be configured to ignore files or extensions")]),e._v(" "),o("li",[e._v("Can read configuration file from repository")]),e._v(" "),o("li",[e._v("Tracks issues over time and send alerts when quality deteriorates")]),e._v(" "),o("li",[e._v("Optionally reports on code coverage generated by a CI build")])]),e._v(" "),o("p",[e._v("See the "),o("router-link",{attrs:{to:"/best_practices/language_guides/languages_overview.html"}},[e._v("language guides")]),e._v(" for good options per language.")],1),e._v(" "),o("p",[e._v("For a list of choices see http://shields.io/ or https://github.com/ripienaar/free-for-dev#code-quality")]),e._v(" "),o("h2",{attrs:{id:"name-spaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#name-spaces"}},[e._v("#")]),e._v(" Name spaces")]),e._v(" "),o("p",[e._v("If your language supports namespaces, use "),o("strong",[e._v("nl.esciencecenter")])]),e._v(" "),o("h2",{attrs:{id:"code-reviews"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-reviews"}},[e._v("#")]),e._v(" Code reviews")]),e._v(" "),o("p",[e._v("See the "),o("router-link",{attrs:{to:"/best_practices/code_review.html"}},[e._v("Code Reviews")]),e._v(" section.")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);