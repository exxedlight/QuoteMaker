import { EditorParams } from "@/data/editorParams";

const QuoteResult = (
    params: EditorParams
) => {
    return (
        <div className="result">
          <label 
            className="quote ephesis-regular"
            style={{
              left: params.quoteOffsetX ?? "50%",
              top: params.quoteOffsetY ?? "5%",
            }}>
            {params.quote}
          </label>

          <div className="author-work">
            <label className="author">{params.author}</label>
            <label className="work-name">{params.workName}</label>
          </div>
          

          {params.backgroundPreview && (
            <img className="background" src={params.backgroundPreview}/>
          )}
          {params.additionalImgPreview && (
            <img className="additional-img" src={params.additionalImgPreview} 
              style={
                {
                  opacity: params.additionalImgTransparency,
                  width: params.additionalImgSizeW && params.additionalImgSizeW > 0 
                    ? params.additionalImgSizeW 
                    : "100%",
                  height: params.additionalImgSizeH && params.additionalImgSizeH > 0
                    ? params.additionalImgSizeH
                    : "100%",
                  left: params.additionalImgOffsetX ?? "0",
                  top: params.additionalImgOffsetY ?? "0"
                }
              }/>
          )}          
        </div>
    )
}
export default QuoteResult;