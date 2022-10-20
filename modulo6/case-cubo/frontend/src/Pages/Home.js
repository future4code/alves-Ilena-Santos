import React, { useEffect, useState } from 'react'
import useForm from '../Hooks/useForm'
import axios from "axios"
import Swal from 'sweetalert2'
import { BASE_URL } from '../Constants/Urls'
import { Chart } from "react-google-charts";
import { ContainerForm, ContainerTableAndChart, H1, P } from './Home-styled'

function Home() {
    const { form, onChange, cleanFields } = useForm({ firstName: "", lastName: "", participation: "" })
    const [refreshPage, setRefreshPage] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/users`)
            .then((res) => {
                setUsers(res.data.users)
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err
                })
            })
    }, [refreshPage])


    const onSubmitForm = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}/users/signup`, form)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Cadastro feito!',
                    showConfirmButton: false,
                    timer: 3000
                })

                cleanFields()
                setRefreshPage(!refreshPage)
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message
                })
            })
    }

    const showUsers = users?.map((user,i) => {
        return (
            <tr key={user.first_name}>
                <td>{i+1}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.participation} %</td>
            </tr>
        )
    })

    let availableParticipation = 100


    const data = [
        ["Name", "Participation"]
    ]

    for (const user of users) {
        data.push([
            `${user.first_name} ${user.last_name}`,
            user.participation
        ])
        availableParticipation = availableParticipation - user.participation

    }

    data.push(["availableParticipation", availableParticipation])


    const options = {
        pieHole: 0.5,
        is3D: false,
        colors: ["#16ba9a", "#bdc3c7", "#2d97de", "#9c56b8", "#e94a35"],
        pieStartAngle: 230,
        pieSliceText: "none",
        legend: {
            alignment: "center",
            textStyle: {
                fontName: "Roboto",
                fontSize: 16
            },
        },

        chartArea:{
            left: 80,
            width: "60%",
        }
    }


    return (
    <div>
        <ContainerForm>
            <form onSubmit={onSubmitForm}>
                <input name={"firstName"}
                    placeholder='First name'
                    value={form.firstName}
                    onChange={onChange} />
                <input name={"lastName"}
                    placeholder='Last name'
                    value={form.lastName}
                    onChange={onChange} />
                <input name={"participation"}
                    placeholder='Participation'
                    value={form.participation}
                    onChange={onChange} />
                <button>SEND</button>
            </form>
        </ContainerForm>
        <H1>DATA</H1>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </P>
        <ContainerTableAndChart>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Participation</th>
                    </tr>
                </tbody>
                <tbody>
                    {showUsers}
                </tbody>
            </table>
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </ContainerTableAndChart>
    </div>
    )
}

export default Home