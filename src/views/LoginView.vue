<template>
    <div class="login">
      <h1>This is a login page</h1>
      <div class="form-login">
        <input placeholder="Usuario">
        <input placeholder="Password">
        <button>Login</button>
      </div>
    </div>
  </template>
  
  <style>
 .login{
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: blue;
    align-items: center;
    margin: 50px;
    padding: 50px;
  }
  .form-login{
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: blue;
  }
  </style>