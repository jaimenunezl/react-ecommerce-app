import { useEffect, useState } from 'react';

import { useLocalStorage } from '../Hooks';

const ACCOUNT_KEY = 'account';
const ACCOUNT_STATUS = 'is-logged-in';

export function useAccount() {
  const { item: accountSaved, saveItem: saveAccount } = useLocalStorage(
    ACCOUNT_KEY,
    {}
  );
  const { item: accountStatusSaved, saveItem: saveAccountStatus } =
    useLocalStorage(ACCOUNT_STATUS, false);

  const [account, setAccount] = useState(accountSaved);
  const [isLoggedIn, setIsLoggedIn] = useState(accountStatusSaved);

  const createNewAccount = (data) => {
    setAccount(data);
    updateLoginStatus(true);
  };

  const updateLoginStatus = (status) => {
    setIsLoggedIn(status);
  };

  const isValidLogin = (data) => {
    const { email, password } = data;

    return account.email === email && account.password === password;
  };

  useEffect(() => {
    saveAccount(account);
  }, [account, saveAccount]);

  useEffect(() => {
    saveAccountStatus(isLoggedIn);
  }, [isLoggedIn, saveAccountStatus]);

  return {
    account,
    isLoggedIn,
    createNewAccount,
    updateLoginStatus,
    isValidLogin,
  };
}
