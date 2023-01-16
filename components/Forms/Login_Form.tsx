import next from 'next';
import Router from 'next/router'
import { title } from 'process';
import React, { ChangeEventHandler, FormEventHandler, InputHTMLAttributes, MouseEventHandler, useEffect, useRef, useState } from 'react'
import User from '../../pages/api/user';

type Props = {
  Accedi: FormEventHandler<HTMLFormElement>,
  Username: any,
  setUsername: ChangeEventHandler<HTMLInputElement>
  Password: any,
  setPassword: ChangeEventHandler<HTMLInputElement>,
  errMsg: string,
}

const Title = (<>
  <div>
    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
      Accedi al Pannello
    </h2>
  </div>
</>);

const Form = (props: Props) => {

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={props.Accedi} method='POST' action={"../../api/user"} onError={props.Accedi} >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="username"
              value={props.Username}
              onChange={props.setUsername}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              value={props.Password}
              onChange={props.setPassword}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"

            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              ricordami
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              password dimenticata?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Accedi
          </button>
        </div>

        <p aria-live='assertive'>
          {props.errMsg}
        </p>
      </form>
    </>
  );
}


export default function LoginForm() {
  const userRef = useRef();
  const errRef = useRef();
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [Username, Password])

  const Accedi = async () => {
    if (Username == "CristianSorrentino" && Password == "Cristian07") {
      Router.push('/home')
    } else {
      setSuccess(false)
      setErrMsg("Autenticazione non avvenuta con successo");
      throw console.error(setErrMsg)
    }
    return;
  }

  return (
    <>

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">

          {Title}
          <Form Accedi={Accedi} Username={Username} setUsername={(e) => setUsername(e.target.value)} Password={Password} setPassword={(e) => setPassword(e.target.value)} errMsg={errMsg}/>
        </div>
      </div>
    </>
  )
}
