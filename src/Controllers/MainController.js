angular.module('moduleApp', [])
.controller('Control', function ($scope,$http) {

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

    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {estrellas : 5,texto : "Me encanta" , usuario : "jesus.elef@gmail.com"},
        {estrellas : 3,texto : "Parece bien" , usuario : "usuarioNoRegistrado"}
    ];
    $scope.agregarComentario = function() {
      $scope.comentarios.push($scope.nuevoComentario);
      $scope.nuevoComentario = {};
};


})


;
