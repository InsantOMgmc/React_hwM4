
import React from 'react'
import logo from './Interstellar.jpg'
const Film = (props) => {
    return (
        <div>
            <h1>Film name: {props.name} </h1>
            <h3>FIO : {props.FIO} </h3>
            <h3>Date Pub: {props.date} </h3>
            <h3>Studio: {props.studio} </h3>
            <img src={props.logo}></img>
        </div>
    )
}

const Index = () => {
    return (
        <div>
            <Film name='Интерстеллар' FIO='Кристофер Нолан' date='2014' studio='Лос-Анджелес' logo={logo} ></Film>
        </div>
    );
};

export default Index;