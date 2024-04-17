import OpenAI from 'openai';
import { OPEN_AI_API } from './Constant';


  const open_Ai = new OpenAI({
      apiKey: OPEN_AI_API,
      dangerouslyAllowBrowser: true 
    });



export default open_Ai