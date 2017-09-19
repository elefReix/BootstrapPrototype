angular.module('moduleApp', ["LocalStorageModule"])
.controller('Control', function ($scope,$http,localStorageService) {

    $scope.posts = [];
    $scope.nuevoPost = {};

    $http.get("http://jsonplaceholder.typicode.com/posts")
          .then(function(datos){
            $scope.posts = datos.data;
           }, function(error){
           });

    $scope.agergaPost = function () {
    $http.post("http://jsonplaceholder.typicode.com/posts",
          {title : $scope.nuevoPost.title,
           body : $scope.nuevoPost.body,
           userId : 1})
          .then(function(response){
            $scope.posts.push($scope.nuevoPost);
            $scope.agregarPost = {};
            console.log("ya termino");
          })};

    $scope.libros = [
        {'titulo': 'Alimentos y Bebidas', 'autor': 'Mexico',licencias : 10},
        {'titulo': 'Farmaceutica', 'autor': 'Mexico, Brazil',licencias : 5},
        {'titulo': 'Cuidado personal ', 'autor': 'Mexico, Guatemala, Peru, Canada', licencias : 15}
    ];

    if(localStorageService.get("angular-todoList")){
        $scope.comentarios = localStorageService.get("angular-todoList");
    }else{
        $scope.comentarios = [
            {estrellas : 5,texto : "Me encanta" , usuario : "jesus.elef@gmail.com"},
            {estrellas : 3,texto : "Parece bien" , usuario : "usuarioNoRegistrado"}
        ];
    }
    $scope.nuevoComentario = {};

    $scope.agregarComentario = function() {
      $scope.comentarios.push($scope.nuevoComentario);
      $scope.nuevoComentario = {};
      localStorageService.set("angular-todoList",$scope.comentarios);
};


})


;
