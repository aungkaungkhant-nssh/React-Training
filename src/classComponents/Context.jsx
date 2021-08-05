import React, { Component } from 'react'

const Context=React.createContext();
const UserProvider=Context.Provider;
const UserConsumer=Context.Consumer;

export  {UserProvider,UserConsumer}
export default Context