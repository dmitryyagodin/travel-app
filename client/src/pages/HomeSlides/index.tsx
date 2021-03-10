import React, { useState, useEffect } from 'react';
import './HomeSlides.scss';

export const HomeSlides: React.FC = () => {
  const slideUrls = [
    "https://by3301files.storage.live.com/y4mXsjeNwUnyqL2EZOC5RpuYMnOGbxoczBxxrTS8wvROXc7x1P2zb5NahhfyPbm9w6MLhY3_NDaPKIMGrwpAuFpQgSuQjD9l57Rr5joQSNBfbsHHvkPHE3MBPW1r98xb7w2PFIKlXqPWD4uPGLudU7fMPpaoF83ZY76CeMcwbMrK-nahM0zhe4Wi5uPBqLPO8LN?width=1024&height=576&cropmode=none",
    "https://by3301files.storage.live.com/y4mniJRUpBD6qxkOa2JJbIow75R8B6HzWYTaY4nvTUF5Hw0hwYBJiTqQnNE5mvU58jHA7lGErEUkqQrmAybR9BkpGFnuHsCLFde25BYg6f0AoItzAaCPXzFofAV6xPqnMElHYAsAaokyo3hbo83HRuvLKRbBIf6XEVaSYaeejtuHvK0SL8hJRkPMe1gNbFFE__H?width=1024&height=576&cropmode=none",
    "https://by3301files.storage.live.com/y4mSKtPDCQ2kqSimdaovOMC0zq6AQxi1LFr8e8o67JI6mU9AwlQWCz9ICwv-nQwuKUlthQZmuccJcjO8sNEmBD2qunBj99mHoCGn_FwPHXL9-FC13VQTfnZney5KTrzersHk7oWjD583kbu0fZYF64T4cKi7-9CtYf42Shzhl0dKp72ZsminiaKdQsply2Su9DX?width=1024&height=576&cropmode=none"
  ]
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setSlide(slide < 2 ? slide + 1 : slide - 2);
    }, 4000);
    return () => clearInterval(slider);
  });


  console.log(slideUrls[slide]);

  return (
    <div className="slides-container">
      {/* <div className=""> */}
        <img src={slideUrls[slide]} alt="travel"/>
      {/* </div> */}
      <div className="slide-dots">
        <span className={slide === 0 ? 'dot active' : 'dot'}></span>
        <span className={slide === 1 ? 'dot active' : 'dot'}></span>
        <span className={slide === 2 ? 'dot active' : 'dot'}></span>
      </div>
    </div>
  )
}
