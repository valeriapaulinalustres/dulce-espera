
type LanguageArgs = {
    en: string,
    es: string,
  }
  
  function Options({en, es}: LanguageArgs) {
    return (
  <option value={en}>{es}</option>  
    )
  }
  
  export default Options