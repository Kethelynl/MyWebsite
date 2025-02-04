import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({texts}) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        user_email: '',
        user_phone: '',
        user_message: ''
    });

    const [statusMessage, setStatusMessage] = useState(''); // Mensagem de sucesso ou erro


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Enviando o e-mail com as variáveis preenchidas
        emailjs.sendForm('service_09h679q', 'template_yz8j0aj', e.target, 'u-2cKUPgqLoxk5g-i')
            .then((result) => {
                console.log(result.text);
                setStatusMessage('Email enviado com sucesso!');
                setFormData({ // Limpar os campos do formulário
                    first_name: '',
                    last_name: '',
                    user_email: '',
                    user_phone: '',
                    user_message: ''
                });
            }, (error) => {
                console.log(error.text);
                setStatusMessage('Falha ao enviar o email. Tente novamente!'); 
            });
    };

    return (
        <div className='conataine-message' id='contact'>
            {statusMessage && <div className="status-message">{statusMessage}</div>}
            <div className='cct-flex'>
                <div className='cct-img'>
                    <img src='/assets/img/phone2.png' alt='phone'/>
                </div>
                <div className='cct-form'>
                    <h3>{texts.title}</h3>
                    <form onSubmit={sendEmail}>
                        <div className='block1'>
                            <input
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    placeholder={texts.name}
                                />
                                <input
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    placeholder={texts.lastname}
                                />
                        </div>
                        <div className='block2'>
                            <input
                                    type="email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    placeholder={texts.email}
                                />
                                <input
                                    type="text"
                                    name="user_phone"
                                    value={formData.user_phone}
                                    onChange={handleChange}
                                    placeholder={texts.phone}
                                />
                        </div>
                            <textarea
                                name="user_message"
                                value={formData.user_message}
                                onChange={handleChange}
                                placeholder={texts.message}
                            />
                            <button type="submit"><span>{texts.btn}</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
