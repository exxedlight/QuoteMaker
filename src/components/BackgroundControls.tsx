import { ChangeEvent, RefObject, useRef } from "react";
import Selector from "./Selector";
import "./styles/background.css";
import { EditorParams } from "@/data/editorParams";


export interface BackgroundControlsProps {
    name: string;
    params: EditorParams;
    setParams: React.Dispatch<React.SetStateAction<EditorParams>>;
    fieldName: keyof EditorParams;
    useAdditionalControls: boolean;
}

const BackgroundControls = (
    { name, setParams, useAdditionalControls, fieldName, params }: BackgroundControlsProps
) => {

    const ARef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;

        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Пожалуйста, выберите файл изображения');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setParams(prev => ({...prev, [fieldName]: reader.result as string}))
        }
        reader.readAsDataURL(file);
    }


    return (
        <Selector name={name}>
            <div className="primary-controls">
                <button className="pick-button" onClick={_ => ARef.current?.click()}>Pick</button>
                <input type="file" accept="image/*" style={{ display: "none" }} ref={ARef} onChange={e => handleImageChange(e)} />
            </div>


            {useAdditionalControls && (
                <div className="additional-controls">
                    <div className="transparency control-element">
                        <label>Transparency</label>
                        <div className="inputs">
                            <input type="range" min={0} max={100} className="ranger" value={params.additionalImgTransparency*100} onChange={e => setParams(prev => ({...prev, additionalImgTransparency: Number(e.target.value)/100}))} />
                        </div>
                    </div>
                    <div className="offsets control-element">
                        <label>Offset</label>
                        <div className="inputs">
                            <p>X</p>
                            <input type="number" placeholder="dx" min={-1000} max={1000} value={params.additionalImgOffsetX ?? -1} onChange={e => setParams(prev => ({...prev, additionalImgOffsetX: Number(e.target.value) ?? null}))} />
                            <p>Y</p>
                            <input type="number" placeholder="dy" min={-1000} max={1000} value={params.additionalImgOffsetY ?? -1} onChange={e => setParams(prev => ({...prev, additionalImgOffsetY: Number(e.target.value) ?? null}))} />
                        </div>
                        
                    </div>
                    <div className="sizes control-element">
                        <label>Size</label>
                        <div className="inputs">
                            <p>W</p>
                            <input type="number" placeholder="W" min={0} max={1000} value={params.additionalImgSizeW ?? -1} onChange={e => setParams(prev => ({...prev, additionalImgSizeW: Number(e.target.value) ?? null}))}/>
                            <p>H</p>
                            <input type="number" placeholder="H" min={0} max={1000} value={params.additionalImgSizeH ?? -1} onChange={e => setParams(prev => ({...prev, additionalImgSizeH: Number(e.target.value) ?? null}))}/>
                        </div>
                        
                    </div>
                </div>
            )}
        </Selector>
    );
}
export default BackgroundControls;