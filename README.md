# riff.cc-data-manager-poc

## Usage

Install packages
```bash
yarn install
```

Paste required files lib/Composite.graphql and lib/definitions.ts generated ceramic-node repository.

Rename .env.local.example to env.local and fill variables
```bash
NEXT_PUBLIC_WEBSITE_ID=<TEST_WEBSITE_ID> # Generated in ceramic-node repository via yarn run example-queries
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


