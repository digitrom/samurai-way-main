import React from "react";
import {SidebarType} from "../../../redux/state";

type PropsType = {
    state: SidebarType
}

export const Friends = (props: PropsType) => {

    let sidebarElements = props.state.friends.map((f) => <div>{f.name}</div>)

return (
    <div>
    <div>Friends</div>
    {sidebarElements}
    </div>
)
}

