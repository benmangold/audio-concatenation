# Node.js and npm Installation

## PREFERRED - MacOSX or Linux

### Install via Node Version Manager (NVM)

```bash
# install nvm via bash script
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

# NOTE this adds nvm to your bash profile, if you use zsh, see NOTE below

# verify nvm command, should output "nvm"
command -v nvm
# If that doesn't output "nvm", restart terminal

# install and use node and npm v. 8
nvm install 8

nvm use 8
```

NOTE if you use zsh, add the following to ~/.zshrc and restart terminal

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

## Alternative Installations

## MacOSX

### Install via the Node.js Mac Installer

[Node Downloads - Download and run macOS Installer (.pkg)](https://nodejs.org/en/download/)

## Linux (Ubuntu)

### Install via apt-get

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

## Windows

Install via Node.js Windows Installer (.msi)
`https://nodejs.org/en/download/`

or

Install via Chocolatey
`https://chocolatey.org/install`

With Chocolatey Installed:

```
cinst nodejs.install
```

# Verifying Node.js and npm Installation

```bash
node -v
npm -v
```

should display ...

(NOTE: More recent versions work as well, these work for me)

```bash
node -v
v8.10.0
npm -v
3.5.2
```
