angular.module( 'controllers' )
    .controller( 'BookListCtrl', [ '$scope', '$http',

        function  ( $scope, $http ) {
            $http.get( '/api/search?search=books' )
            .then( res => {
                $scope.books = res.data;
             })
            .catch( err => { console.log( err[0] ); });

            $scope.select = function(  somebook ) {
                console.log(somebook,"somebook");
                $scope.selectedId = somebook;

                $http.get( '/api/search/'+somebook)
                    .then( res =>
                     {console.log(res.data,' is res.body') })
            };
        }
    ]);