import React, {useState} from 'react';
import {toggleModal} from "../../store/sliceModal";
import Modal from "../Modal/Modal";
import {useDispatch} from "react-redux";
import "./register.scss"
import Auth from "../../services/Auth";

function Register() {
    const dispatch = useDispatch();

    const [dataInput, setDataInput] = useState({});


    const handlerInput = (e) => {
        //pravim kopiju state i posle ga samo vratim
        let copyDataInput = {...dataInput};

        //ovde sam preko {objecta} ubacio u njega [Key] : Value!
        copyDataInput[e.target.name] = e.target.value;
        //ovde sam vratio sve ubaceno!
        setDataInput(copyDataInput);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        Auth.Register(dataInput);
    }
    return (
        <Modal>
            <form className="form-register" onSubmit={handlerSubmit}>
                <input type="text" placeholder="Full Name" name="fullName"
                       onInput={handlerInput}/>
                <input type="email" placeholder="Email" name="email"
                       onInput={handlerInput}/>
                <input type="password" placeholder="Password" name="password"
                       onInput={handlerInput}/>
                <input type="text" placeholder="Img URL" name="imgURL"
                       onInput={handlerInput}/>
                <button>Register</button>
                <button type="button"
                        onClick={() => {
                            dispatch(toggleModal({register: false}))
                        }}>Cancel
                </button>
            </form>
        </Modal>
    );
}

export default Register;
