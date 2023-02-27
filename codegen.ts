import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './lib/composedb/Composite.graphql',
  documents: './utils/constants.ts',
  generates: {
    './utils/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'graphql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
