import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Input from "../Input";
import "./ApiComponent.css"; // Import the CSS file
import "./Response.css"; // Import the CSS file


const ApiComponent: React.FC = () => {
    const [url, setUrl] = useState("");
    const [response, setResponse] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const handleButtonClick = async () => {
        try {
            const apiResponse = await axios.get(url);
            setResponse(apiResponse.data.fact); // Assuming the API response has a "fact" property
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Input value={url} onChange={handleInputChange} />
            <Button onClick={handleButtonClick} />
            <div className="response-container">
            </div>
            <div className="response-text">{response}</div>
            <div className="background-image"></div>
        </div>
    );
};

export default ApiComponent;