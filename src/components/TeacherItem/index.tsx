import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZ7wUJmOTg7Nt7fNgnJ15a2OFvJ9iQFCFZ5A&usqp=CAU" alt="Walter White"/>
                <div>
                    <strong>Walter White</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências.
                Mais de 200.000 mil pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;