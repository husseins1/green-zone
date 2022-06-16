

export default function SectionBreak() {
  return (
    <>
    <style jsx>
        {`
        .flex{
            display:flex;
            justify-content:space-around;
            max-width:100%;
            margin:3rem auto;
           
        }
        img{
          width:100%;
        }
        
        `}
    </style>
    <div className="flex">
        <div>
    <img  src="/green zone-08.svg" />
          
        </div>
        <div>
    <img  src="/green zone-05.svg" />

        </div>
        <div>
    <img  src="/green zone-08.svg" />
          

        </div>

    </div>
    </>
  )
}
