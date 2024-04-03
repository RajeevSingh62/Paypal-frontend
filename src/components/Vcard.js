import React from 'react'

const Vcard = () => {
  return (
    <>
      <div className=' mb-10 w-[300px] flex flex-col items-center gap-1'>
       <div className="icon mb-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshySQc2Ea2qdUkee67VGyQmaeG9nAyEvD5OOMa6Aeyg&s" alt="icon" className='w-10 h-10 border-2 border-black' />
       </div>
       <div className="title text-blue-900 font-bold">
        Community Forum
       </div>
       <div className="pata">
        Find answer or join <br/>
         the conversation.
       </div>
      </div>
      <div className=' mb-10 w-[300px] flex flex-col items-center gap-1'>
       <div className="icon mb-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjftXcDIZXx7c7lWD1S4WKRPHWx1P5z9nTeN94F2BBTg&s" alt="icon" className='w-10 h-10 border-2 border-black' />
       </div>
       <div className="title text-blue-900 font-bold">
        Resolution Center
       </div>
       <div className="pata">
        Resolve transaction and account
        <br/> issue.
       </div>
      </div>
      <div className=' mb-10 w-[300px] flex flex-col items-center gap-1'>
       <div className="icon mb-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW5kedx-DinGmYuk-n6XOcgw6rq5zT18Zpdrb7g_Axw&s" alt="icon" className='w-10 h-10 border-2 border-black' />
       </div>
       <div className="title text-blue-900 font-bold">
        Contact us
       </div>
       <div className="pata">
        contact customer service.
       </div>
      </div>
    </>
  )
}

export default Vcard
