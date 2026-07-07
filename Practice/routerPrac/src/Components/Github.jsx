import React from "react";
import { useLoaderData } from "react-router";

// 'https://api.github.com/users/hiteshchoudhary'

function Github() {
    const data = useLoaderData()

    return (
        <div className="text-center text-2xl mt-3 mb-8 text-">
            Github followers : {data.followers}
            <img className="mx-auto block mt-4" src={data.avatar_url} width={300} alt="GitHub avatar" />
        </div>
    )
}   

export default Github

export async function githubInfo() {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}