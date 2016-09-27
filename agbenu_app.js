
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

            .when("/gist/code/python",{
                templateUrl: "./templates/gist_code.html",
                controller:"GistCodeController"
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

            ['$scope', 'GistService', function ($scope,GistService) {

            $scope.welcome_text = 'Python is really good for text processing and data handling';


            var python_tutorials = [
               { 
                link: '/gist/code/python', 
                link_title:'Django config sample with Nginx', 
                gist_link: 'https://gist.github.com/lefootballroi/25c66b5cd6a1cea7a2f4fa094e8c4b5b',
                code_language: 1
           } ,
               { 
                link: '/gist/code/python', 
                link_title:'Multiple apps from a single Nginx port', 
                gist_link: 'https://gist.github.com/lefootballroi/25c66b5cd6a1cea7a2f4fa094e8c4b5b',
                code_language: 1                                 
            } ,
               { 
                link: '/gist/code/python', 
                link_title:'Custom user model',
                gist_link: 'https://gist.github.com/lefootballroi/25c66b5cd6a1cea7a2f4fa094e8c4b5b',
                code_language: 1                                  
           } ,                              
            ];

            $scope.python_tutorials = python_tutorials;

            $scope.setPythonTutorial= function(this_gist_link) {
                    GistService.setTutorial(this_gist_link);                                           
                }


        }])    


    .controller('GistCodeController', 
            ['$scope', 'GistService' ,function ($scope,GistService) 
            {

                var this_gist_link =  GistService.getTutorial(); 

                $scope.this_gist_link = this_gist_link;
                
                console.log(this_gist_link);                                                                   
             
        }])


    .service('GistService', function () 
        {
            var gist_link="xxx";
            return {

                    setTutorial: function (this_gist_link){ 
                        gist_link = this_gist_link;
                        //console.log(gist_link);                                                   
                    },

                    getTutorial: function (){ 
                        return gist_link;
                    },

                };
          
        });    

    