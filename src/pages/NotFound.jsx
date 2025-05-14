import React from 'react'
import { Alert } from 'antd';

const NotFound = () => {
  return (
    <div className='flex flex-col gap-10 px-5'>
        <Alert
        message="Página não encontrada"
        description="Desculpe, a página que você procura não existe ou não foi encontrada!"
        type="error"
        showIcon
        />
        <p>Não se preocupe! Você pode voltar para nossa <span> <Link to='/' className='houver: underline text-blue-500'>página inicial</Link></span></p>
    </div>
  )
}

export default NotFound