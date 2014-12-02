A simple angular plugin for creating simple green and red progress bars

Demo: http://louisbichard.github.io/angular-percentagebar/


Install
-------

Via bower: 

	bower install angular-percentagebar
	
Git clone: 

	git clone https://github.com/louisbichard/angular-percentagebar.git

Add module dependency
---------------------

You need to ensure that the module is added as a dependency.

	var app = angular.module("app", ["percentagebar"]);

Add component
-------------

    <percentagebar data="{red: 3, green: 5}"></percentagebar>


