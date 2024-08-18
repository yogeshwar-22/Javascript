const accountId = 12345
let accountEmail = "Yogeshwar.rokade55@gmail.com"
var accountPassword = "212121"
accontCity = "Silvassa"
let accountState;

// accountId = 2 // not allowed as it is defied as const

/*
Prefer not to use var beacause
of issue in block scope and functional scope */

console.table([accountEmail,accountId, accountPassword, accontCity,accountState])