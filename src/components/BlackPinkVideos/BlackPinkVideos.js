import React from 'react'

export default function BlackPinkVideos() {
  return (
    <>
    <div className='videos'>
      <iframe 
        width="600" 
        height="350"
        src="https://www.youtube.com/embed/IHNzOHi8sJs" 
        title="BLACKPINK - ‘뚜두뚜두 (DDU-DU DDU-DU)’ M/V" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <iframe 
          width="600" 
          height="350" 
          src="https://www.youtube.com/embed/ioNng23DkIM" 
          title="BLACKPINK - 'How You Like That' M/V" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      <iframe 
          width="600" 
          height="350" 
          src="https://www.youtube.com/embed/Amq-qlqbjYA" 
          title="BLACKPINK - '마지막처럼 (AS IF IT'S YOUR LAST)' M/V" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
    </div>
    </>
  )
}
