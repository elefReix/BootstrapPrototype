angular.module('moduleApp', [])
.controller('Control', function ($scope) {
    $scope.libros = [
        {'titulo': 'Alimentos y Bebidas', 'autor': 'Mexico',licencias : 10},
        {'titulo': 'Farmaceutica', 'autor': 'Mexico, Brazil',licencias : 5},
        {'titulo': 'Cuidado personal ', 'autor': 'Mexico, Guatemala, Peru, Canada', licencias : 15}
    ];

    $scope.comentarios = [
        {estrellas : 5,texto : "Me encanta" , usuario : "jesus.elef@gmail.com", seccion : "Pagina"},
        {estrellas : 3,texto : "Parece bien" , usuario : "usuarioNoRegistrado", seccion :"Sineti"}
    ];

    $scope.agregarComentario = function() {
    $scope.comentarios.push({estrellas : estrellasView, texto : textoView ,usuario : "usuarioView", seccion: "Sineti"});
    $scope.usuarioView = '';
    $scope.textoView = '';
    };


})


;
