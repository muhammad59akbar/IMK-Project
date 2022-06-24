import React from 'react';
import { useState } from 'react';
import './AddCategory.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const AddCategory = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('Laki-Laki');
    const [file , setFile] = useState('');
    const [preview, setPreview] = useState('');

    const Navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }

    const CreateCategory = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name" , nama);
        formData.append("email" , email);
        formData.append("password" , password);
        formData.append("gender" , gender);
        try {
            await axios.post("http://localhost:5000/mdproaddcat", formData, {
                headers : {
                    "Content-Type" : "multipart/form-data",
                },
            });
            alert ('Add Category is Successfully');
            Navigate('/mdproadmin/ViewCategory');
            setTimeout(() => {
                window.location.reload(false);
            }, 100);
        } catch (error) {
            console.log(error)  
        }
    }



  return (
    <div className='add-category-container'>
        <div className='add-category-input'>
            <h2>Add Category</h2>
            <form onSubmit={CreateCategory}>
                <div className='form-add'>
                    <label htmlFor="">Nama</label>
                    <input type="text" defaultValue={nama} onChange={(e)=> setNama(e.target.value)} />
                </div>
                <div className='form-add'>
                    <label htmlFor="">Email</label>
                    <input type="email" defaultValue={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className='form-add'>
                    <label htmlFor="">Password</label>
                    <input type="password" autoComplete='on' defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-add'>
                    <label htmlFor="">Gender</label>
                    <select defaultValue={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Laki-Laki">Laki-Laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>
                <div className='form-add'>
                    <label htmlFor="">Image</label>
                    <input type="file" onChange={loadImage} />
                </div>

                {preview ? ( 
                    <figure className='figure-prev'>
                        <img src={preview} alt="" />
                    </figure>
                ) : (
                    ""
                )}

                <div className='form-add'>
                    <button className='btn-grad btn-add'>Add Category</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default AddCategory