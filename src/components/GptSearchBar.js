import open_Ai from '../utils/Openai'
import React from 'react'
import { useRef } from 'react'




function GptSearchBar() {
    const searchText = useRef(null)
    const handleGptSearchClick =async()=>{
        const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query : "+searchText.current.value+" only give me 5 movie names, comma seperated like the example result given ahead. example result: Gadar, Sholay, Don, Dhamal, Krish"
        const gptResult = await open_Ai.chat.completions.create({
            model: 'gpt-3.5',
            messages: [{ role: 'user', content: gptQuery }],
            stream: true,
          });
          console.log(gptResult.choices)
        }

  return (
    <div className='pt-[30vh] px-[20%] '>
        <form className='w-full '  onSubmit={(e)=>e.preventDefault()} >
            <input  type="text" ref={searchText} className='pr-80 bg-black text-white pl-5 py-4 border border-slate-950'placeholder='How Can I Help You?' />
            <button onClick={handleGptSearchClick} className='px-6 py-4 mx-2 rounded-xl hover:bg-purple-700 bg-purple-500 text-white border border-purple-700'>Submit</button>
        </form>
    </div>
  )
}

export default GptSearchBar