import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './lib/Composite.graphql',
  documents: './utils/constants.ts',
  generates: {
    './utils/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
