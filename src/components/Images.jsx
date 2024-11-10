import React,{useState} from 'react'

function Images({imgs=[{url:''}]}) {
   const [mainImage,setMainImage] = useState(imgs[0])
  return (
    <>
    <div className='flex xs:flex-col sm:flex-col items-center gap-2 lg:w-[330px] md:w-[330px] xl:w-[330px]  '>
        <div className=' w-[30%] xs:w-[80px] sm:w-[80px] gap-2 xs:flex sm:flex  mb-4  space-y-3 h-[90ox grid grid-cols-1 grid-rows-4 place-items-center xs:ml-[-230px] sm:ml-[-250px] lg:mt-[-250px] md:mt-[-200px]  '>
        
     {
            imgs.map((curElement)=>{
                return(
                       <img src={curElement.url} alt={curElement.filename} key={curElement.id} onClick={()=>{setMainImage(curElement)}} className='h-[60px] w-[300px]'/>
                       
                )
            })

        }
           
        </div>

        <div>
            <div className='w-[250px] h-[150px] bg-amber-200 grid-cols-1 grid-rows-1 lg:mt-[-200px] md:mt-[-200px] '>
                    <img src={mainImage.url} alt={mainImage.filename}/>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default Images