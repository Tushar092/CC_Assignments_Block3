const createBankAccount = (value) => {
  let balance = value;
  function deposit(amount) {
    balance += amount;
    return balance;
  }
  function withdraw(amount) {
    balance -= amount;
    return balance;
  }
  function getBalance() {
    return balance;
  }
  return { deposit, withdraw, getBalance };
};


const account = createBankAccount(100);
console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.getBalance());
// console.log(balance);