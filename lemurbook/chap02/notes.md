# Data Types

Basic data types supported by mongodb include:

- Null
- Boolean
- Number
- String
- Date
- Array
- ObjectId
- Embedded document
- Regular Expression
- Binary Data
- Code

## Date

You can't assign a field with `Date` type using `Date()` which generates a
string representation of date.

## `_id` and ObjectId

The `_id` is a special field to uniquely identify a document. By default, it is
assiged using `ObjectId()` when a document is inserted. You can also assign
this field explicitly using value of your choice as long as it is unique in the
collection.

ObjectId is a 12-byte value with structure as follows:

0 1 2 3   | 4 5 6 7 8    | 9 10 11
Timestamp | Random value | Counter(random start value)

- first four bytes are a timestamp in seconds since the epoch.
- next five bytes are a random value
- next three bytes are a counter start with a random value

# MongoDB shell

It is a full-featured JavaScript REPL. You can access help as follows:

- help -- overall help
- db.help() -- help on db methods
- db.<collection>.help() -- help on collection methods

## Run JavaScript in batch

    mongosh --port 3001 --quiet script1.js

where `scirpt1.js` contains:

    db = db.getSiblingDB('video')
    db.movive.find().pretty()

# mongoshell init file

You can use `~/.mongoshrc.js` to customize the mongoshell to your like.
For instance, you can set the prompt with a count of commands executed so far:


    const hostnameSymbol = Symbol('hostname');
    prompt = () => {
      if (!db[hostnameSymbol])
         db[hostnameSymbol] = db.serverStatus().host;
      return `${db.getName()}@${db[hostnameSymbol]}> `;
    };
