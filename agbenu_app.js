
angular.module('agbenuApp', ['ngRoute'])

    .config( function ($routeProvider) {
            $routeProvider

            .when("/home",{
                templateUrl: "./templates/home.html",
                controller:"HomePageController"
            })

            .when("/websites",{
                templateUrl: "./templates/websites.html",
                controller:"WebsitePageController"
            })

            .when("/android",{
                templateUrl: "./templates/android.html",
                controller:"AndroidPageController"
            }) 


            /*
            .when("/android/app",{
                templateUrl: "./templates/android_app.html",
                controller:"AppPageController"
            }) 
            */

            .when("/android/app_details/dumsorcountdown",{
                templateUrl: "./templates/android_app.html",
                controller:"DumsorAppPageController"
            }) 

            .when("/android/app_details/soundscape",{
                templateUrl: "./templates/android_app.html",
                controller:"SoundScapeAppPageController"
            }) 


            .when("/android/app_details/secondsold",{
                templateUrl: "./templates/android_app.html",
                controller:"SecondsOldAppPageController"
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


    .controller('WebsitePageController', 

            ['$scope', function ($scope) {

            $scope.welcome_text = 'I will love to work on that site of yours : - ) .' ;


            var web_sites_done = [
               { 
                domain_name:'Black Pixels Gh', 
                web_link: 'http://blackpixelsgh.com',
           } ,
               { 
                domain_name:'Debugger Co Ltd', 
                web_link: 'http://debuggercoltd.com',
            } ,
               { 
                domain_name:'Techne Co Ltd',
                web_link: 'http://techne.in',
           } ,                              
               { 
                domain_name:'More to come',
                web_link: 'http://agbenu.com',
           } ,                                         
            ];

            $scope.web_sites_done = web_sites_done;


        }])


    .controller('AndroidPageController', 

            ['$scope', function ($scope) {

            $scope.welcome_text = 'Android apps are nice to have. You can have one too.' ;


            var apps_done = [
               { 
                name:'Dumsor CountDown', 
                store_link: '#/android/app_details/dumsorcountdown',
                //store_link: 'https://play.google.com/store/apps/details?id=com.eliagbenu.dumsorcounter&hl=en',
           } ,
               { 
                name:'Sounds Scape', 
                store_link: '#/android/app_details/soundscape',
                //store_link: 'https://play.google.com/store/apps/details?id=com.eliagbenu.soundscape&hl=en',
            } ,
               { 
                name:'Seconds Old',
                store_link: '#/android/app_details/secondsold',                
                //store_link: 'https://play.google.com/store/apps/details?id=com.eliagbenu.secondsold&hl=en',
           } ,                              
               { 
                name:'More to come',
                store_link: 'http://agbenu.com',
           } ,                                         
            ];

            $scope.apps_done = apps_done;


        }])

    .controller('SoundScapeAppPageController', 

            ['$scope', function ($scope) {

            $scope.app_title = 'Sound Scape';
            $scope.store_link= 'https://play.google.com/store/apps/details?id=com.eliagbenu.soundscape&hl=en';

        }])    

    .controller('SecondsOldAppPageController', 

            ['$scope', function ($scope) {

            $scope.app_title = 'Seconds Old';
            $scope.store_link= 'https://play.google.com/store/apps/details?id=com.eliagbenu.secondsold&hl=en';

        }])        
        
    .controller('DumsorAppPageController', 

            ['$scope', function ($scope) {

            $scope.app_title = 'Dumsor countdown';
            $scope.store_link='https://play.google.com/store/apps/details?id=com.eliagbenu.dumsorcounter&hl=en';

        }]);    

