[![Contributors](https://img.shields.io/opencollective/all/riffcc?style=flat-square)](https://opencollective.com/riffcc)

# Riff.CC on Ceramic (ComposeDB)

A proof-of-concept version of Riff.CC, implemented using Ceramic and ComposeDB. Funding provided via OpenCollective.

## Usage

* Setup and configure [ceramic-node](https://github.com/riffcc/ceramic-node)

* Install packages
```bash
yarn install
```

* Copy lib/Composite.graphql and lib/definitions.ts from the ceramic-node repository.
```bash
cp ../ceramic-node/composites/Composite.graphql lib/
cp ../ceramic-node/composites/definitions.ts lib/
```

* Rename .env.local.example to env.local and fill variables
```bash
NEXT_PUBLIC_PRIVATE_KEY<NODE_PRIVATE_KEY> # Generated in ceramic-node repository via yarn run generate:private-key
NEXT_PUBLIC_WEBSITE_ID=<TEST_WEBSITE_ID> # Generated in ceramic-node repository via yarn run graphql:example-queries
NEXT_PUBLIC_IPFS_GATEWAY=<YOUR_INFURA_IPFS_GATEWAY> # Ex. my-gateway.infura-ipfs.io
```
Generate graphql files

```bash
yarn run compile
```

Run the application
```bash
yarn dev
```

## License
Made available under the MIT License.

## Credits
Authored by [@en0c-026](https://github.com/en0c-026), [@Zorlin](https://github.com/Zorlin)
