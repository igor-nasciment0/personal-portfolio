import './index.scss';
import { useState } from "react"

export default function CustomCheckbox(props: { value: string | number }) {

    const id = "check-" + props.value;
    const [selected, setSelected] = useState(false);

    return (
        <div className="custom-checkbox">
            <div onClick={() => setSelected(!selected)}
                style={selected ? { backgroundColor: "var(--light-blue)", borderColor: "var(--light-blue)" } : {}}
            >
                <img src="/assets/images/icons/check.svg" alt="" style={selected ? {} : {visibility: "hidden"}}/>
            </div>

            <input type="checkbox" id={id} checked={selected} />
        </div>
    )
}