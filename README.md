[![Contributors](https://img.shields.io/opencollective/all/riffcc?style=flat-square)](https://opencollective.com/riffcc)

**NOTE:** This repository is outdated. Please visit [the newer, up-to-date version](https://github.com/riffcc/riff.cc-vue) instead.

# Riff.CC on Ceramic (ComposeDB)

Riff.CC on Ceramic (also referred to as CeramicRiff) is a proof-of-concept version of Riff.CC, implemented using Ceramic and ComposeDB. It is one of the two current platforms for hosting Riff.CC instances, the other being [Orbiter](https://github.com/riffcc/orbiter). This repository contains instructions on how to set up and install a Riff.CC instance through CeramicRiff, as well as the necessary code to do so. For more information about CeramicRiff, as well as the Riff.CC project itself, [see the project's main page](https://riff.cc/riff-docs/).

Funding provided via [OpenCollective](https://opencollective.com/riffcc).

## Getting Started

CeramicRiff will work on any standard Linux distribution where standard utilities like a webserver and Node.JS are available, but **our instructions specifically cover the latest LTS releases of Ubuntu and Debian only**. Ask us (or submit a PR) if you want any others to be added.

### Dependencies

You must make sure the `git` command is installed. If not, run the following command as root:

```
# apt install git
```

Additionally, CeramicRiff utilizes **Node.JS** and **yarn** to set up and install the platform, and as such it's required to install them as well. We suggest using the [NodeSource installation guide](https://github.com/nodesource/distributions#installation-instructions), with $NODE_MAJOR set to 20:

1. Download and import the Nodesource GPG key

```sh
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
```

2. Create deb repository

```sh
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```

3. Run apt update and install the Node.JS package

```sh
sudo apt-get update
sudo apt-get install nodejs -y
```

4. Install Yarn once Node.JS is installed:
```sh
npm install -g yarn
```

5. Set up and configure [ceramic-node](https://github.com/riffcc/ceramic-node). CeramicRiff requires it to be configured and running in order to function - Ceramic-Node's location is not important, as it runs as a service on the local machine, which CeramicRiff communicates with.

### Installation

1. Clone CeramicRiff's GitHub repository:

```bash
git clone https://github.com/riffcc/ceramic-riff-web.git
```

2. Move into CeramicRiff's directory and set up its installation packages:
```bash
cd ceramic-riff-web
yarn install
```

3. Rename .env.local.example to env.local, and fill in its variables:
```bash
NEXT_PUBLIC_NODE_URL=<YOUR_NODE_URL> # If you run an own local node <http://localhost:7007> , or an external node <http://<SERVER_PUBLIC_IP>:7007>
NEXT_PUBLIC_ADMIN_SERVER=<YOUR_ADMIN_SERVER_URL> # Run admin server in riffcc/ceramic-node repository via yarn run admin:server
NEXT_PUBLIC_WEBSITE_ID=<TEST_WEBSITE_ID> # Generated in riffcc/ceramic-node repository via yarn run generate:website
NEXT_PUBLIC_IPFS_GATEWAY=<YOUR_INFURA_IPFS_GATEWAY> # Ex. my-gateway.infura-ipfs.io
```

4. Run [ceramic-node](https://github.com/riffcc/ceramic-node) so CeramicRiff can properly communicate with it.

5. Run the application in development mode (with hot reloading):
```bash
yarn dev
```

## License
Made available under the MIT License.

## Credits
Authored by [@en0c-026](https://github.com/en0c-026), [@Zorlin](https://github.com/Zorlin), and the Riff.CC Project.

## Sponsors
Thank you to our sponsors, who have generously provided funding for the development of the Riff.CC Project:

* [Money Every 3 Days](http://moneyevery3days.com/)
