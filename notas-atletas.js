let atletas = [
        {
          nome: "Cesar Abascal",
          notas: [10, 9.34, 8.42, 10, 7.88]
        },
        {
          nome: "Fernando Puntel",
          notas:  [8, 10, 10, 7, 9.33]
        },
        {
          nome: "Daiane Jelinsky",
          notas: [7, 10, 9.5, 9.5, 8]
        },
        {
          nome: "Bruno Castro",
          notas: [10, 10, 10, 9, 9.5]
        }
    ];


    function nomeAtletas(atleta) {
      return atleta.nome
  }
  
  function nota(atleta) {
      return atleta.notas.join(",")
  }
  
  function notasValidas(atleta) {
      let notasOrdenadas = atleta.notas.sort(function(a, b) {
          return a - b
      })
      let notasComputadas = notasOrdenadas.slice(1,4)
      
       
      let soma = 0
      
      notasComputadas.forEach(function(nota){
          soma =  soma + nota
      })
      
      return soma / notasComputadas.length
      
  }

  atletas.forEach(function(atleta) {
    console.log("Atleta: " + nomeAtletas(atleta))
    console.log("Notas Obtidas: " + nota(atleta))
    console.log("Média Válida: " + notasValidas(atleta))
    console.log("----------------------")
})  