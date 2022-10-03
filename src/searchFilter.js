export function filterSearch(searchText, sorted, tagged, array, filters) {
  //structure of the args: array, 
  let filteredArray = array
  // if(!sorted && !tagged) return filteredArray

  filteredArray = searchByText(filteredArray, searchText);

  // console.log(filters)
  if(tagged && !sorted) {
    filteredArray = filterByTag(filteredArray, filters); 
    //args 0(string): propriedade, args 1(string || boolean): valor esperado no filtro
  } 
  return filteredArray
}



function searchByText(array, text) {
  return  array.filter(character => character.name.toLowerCase().includes(text))
}


function filterByTag(array, filters){
  let accumulatorArray = [];
  filters.forEach(filter => {
    console.log(`----- TESTE ---- ${array.filter(el => el[filter.prop] == filter.value)} `)
    let nowArray = array.filter(el => el[filter.prop].toLowerCase() == filter.value.toLowerCase() )
    accumulatorArray.push(...nowArray)
  })
  console.log(accumulatorArray)
  return accumulatorArray
}

function sortArrayByPropertie(prop, isNumber, array, asc) {
  return array.sort((a, b) => {
    let valueA;
    let valueB;
    if(prop === "force" || prop === "speed" || prop === "accurate" || prop === "versatility" || prop === "defense") {
      valueA = a.stand.stats[prop]
      valueB = b.stand.stats[prop]
    } else{
      valueA = isNumber ? parseFloat(a[prop]) : a[prop];
      valueB = isNumber ? parseFloat(b[prop]) : b[prop];
    }

    if (valueA < valueB) {
      console.log(`Teste A: ${valueA}, \n Teste B: ${valueB}`)
      return asc;
    }
    if (valueA > valueB) {
      return -1 * asc;
    }
    
    // names must be equal
    return 0;
  })
};
