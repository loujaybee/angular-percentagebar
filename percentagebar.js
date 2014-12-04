angular.module("angular-percentagebar", [])
    .directive('percentagebar', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                data: '=data',
                options: '=options'
            },
            transclude: true,
            controller: function($scope) {

                $scope.calculateToPercentage = function(data) {
                    // ENSURE THEY ARE INTEGERS
                    var nums = {
                        incomplete: parseInt(data.incomplete, 10),
                        complete: parseInt(data.complete, 10)
                    };
                    // GET TOTAL
                    var total = 0;
                    total = nums.incomplete + nums.complete;
                    var incomplete_percentage = (nums.incomplete / total) * 100;
                    return {
                        incomplete: incomplete_percentage,
                        complete: 100 - incomplete_percentage,
                        // CREATE UI FRIENDLY PERCENTAGE
                        complete_rounded: Math.floor(100 - incomplete_percentage)
                    };
                };

                $scope.$watch('data', function() {
                    $scope.output = $scope.calculateToPercentage($scope.data);
                });
            },
            template: [
                // PARENT DIV
                "<div class='animated' ng-class=\"{'grow': options.animation !== false}\">",
                "<style>.animated {-webkit-animation-duration: 1s;animation-duration: 1s;-webkit-animation-fill-mode: both;animation-fill-mode: both;}@-webkit-keyframes grow {0% {-webkit-transform: scaleX(0.05);transform: scaleX(0.05);visibility: visible;}100% {-webkit-transform: translateX(0);transform: translateX(0);}}@keyframes grow {0% {-webkit-transform: translateX(-100%);transform: translateX(-100%);visibility: visible;}100% {-webkit-transform: translateX(0);transform: translateX(0);}}.grow {-webkit-animation-name: grow;animation-name: grow;}</style>",
                // INCOMPLETE BAR
                "<div style='float: left; width: {{output.incomplete}}%; height: 5px; background-color: {{ options.colour.incomplete || \"green\"  }}; opacity: 0.2;'></div>",
                // COMPLETE BAR
                "<div style='float:right; width: {{output.complete}}%; height: 5px; background-color: {{ options.colour.complete || \"green\"  }} '></div>",
                // LABEL
                "<p ng-hide=\"options.label === false\" style='padding:0px;text-align:center;'>{{output.complete_rounded}}%</p>",
                // IF NO LABEL ADD PADDING (BREAK)
                "<br ng-show=\" options.label === false \" />",
                "</div>"
            ].join('')
        };
    });