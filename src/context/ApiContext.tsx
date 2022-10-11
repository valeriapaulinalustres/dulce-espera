import { createContext, useState, Dispatch, SetStateAction, } from 'react';

interface GlobalContent  {
fdaData: any,
setFdaData: Dispatch<SetStateAction<never[]>>,
  pregnancyData: string | undefined,
  setPregnancyData: (pregnancyData:string | undefined)=> void,
  nursingData: string |undefined,
  setNursingData: Dispatch<SetStateAction<string | undefined>>,
  teratogenicData: string | undefined,
  setTeratogenicData: Dispatch<SetStateAction<string | undefined>>,
  warningsData: string | undefined,
  setWarningsData: Dispatch<SetStateAction<string | undefined>>,
  inputValue: string | undefined,
  setInputValue: Dispatch<SetStateAction<string | undefined>>,
  inputLetter: string | undefined,
  setInputLetter: Dispatch<SetStateAction<string | undefined>>,
  warningsAndCautionsData: string | undefined,
  setWarningsAndCautionsData:Dispatch<SetStateAction<string | undefined>>,
  noErrorData: boolean,
  setNoErrorData:Dispatch<SetStateAction<boolean>>,
  bringApiData: (drug: string,)=> void,
  clearData: ()=>void,

}

interface props {
  children: JSX.Element | JSX.Element[],
}

const ApiContext = createContext<GlobalContent>({} as GlobalContent);

const ApiProvider = ({ children }:props) => {

  const [fdaData, setFdaData] = useState([]);
  const [pregnancyData, setPregnancyData] = useState<string | undefined>();
  const [nursingData, setNursingData] = useState<string | undefined>();
  const [teratogenicData, setTeratogenicData] = useState<string | undefined>();
  const [warningsData, setWarningsData] = useState<string | undefined>();
  const [warningsAndCautionsData, setWarningsAndCautionsData] = useState<string | undefined>();
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [inputLetter, setInputLetter] = useState<string | undefined>();
  const [noErrorData, setNoErrorData] = useState<boolean>(true);

  const bringApiData = async (drug: string): Promise<any> => {

 //--------- API REST -----------------------------------------------------
  
 const baseUrl = 'https://api.fda.gov/drug/label.json?'
 const genericName = `&search=openfda.generic_name.exact:${drug}&limit=100`

 const url8 = `&search=_exists_:openfda&limit=100`

 const apiKey = "api_key=s9SKjNnX3NlVkXiE61jwHSoxNXLe56uaf3GdQhlZ"
 //---------------------------------------------------------------------------

    try {
      const res = await fetch(baseUrl + apiKey + genericName)
      const data = await res.json()
  
      setFdaData(data.results);
      setNoErrorData(true);
      (data.results.filter((el:any)=> el.hasOwnProperty("pregnancy")).length > 0) && setPregnancyData(data.results.filter((el:any) => el.hasOwnProperty("pregnancy"))[0].pregnancy[0]);

      (data.results.filter((el:any) => el.hasOwnProperty("warnings")).lenght > 0) && setWarningsData(data.results.filter((el:any) => el.hasOwnProperty("warnings"))[0].warnings[0]);

      (data.results.filter((el:any) => el.hasOwnProperty("warnings_and_cautions")).length > 0) && setWarningsData(data.results.filter((el:any) => el.hasOwnProperty("warnings_and_cautions"))[0].warnings_and_cautions[0]);

      (data.results.filter((el:any) => el.hasOwnProperty("nursing_mothers")).length > 0) && setNursingData(data.results.filter((el:any) => el.hasOwnProperty("nursing_mothers"))[0].nursing_mothers[0]);

      (data.results.filter((el:any) => el.hasOwnProperty("teratogenic_effects")).length > 0) && setTeratogenicData(data.results.filter((el:any) => el.hasOwnProperty("teratogenic_effects"))[0].teratogenic_effects[0]);
      
      
    } catch (error) {
    setNoErrorData(false)
      console.log(`este es el error: ${error}`)
     
    }
  }

  function clearData ():void{
    setPregnancyData(undefined)
    setWarningsAndCautionsData(undefined)
    setWarningsData(undefined)
    setTeratogenicData(undefined)
    setNursingData(undefined)
    setInputLetter(undefined)
  }


  return (
    <ApiContext.Provider 
    value={{
      fdaData, 
      setFdaData, 
      pregnancyData, 
      setPregnancyData, 
      nursingData, 
      setNursingData, 
      teratogenicData, 
      setTeratogenicData, 
      warningsData, 
      setWarningsData, 
      warningsAndCautionsData, 
      setWarningsAndCautionsData, 
      bringApiData, 
      inputValue, 
      setInputValue, 
      inputLetter, 
      setInputLetter, 
      noErrorData, 
      setNoErrorData, 
      clearData
      }}>
      {children}
    </ApiContext.Provider>
  )
}

export { ApiProvider };
//export context
export default ApiContext;

/*

const drugsNameForInput = []

function createArrayForInput (arr1, arr2){
arr1.forEach(el=>drugsNameForInput.push({en:el, class:""}))

for (let index = 0; index < arr2.length; index++) {
  drugsNameForInput[index].es = arr2[index]
  
}

}
createArrayForInput(drEnglish, drSpanish)
  console.log(drugsNameForInput)
*/
