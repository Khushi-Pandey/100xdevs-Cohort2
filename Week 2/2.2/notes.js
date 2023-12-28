// ECMAScript is the specification/documentation that should be followed to design the compiler of javascript although js is an interpreted lang but something is converting js code into 0's and 1's
// some additional features of JS are not a part of ECMAScript spec, like DOM, crucial for web dev but is not defined by ECMAScript
// JS was meant to be run in browser only, by V8 engine that is google's developed JS engine

// Node.js is a runtime that runs JS in the backend
// Bun is the competitor of Node.js and is written in Zig language. Bun is faster than Node.js
// The most popular usecase that node.js gives in the backend is to create an HTTP Server

// HTTP: Hyper text transfer Protocol
// WebRTC protocol is used for video communication

// Http-> 1. protocol defined for machines to communicate
// 2. it's the most common way for your website's frontend to talk to its backend
// sometimes WebSocket protocol is used to communicate b/w frontend(also called client) & backend

// http Server: some code that follows http protocol
// RPC: (Remote Procedure Call) calling a fn but on someone else's machine. some ML model or anything that you don't have locally but want to access from a remote system
// just like a function call except that the fn exists locally on your machine

// header has all the authentication information

// fs that we used to read a file is a library
// now, we're going to use Express lib. to write a http server
// Next.js is taking over Express slowly as it's losing it's appeal