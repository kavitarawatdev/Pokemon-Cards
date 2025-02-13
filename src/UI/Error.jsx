/* eslint-disable react/display-name */
import { useNavigate, useRouteError } from "react-router-dom"
import { memo } from "react";

export const Error= memo(()=>{
    const error = useRouteError();
    const navigate = useNavigate();
    return(
        <section className="error-section section  flex flex-centered">
            <div className="container flex flex-col flex-centered">
                <h2 className="common-heading-2">
                {error.status}
                </h2>
                <div className="flex flex-centered">
                    <figure className="error-img">
                        <img src="http://localhost:5173/images/searching.gif" alt="" />
                    </figure>
                    <p className="error-message">{error.data}</p>
                </div>
                <button className="btn" onClick={()=>navigate(-1)}> Back to Previous page</button>
            </div>
        </section>
    )
})
