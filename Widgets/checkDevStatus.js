// This code snippet checks if your NODE_ENV environment variable is set to
// 'development' to allow you to set things like auto-sync of databases, use 
// passwords, etc.

// returns a boolean based on if 'NODE_ENV' exists/is set to development or not
var isDev = (process.enc.NODE_ENV === 'development')