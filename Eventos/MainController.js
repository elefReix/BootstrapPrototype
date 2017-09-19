angular.module('moduleApp', ["LocalStorageModule"])
.controller('Control', function ($scope,$http,localStorageService) {

    $scope.ejemploDigest = "Local Storage";
    setTimeout(function(){
      $scope.ejemploDigest = "Local Storage funciona";
      $scope.$apply();
    },8000);

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

    //ejemplo de watches y watchesCollection
    // sirve para factorizar codigo que suele ser repetitvo dentro del controlador
    $scope.$watchCollection('comentarios',function (newValue, oldValue){
          localStorageService.set("angular-todoList",$scope.comentarios);
    });

    $scope.nuevoComentario = {};

    $scope.agregarComentario = function() {
      $scope.comentarios.push($scope.nuevoComentario);
      $scope.nuevoComentario = {};

};
    $scope.limpiar = function(){
     $scope.comentarios = [];
    }

})


;
