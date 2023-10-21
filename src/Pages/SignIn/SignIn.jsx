import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../Components';

import { StoreContext } from '../../Context';

function LoginForm({ data: accountSaved, hasError, onSubmit }) {
  const { email = '', password = '' } = accountSaved || {};

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const dataParsed = Object.fromEntries(data.entries());
    onSubmit(dataParsed);
  };

  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="border px-3 py-2"
        type="email"
        name="email"
        id="email"
        defaultValue={email}
        placeholder="myemail@example.com"
      />
      <input
        className="border px-3 py-2 mt-2"
        type="password"
        name="password"
        id="password"
        defaultValue={password}
        minLength="6"
      />
      <button
        className="bg-blue-400 text-white rounded-sm mt-2 hover:bg-blue-600 transition-colors py-1"
        type="submit"
      >
        Entrar
      </button>
      {hasError && (
        <p className="text-red-600 text-center mt-2">Cuenta no encontrada</p>
      )}
    </form>
  );
}
function SignUpForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const dataParsed = Object.fromEntries(data.entries());
    onSubmit(dataParsed);
  };

  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="border px-3 py-2"
        type="text"
        name="name"
        id="name"
        minLength="4"
        placeholder="Juan Perez"
      />
      <input
        className="border px-3 py-2 mt-2"
        type="email"
        name="email"
        id="email"
        placeholder="juan.perez@example.com"
      />
      <input
        className="border px-3 py-2 mt-2"
        type="password"
        name="password"
        id="password"
        minLength="6"
      />

      <button
        className="w-full bg-blue-400 text-white rounded-sm mt-2 hover:bg-blue-600 transition-colors py-1"
        type="submit"
      >
        Registrarse
      </button>
    </form>
  );
}

function SignIn() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [hasError, setHasError] = useState('');
  const navigate = useNavigate();

  const {
    account,
    isLoggedIn,
    createNewAccount,
    updateLoginStatus,
    isValidLogin,
  } = useContext(StoreContext);

  const handleLogin = (data) => {
    if (isValidLogin(data)) {
      updateLoginStatus(true);

      navigate('/');
    } else {
      setHasError('Cuenta no encontrada');
    }
  };

  const handleSignUp = (data) => {
    createNewAccount(data);
    updateLoginStatus(true);

    navigate('/');
  };

  return (
    <Layout>
      <div>
        <header>
          <h1 className="font-bold text-xl mb-3 text-center">Mi Cuenta</h1>
        </header>
        <main className="flex flex-col">
          {showSignUp ? (
            <SignUpForm onSubmit={handleSignUp} />
          ) : (
            <LoginForm
              data={isLoggedIn ? account : null}
              hasError={hasError}
              onSubmit={handleLogin}
            />
          )}

          {showSignUp ? (
            <span
              className="w-full text-center mt-4 cursor-pointer hover:underline hover:underline-offset-4"
              onClick={() => setShowSignUp(false)}
            >
              Volver
            </span>
          ) : (
            <>
              <p className="mt-6">¿Aún no tienes cuenta?</p>

              <button
                className={`bg-blue-400 text-white rounded-sm mt-2  transition-colors py-1 ${
                  isLoggedIn
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-blue-600'
                }`}
                type="submit"
                disabled={isLoggedIn}
                onClick={() => setShowSignUp(true)}
              >
                Registrarse
              </button>
            </>
          )}
        </main>
      </div>
    </Layout>
  );
}

export default SignIn;
