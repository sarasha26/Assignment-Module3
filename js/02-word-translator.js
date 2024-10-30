let langCode
let translatedText

//Ask user for the language code
langCode = prompt("Enter the language code")

switch (langCode){

    case 'es':
        translatedText = 'Hola Mundo'
        console.log(`Hello World translated in Spanish is: ${translatedText}`)
        break
    
    case 'de':
        translatedText = 'Hallo Welt'
        console.log(`Hello World translated in German is: ${translatedText}`)
        break

    case 'fr':
        translatedText = 'Bonjour le monde'
        console.log(`Hello World translated in French is: ${translatedText}`)
        break
    
    default:
        console.log('In English:Hello World')
        
        
}



