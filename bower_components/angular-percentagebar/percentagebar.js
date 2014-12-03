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
                        red: parseInt(data.red, 10),
                        green: parseInt(data.green, 10)
                    };
                    // GET TOTAL
                    var total = 0;
                    total = nums.red + nums.green;
                    var red_percentage = (nums.red / total) * 100;
                    return {
                        red: red_percentage,
                        green: 100 - red_percentage,
                        // CREATE UI FRIENDLY PERCENTAGE
                        green_rounded: Math.floor(100 - red_percentage)
                    };
                };

                $scope.$watch('data', function() {
                    $scope.output = $scope.calculateToPercentage($scope.data);
                });
            },
            template: [
                // PARENT DIV
                "<div class='animated' ng-class=\"{'grow': options.animation !== false}\">",
                // RED BAR
                "<div style='float: left; width: {{output.red}}%; height: 10px; background-color: {{ options.colour.red || \"red\"  }};'></div>",
                // GREEN BAR
                "<div style='float:right; width: {{output.green}}%; height: 10px; background-color: {{ options.colour.green || \"green\"  }} '></div>",
                // LABEL
                "<p ng-hide=\"options.label === false\" style='padding:0px;text-align:center;'>{{output.green_rounded}}%</p>",
                // IF NO LABEL ADD PADDING (BREAK)
                "<br ng-show=\" options.label === false \" />",
                "</div>"
            ].join('')
        };
    });