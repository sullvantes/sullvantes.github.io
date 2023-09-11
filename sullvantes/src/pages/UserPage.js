import React from "react";
import { useParams } from "react-router-dom";
export default function UserPage(){
    let { id } = useParams();
    return (
        <>
        <h1>Hello there user {id}</h1>
        <p> A little bit about me. This is my awesome User Profile Page</p>
        </>
        );
    }