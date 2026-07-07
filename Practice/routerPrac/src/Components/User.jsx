import React, { use } from "react";
import { useParams } from "react-router";

export default function User() {
    const {userId} = useParams()  //useParams() returns an object, e.g., { userId: " " }
    return(
        <div className="text-4xl px-4 py-4">
            User : {userId}
        </div>
    )
}