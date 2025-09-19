
import "./styles/selector.css";

export interface SelectorProps {
    name: string;
    children: React.ReactNode;
}



const Selector = (
    { name, children }: SelectorProps
) => {
    return (
        <div className="selector">
            <div className="name">
                <span>{name}</span>
            </div>
            <div className="options">
                {children}
            </div>
        </div>
    )
}
export default Selector;