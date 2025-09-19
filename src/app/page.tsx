"use client";
import Header from "@/components/Header";
import "./style.css";
import "./result-style.css";
import Selector from "@/components/Selector";
import { useState } from "react";
import BackgroundControls from "@/components/BackgroundControls";
import QuoteResult from "@/components/QuoteResult";
import { EditorParams } from "@/data/editorParams";
import TextControls from "@/components/TextControls";

export default function Home() {

  const [editorParams, setEditorParams] = useState<EditorParams>({
    author: "",
    workName: "",
    quote: "",
    backgroundPreview: null,
    additionalImgPreview: null,
    additionalImgOffsetX: 0,
    additionalImgOffsetY: 0,
    additionalImgSizeW: 0,
    additionalImgSizeH: 0,
    additionalImgTransparency: 1,
    authorOffsetX: null,
    authorOffsetY: null,
    authorFontSize: null,
    workNameOffsetX: null,
    workNameOffsetY: null,
    workNameFontSize: null,
    quoteOffsetX: null,
    quoteOffsetY: null,
    quoteFontSize: null,
  });

  return (
    <div className="wrapper">

      <Header />


      <div className="constructor">

        <div className="editor">
          <h3 className="fascinate-regular">EDITOR</h3>

          <div className="controls">

            <Selector name="Border">
              <div className="primary-controls">
                <label>1<input type="radio" name="border" /></label>
                <label>2<input type="radio" name="border" /></label>
                <label>3<input type="radio" name="border" /></label>
              </div>

            </Selector>

            <BackgroundControls
              name="Primary background"
              setParams={setEditorParams}
              fieldName="backgroundPreview"
              useAdditionalControls={false}
              params={editorParams}
            />

            <BackgroundControls
              name="Additional img"
              setParams={setEditorParams}
              fieldName="additionalImgPreview"
              useAdditionalControls={true}
              params={editorParams}
            />

            {/*<div className="text-inputs">
              <label>Quote</label>
              <textarea className="quote-text-area" value={editorParams.quote} onChange={e => setEditorParams(prev => ({ ...prev, quote: e.target.value }))} />
              <label>Author</label>
              <input type="text" value={editorParams.author} onChange={e => setEditorParams(prev => ({ ...prev, author: e.target.value }))} />
              <label>Work</label>
              <input type="text" value={editorParams.workName} onChange={e => setEditorParams(prev => ({ ...prev, workName: e.target.value }))} />
            </div>*/}

            <TextControls
              params={editorParams}
              setParams={setEditorParams}
              />


          </div>

        </div>

        <QuoteResult
          {...editorParams}
        />

      </div>

    </div>
  );
}
