# riff.cc-data-manager-poc

## Usage

Install packages
```bash
yarn install
```

Paste required files lib/Composite.graphql and lib/definitions.ts generated ceramic-node repository.

Rename .env.local.example to env.local and fill variables
```bash
WEBSITE_ID=<TEST_WEBSITE_ID> # Generated in ceramic-node repository via yarn run example-queries
DUMP_DOCUMENT_ID=<DUMP_DOCUMENT_ID> # Generated in ceramic-node repository via yarn run example-queries
NEXT_PUBLIC_IPFS_GATEWAY=<YOUR_INFURA_IPFS_GATEWAY> # Ex. https://my-gateway.infura-ipfs.io/ipfs/
```
Generate graphql files

```bash
yarn run compile
```

Run the application
```bash
yarn dev
```


