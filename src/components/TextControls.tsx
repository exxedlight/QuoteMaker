import { EditorParams } from "@/data/editorParams";
import React from "react";
import "./styles/textcontrols.css";

export interface TextControlsProps{
    params: EditorParams;
    setParams: React.Dispatch<React.SetStateAction<EditorParams>>
}

const TextControls = (
    {params, setParams} : TextControlsProps
) => {
    return (
        <div className="text-inputs">
            <label>Quote</label>
            <textarea className="quote-text-area" value={params.quote} onChange={e => setParams(prev => ({ ...prev, quote: e.target.value }))} />
            
            <div className="controls-block">
                <label>Offset</label>
                <div className="inputs">
                    <label>X</label>
                    <input type="number" min={-1000} max={1000} value={params.quoteOffsetX ?? 0} onChange={e => setParams(prev => ({...prev, quoteOffsetX: Number(e.target.value) ?? 0})) }/>
                    <label>Y</label>
                    <input type="number" min={-1000} max={1000} value={params.quoteOffsetY ?? 0} onChange={e => setParams(prev => ({...prev, quoteOffsetY: Number(e.target.value) ?? 0})) }/>
                </div>
            </div>
            <div className="controls-block">
                <label>Size</label>
                <div className="inputs">
                    <label>W</label>
                    <input type="number" min={0} max={1000}/>
                    <label>H</label>
                    <input type="number" min={0} max={1000}/>
                </div>
            </div>
            <br/>

            <label>Author</label>
            <input type="text" className="base-input" value={params.author} onChange={e => setParams(prev => ({ ...prev, author: e.target.value }))} />
            
            
            
            <label>Work</label>
            <input type="text" className="base-input" value={params.workName} onChange={e => setParams(prev => ({ ...prev, workName: e.target.value }))} />
        </div>
    )
}
export default TextControls;