app.controller('MainController', ['$scope', function($scope) { 


  //json lista de produtos
  $scope.products = [
    {
      "id": 0,
      "sku": 8552515751438644,
      "cover": 'http://localhost/testes/teste-netshoes/resources/assets/images/img-modelo-1.jpg',
      "title": "Camisa Nike Corinthians I",
      "description": "14/15 s/nº",
      "availableSizes": ["S", "G", "GG", "GGG"],
      "style": "Branco com listras pretas",
      "price": 229.9,
      "installments": 9,
      "currencyId": "BRL",
      "currencyFormat": "R$",
      "isFreeShipping": true
    }, 
    {
      "id": 1,
      "sku": 18644119330491312,
      "cover": 'http://localhost/testes/teste-netshoes/resources/assets/images/img-modelo-2.jpg',
      "title": "Camisa Nike Corinthians II",
      "description": "14/15 s/nº",
      "availableSizes": ["S", "G", "GG", "GGG"],
      "style": "Preta com listras brancas",
      "price": 229.9,
      "installments": 9,
      "currencyId": "BRL",
      "currencyFormat": "R$",
      "isFreeShipping": true
    },

    {
      "id": 2,
      "sku": 11854078013954528,
      "cover": 'http://localhost/testes/teste-netshoes/resources/assets/images/img-modelo-3.jpg',
      "title": "Camisa Feminina Nike Corinthians I",
      "description": "14/15 s/nº",
      "availableSizes": ["S", "G"],
      "style": "Branco com listras pretas",
      "price": 199.9,
      "installments": 7,
      "currencyId": "BRL",
      "currencyFormat": "R$",
      "isFreeShipping": true
    },
 
    {
      "id": 3,
      "sku": 876661122392077,
      "cover": 'http://localhost/testes/teste-netshoes/resources/assets/images/img-modelo-4.jpg',
      "title": "Camisa Feminina Nike Corinthians II",
      "description": "2014 s/nº",
      "availableSizes": ["S", "G"],
      "style": "Preto com listras brancas",
      "price": 199.9,
      "installments": 7,
      "currencyId": "BRL",
      "currencyFormat": "R$",
      "isFreeShipping": true
    },
    {
      "id": 4,
      "sku": 9197907543445677,
      "cover": 'http://localhost/testes/teste-netshoes/resources/assets/images/img-modelo-5.jpg',
      "title": "Camisa Nike Corinthians I",
      "description": "14/15 s/nº - Jogador",
      "availableSizes": ["GG"],
      "style": "Branco com listras pretas",
      "price": 349.9,
      "installments": 12,
      "currencyId": "BRL",
      "currencyFormat": "R$",
      "isFreeShipping": false
    },

    {
      "id": 5,
      "sku": 10547961582846888,
      "cover": 'http://localhost/testes/teste-netshoes/resources/assets/images/img-modelo-6.jpg',
      "title": "Kit Corinthians - Camisa Nike II",
      "description": "14/15 + Camiseta 1º Mundial",
      "availableSizes": ["S", "G", "GG"],
      "style": "Preto",
      "price": 229.9,
      "installments": 9,
      "currencyId": "BRL",
      "currencyFormat": "R$",
      "isFreeShipping": false
    }
  ];


  //Carrinho
  $scope.carrinho = [];

  $scope.comprar = function(_item){

    $scope.carrinho.push(_item);

  }

  //Faz a soma do total de valor de compras
  $scope.total = function(){

    var total = 0;

    for(item of $scope.carrinho){

      total += item.price;
    }
    
    return total;
  }

  //Remove item do carrinho
  $scope.removeItem = function (x) {
      //$scope.errortext = "";    
      $scope.carrinho.splice(x, 1);
  }
  

   //Mostra e esconde carrinho
    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }


}]);
