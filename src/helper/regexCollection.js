export const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

export const regexPassword =
  /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?+-=€/ ])\S*$/;

export const regexPrice = /^[0-9]+$/;

export const regexTelephoneNumber =
  /\+?\(?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const regexName = /^[A-Za-z]{3,}/i;

export const regexNumbersOnly = /^\d+$/;

export const regexUserName = /^[a-zA-Z0-9]{3,}/;