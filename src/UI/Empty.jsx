/* eslint-disable react/display-name */
import { memo } from "react"

export const Empty= memo(()=>{
    return(
        <div className="empty-container  flex flex-col ">
            <p className="highlighted-para">No pokemon found 🔍</p>
            <figure className="empty-img container flex flex-centered">
                <img src="http://localhost:5173/images/ohhh-jigglypuff.gif" alt="jigglypuff" />
            </figure>
        </div>
    )
})