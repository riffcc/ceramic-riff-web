# riff.cc-data-manager-poc

## Usage

Install packages
```bash
yarn install
```

Paste required files lib/Composite.graphql and lib/definitions.ts generated ceramic-node repository.

Rename .env.local.example to env.local and fill variables
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


