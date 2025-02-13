/* eslint-disable react/display-name */
import { memo } from "react"

export const Loading=memo(()=>{
    return(
        <section className="loading-section section flex flex-centered">
            <div className="container flex flex-centered">
                <figure className="loading-img">
                    <img src="http://localhost:5173/images/loading.gif" alt="loading img" />
                </figure>
                <figure className="loading-img">
                    <img src="http://localhost:5173/images/loading.gif" alt="loading img" />
                </figure>
            </div>
        </section>
    )
})