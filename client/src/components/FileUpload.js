
import React, {useState} from 'react';
import axios from 'axios';

function FileUpload(){
    const [selectedFile, setSelectedFile] = useState();
	const [isFileSelected, setIsFileSelected] = useState(false);

	const changeHandler = (event) => {
        console.log(event.target.files[0]);
		setSelectedFile(event.target.files[0]);
		setIsFileSelected(true);
	};

	const handleSubmission = () => {
        const formData = new FormData();
		formData.append('File', selectedFile);
        axios.post("http://localhost:8000/upload", formData, { 
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
	};

	return(
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            {isFileSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
	)
}

export default FileUpload;