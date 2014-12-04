A simple angular plugin for creating simple green and red progress bars

Demo: http://louisbichard.github.io/angular-percentagebar/


Install
-------

Installation via bower: 

	bower install angular-percentagebar

Installation via git clone: 

	git clone https://github.com/louisbichard/angular-percentagebar.git

Add module dependency
---------------------

You need to ensure that the module is added as a dependency.

	var app = angular.module("app", ["percentagebar"]);

Add component
-------------

    <percentagebar data="{incomplete: 3, complete: 5}"></percentagebar>


