SU.directive('percentagebar', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            green: '=green',
            red: '=red'
        },
        transclude: true,
        controller: function($scope) {

            $scope.calculatePercentages = function(obj) {
                var total = _.reduce(obj, function(prev, curr) {
                    return prev + curr;
                }, 0);
                return _.object(_.map(obj, function(val, key) {
                    return [key, (val / total * 100)];
                }));
            };
            // TODO: THROW IF NO VALUES FOUND
            $scope.red = $scope.red || 0;
            $scope.green = $scope.green || 0;

            if (!$scope.red && !$scope.green) {
                $scope.red = 0;
                $scope.green = 100;
            }

            var percentages = $scope.calculatePercentages({
                red: $scope.red,
                green: $scope.green
            });

            $scope.red = percentages.red;
            $scope.green = percentages.green;

        },
        template: "<div><div style='float: left; width: {{red}}%; height: 10px; background-color:red'></div><div style='float:right; width: {{green}}%; height: 10px; background-color:green'></div><p style='padding:0px;text-align:center;'>{{green}}%</p></div>"
    };
});