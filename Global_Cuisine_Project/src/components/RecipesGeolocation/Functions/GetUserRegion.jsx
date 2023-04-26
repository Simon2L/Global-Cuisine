
//#region checkar vilken kontinent användaren är i
export default async function getUserRegion(continent, country) {
let region = "";
console.log(`Continent: ${continent} Country: ${country}`)

    switch (continent) {
        case 'Europe':
            region = EuropeRegions(country) // kollar igenom om landet matchar någon Europeisk Region
            break;
          case 'North America':
              region = "American"
              break;
          case 'Africa':
              region = "African"
            break;
            case 'South America':
            
              region = "Latin American"
            break;
            case 'Asia':
                region = AsiaRegions(country) // kollar igenom om landet matchar någon asiatisk Region
            break;
            case 'Australian continent':
                region = "Thai"
            break;
          default:
            console.log(`no regions found`); // om ingen kontinent matchar så skickas en tom region tillbaka
            region = ""
        }
  return (
    region
  )
}
            
            
           
//#endregion 

//#region om användaren är i Europe checkar koden om landet tillhör en specifik europeisk Region
function EuropeRegions(country) {
    let europRegion = "";
    const nordic = ["SE", "FI", "NO", "DK", "IS"]
    // const mediterian = ["",""]
    // const british = ["", ""]
    // const easternEuropean = ["", ""]

    switch(country) {
        case 'ES':
            europRegion = "Spanish"
            break;
        case 'DE':
            europRegion = "German"
            break;
        case 'GR':
            europRegion = "Greek"
            break;
        case 'IT':
            europRegion = "Italian"
            break;
        case 'FR':
            europRegion = "French"
            break;
        case 'IE':
            europRegion = "Irish"
            break;
    default:
        if(nordic.includes(country)) {
             
            europRegion = "Nordic"
          }
          else {
           
            europRegion = "European"
          }
    }


  return (
      europRegion
    )
  }

//#endregion

//#region om användaren är i Asien checkar koden om landet tillhör en specifik  Region i Asien
function AsiaRegions(country) {
    let asiaRegions = "";

    switch(country) {
        case 'VN':
            asiaRegions = "Vietnamese"
            break;
        case 'TH':
            asiaRegions = "Thai"
            break;
        case 'KR':
            asiaRegions = "Korean"
            break;
        case 'JP':
            asiaRegions = "Japanese"
            break;
        case 'IN':
            asiaRegions = "Indian"
            break;
    default:
            asiaRegions = "Chinese"
    }


  return (
    asiaRegions
    )
  }

  //#endregion