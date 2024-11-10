import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { NavLink } from 'react-router-dom'
function ErrorPage() {
    const Wraper=styled.section`
    .errorCointaner{
        width: 70%;
        height:350px;
        display: grid;
        place-items: center;
        margin:0 auto;

        .content{
            width: 70%;
            height:300px;
            display: grid;
            place-items: center;
        }

        img{
            width: 70%;
            height:300px;
        }
    }`
  return (
    <>
    <Wraper>
        <div className='errorCointaner'>
            <div className='content'>
            <img src='./images/error.svg'/>
           

            </div>
            <NavLink to='/'>
                <Button>
                     Go Back
                </Button>
            </NavLink>
        </div>
    </Wraper>
    </>
  )
}

export default ErrorPage