"use client";
import Header from "@/components/Header";
import "./style.css";
import "./result-style.css";
import Selector from "@/components/Selector";
import { ChangeEvent, useRef, useState } from "react";

export default function Home() {

  const [author, setAuthor] = useState("");
  const [workName, setWorkName] = useState("");
  const [quote, setQuote] = useState("");

  const [backgroundImgPreview, setBackgroundImgPreview] = useState<string | null>(null);
  const [additionalImgPreview, setAdditionalImgPreview] = useState<string | null>(null);
  const backgroundARef = useRef<HTMLInputElement | null>(null);
  const additionalImgARef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string | null>>) => {
    const file = event.target.files?.[0] || null;

    if(!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Пожалуйста, выберите файл изображения');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setter(reader.result as string);
    }
    reader.readAsDataURL(file);
  }

  return (
    <div className="wrapper">

      <Header />


      <div className="constructor">

        <div className="editor">
          <h3 className="fascinate-regular">EDITOR</h3>

          <div className="controls">

            <Selector name="Border">
              <label>1<input type="radio" name="border" /></label>
              <label>2<input type="radio" name="border" /></label>
              <label>3<input type="radio" name="border" /></label>
            </Selector>

            <Selector name="Background">
              <button className="pick-button" onClick={_ => backgroundARef.current?.click()}>Pick</button>
              <input type="file" accept="image/*" style={{display: "none"}} ref={backgroundARef} onChange={e => handleImageChange(e, setBackgroundImgPreview)}/>
            </Selector>
            
            <Selector name="Additional image">
              <button className="pick-button" onClick={_ => additionalImgARef.current?.click()}>Pick</button>
              <input type="file" accept="image/*" style={{display: "none"}} ref={additionalImgARef} onChange={e => handleImageChange(e, setAdditionalImgPreview)}/>
            </Selector>

            <div className="text-inputs">
              <label>Quote</label>
              <textarea className="quote-text-area" value={quote} onChange={e => setQuote(e.target.value)}/>
              <label>Author</label>
              <input type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
              <label>Work</label>
              <input type="text" value={workName} onChange={e => setWorkName(e.target.value)}/>
            </div>
            

          </div>

        </div>

        <div className="result">
          <label className="quote ephesis-regular">{quote}</label>

          <div className="author-work">
            <label className="author">{author}</label>
            <label className="work-name">{workName}</label>
          </div>
          

          {backgroundImgPreview && (
            <img className="background" src={backgroundImgPreview}/>
          )}
          {additionalImgPreview && (
            <img className="additional-img" src={additionalImgPreview}/>
          )}          
        </div>

      </div>

    </div>
  );
}
