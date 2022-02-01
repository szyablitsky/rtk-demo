
import { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: './swagger.json',
  apiFile: './src/store/baseApi.ts',
  apiImport: 'baseApi',
  outputFile: './src/store/chatApi.ts',
  exportName: 'chatApi',
  hooks: true,
}

export default config