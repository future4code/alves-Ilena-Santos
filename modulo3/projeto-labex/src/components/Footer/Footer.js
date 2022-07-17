import React from 'react'
import { ContainerFooter } from './Footer-styled'
import {H4} from "../Letter-styled"
import Linkedin from "../../img/linkedin.png"


export default function Footer() {
    return (
        <ContainerFooter>
            <H4>Desenvolvido por Ilena Acioli</H4>
            <div>
            <a target={'_blank'} href="https://www.linkedin.com/in/ilenaacioli/"><img src={Linkedin} height='22px' width='22px' className="media-object  img-responsive img-thumbnail" /></a>
            </div>
        </ContainerFooter>
    )
}
