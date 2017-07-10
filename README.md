# Fable Core Output Problem

npm5 is required.

steps to reproduce:
```
git clone https://github.com/ed-ilyin/FableCoreOutputProblem.git
cd FableCoreOutputProblem
npm install
dotnet restore
rm -rf out
cd src/App
dotnet fable npm-run split
cd ../..
node out/FableCoreOutputProblem/App.js
```
output:
```
module.js:487
    throw err;
    ^

Error: Cannot find module '../fable-core/String'
    at Function.Module._resolveFilename (module.js:485:15)
    at Function.Module._load (module.js:437:25)
    at Module.require (module.js:513:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/ed/git/github.com/ed-ilyin/FableCoreOutputProblem/out/FableCoreOutputProblem/App.js:3:15)
    at Module._compile (module.js:569:30)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
```
