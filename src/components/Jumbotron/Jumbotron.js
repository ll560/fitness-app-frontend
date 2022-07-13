import React from "react"
import {Jumbotron as Jumbo, Container} from 'react-bootstrap/';
import running from '../../assets/workout1'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Styles = styled.div`
    .jumbo{
        background: url(${running}) no repeat fixed bottom;
        background-size: cover;
        color: #ccc;

        position: relative;
        z-index: -2;
    }

    .overlay{
        opacity:0.6;
        position: absolute;



        z-index:-1;
    }

`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div>
                <h1>Welcome</h1>
            </div>

        </Jumbo>
    </Styles>
)
