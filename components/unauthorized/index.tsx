import Link from 'next/link'
import React from 'react'

type Props = {}

const Unautho = (props: Props) => {
  return (
    <div className='p-4 text-center h-screen w-screen flex justify-center items-center flex-col'>
      <h1 className='text-3xl md:text-5xl'>Accées Non Autorisé!🙁</h1>
      <p>Veuillez contacter le service d'assistance ou votre propriétaire pour obtenir des accés.</p>
      <Link href="/" className='mt-4 bg-primary p-2'>
       Retour à l'accueil
      </Link>
    </div>
  )
}

export default Unautho