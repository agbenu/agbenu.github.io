
angular.module('agbenuApp', ['ngRoute'])

    .config( function ($routeProvider) {
            $routeProvider

            .when("/home",{
                templateUrl: "./templates/home.html",
                controller:"HomePageController"
            })

            .when("/python",{
                templateUrl: "./templates/python.html",
                controller:"PythonPageController"
            })

            .when("/android",{
                templateUrl: "./templates/android.html",
                controller:"AndroidPageController"
            }) 

            .otherwise('/',
            {
                controller:'HomePageController',
                templateUrl: "./templates/home.html",
            })
                           

        } )


    .controller('HomePageController', 

            ['$scope', function ($scope) {

            $scope.welcome_text = 'Contact me';
                
        }])


    .controller('PythonPageController', 

            ['$scope', function ($scope) {

            $scope.welcome_text = 'Python is really good for text processing and data handling';

            var python_tutorials = [
               { link: 'django/nginx_django.html', link_title:'Django config sample with Nginx' } ,
               { link: 'django/multiple_apps_nginx_port.html', link_title:'Multiple apps from a single Nginx port' } ,
               { link: 'django/custom_user_model.html', link_title:'Custom user model' } ,                              
            ];

            $scope.python_tutorials = python_tutorials;
                
        }]);    